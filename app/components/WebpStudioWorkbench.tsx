"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import JSZip from "jszip";
import NextImage from "next/image";
import Link from "next/link";
import { trackEvent } from "../lib/gtag";

export type Preset = "balanced" | "ultra" | "lossless" | "custom";
export type ResizeMode = "contain" | "cover" | "none";
export type AlphaMode = "transparent" | "fill";
export type TuningTab = "compression" | "transform" | "filters" | "export";

export interface ImageSettings {
  preset: Preset;
  quality: number;
  isLossless: boolean;
  maxWidth: number;
  maxHeight: number;
  resizeMode: ResizeMode;
  scaleFactor: number;
  alphaMode: AlphaMode;
  bgColor: string;
  nameTemplate: string;
  rotation: number; // 0, 90, 180, 270
  flipH: boolean;
  flipV: boolean;
  brightness: number; // percentage (100 = default)
  contrast: number; // percentage (100 = default)
  grayscale: boolean;
}

export interface ConvertedFile {
  id: string;
  rawFile: File;
  originalName: string;
  originalSize: number;
  originalWidth: number;
  originalHeight: number;
  originalUrl: string;
  convertedSize: number;
  convertedWidth: number;
  convertedHeight: number;
  convertedUrl: string;
  webpName: string;
  format: string;
  settings: ImageSettings;
}

const DEFAULT_SETTINGS: ImageSettings = {
  preset: "balanced",
  quality: 0.8,
  isLossless: false,
  maxWidth: 1920,
  maxHeight: 0,
  resizeMode: "contain",
  scaleFactor: 1,
  alphaMode: "transparent",
  bgColor: "#ffffff",
  nameTemplate: "{name}.webp",
  rotation: 0,
  flipH: false,
  flipV: false,
  brightness: 100,
  contrast: 100,
  grayscale: false,
};

function resolveFileName(
  originalFileName: string,
  template: string,
  width: number,
  height: number,
  quality: number,
  isLossless: boolean,
): string {
  const originalBaseName =
    originalFileName.substring(0, originalFileName.lastIndexOf(".")) ||
    originalFileName;
  const targetQuality = isLossless ? 100 : Math.round(quality * 100);

  let output = (template || "{name}.webp")
    .replace(/{name}/g, originalBaseName)
    .replace(/{width}/g, width.toString())
    .replace(/{height}/g, height.toString())
    .replace(/{quality}/g, targetQuality.toString());

  if (!output.toLowerCase().endsWith(".webp")) {
    output += ".webp";
  }
  return output;
}

async function encodeToWebP(
  file: File,
  originalUrl: string,
  settings: ImageSettings,
): Promise<{
  convertedSize: number;
  convertedWidth: number;
  convertedHeight: number;
  convertedUrl: string;
  webpName: string;
  originalWidth: number;
  originalHeight: number;
}> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const isRotated90or270 =
        settings.rotation === 90 || settings.rotation === 270;
      const baseNaturalWidth = isRotated90or270
        ? img.naturalHeight
        : img.naturalWidth;
      const baseNaturalHeight = isRotated90or270
        ? img.naturalWidth
        : img.naturalHeight;

      let targetWidth = baseNaturalWidth * settings.scaleFactor;
      let targetHeight = baseNaturalHeight * settings.scaleFactor;

      if (settings.maxWidth > 0 && targetWidth > settings.maxWidth) {
        if (settings.resizeMode === "contain") {
          targetHeight = Math.round(
            (targetHeight * settings.maxWidth) / targetWidth,
          );
          targetWidth = settings.maxWidth;
        } else if (settings.resizeMode === "none") {
          targetWidth = settings.maxWidth;
        }
      }

      if (settings.maxHeight > 0 && targetHeight > settings.maxHeight) {
        if (settings.resizeMode === "contain") {
          targetWidth = Math.round(
            (targetWidth * settings.maxHeight) / targetHeight,
          );
          targetHeight = settings.maxHeight;
        } else if (settings.resizeMode === "none") {
          targetHeight = settings.maxHeight;
        }
      }

      targetWidth = Math.max(1, Math.round(targetWidth));
      targetHeight = Math.max(1, Math.round(targetHeight));

      const canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas context initialization failed"));
        return;
      }

      if (settings.alphaMode === "fill") {
        ctx.fillStyle = settings.bgColor;
        ctx.fillRect(0, 0, targetWidth, targetHeight);
      }

      const filters = [
        `brightness(${settings.brightness}%)`,
        `contrast(${settings.contrast}%)`,
        settings.grayscale ? "grayscale(100%)" : "",
      ]
        .filter(Boolean)
        .join(" ");

      ctx.filter = filters || "none";

      ctx.save();
      ctx.translate(targetWidth / 2, targetHeight / 2);
      ctx.rotate((settings.rotation * Math.PI) / 180);
      ctx.scale(settings.flipH ? -1 : 1, settings.flipV ? -1 : 1);

      const drawWidth = isRotated90or270 ? targetHeight : targetWidth;
      const drawHeight = isRotated90or270 ? targetWidth : targetHeight;

      ctx.drawImage(
        img,
        -drawWidth / 2,
        -drawHeight / 2,
        drawWidth,
        drawHeight,
      );
      ctx.restore();

      const targetQuality = settings.isLossless ? 1.0 : settings.quality;
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("WebP conversion failed"));
            return;
          }

          const convertedUrl = URL.createObjectURL(blob);
          const webpName = resolveFileName(
            file.name,
            settings.nameTemplate,
            targetWidth,
            targetHeight,
            settings.quality,
            settings.isLossless,
          );

          resolve({
            convertedSize: blob.size,
            convertedWidth: targetWidth,
            convertedHeight: targetHeight,
            convertedUrl,
            webpName,
            originalWidth: img.naturalWidth,
            originalHeight: img.naturalHeight,
          });
        },
        "image/webp",
        targetQuality,
      );
    };

    img.onerror = () => reject(new Error(`Failed to load ${file.name}`));
    img.src = originalUrl;
  });
}

export default function WebpStudioWorkbench() {
  const [globalDefaults, setGlobalDefaults] =
    useState<ImageSettings>(DEFAULT_SETTINGS);
  const [files, setFiles] = useState<ConvertedFile[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Panel States
  const [isLeftCollapsed, setIsLeftCollapsed] = useState<boolean>(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TuningTab>("compression");

  // Stage & View Mode
  const [viewMode, setViewMode] = useState<"side-by-side" | "slider" | "code">(
    "slider",
  );
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingProgress, setProcessingProgress] = useState<number>(0);
  const [processingStatus, setProcessingStatus] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [copiedType, setCopiedType] = useState<
    "picture" | "css" | "img" | null
  >(null);

  const activeEncodeIdRef = useRef<number>(0);
  const dragCounter = useRef<number>(0);

  const selectedFile =
    files.find((f) => f.id === selectedFileId) || files[0] || null;

  const reprocessSpecificFile = useCallback(
    async (fileId: string, updatedSettings: ImageSettings) => {
      const target = files.find((f) => f.id === fileId);
      if (!target) return;

      const encodeId = ++activeEncodeIdRef.current;

      try {
        const result = await encodeToWebP(
          target.rawFile,
          target.originalUrl,
          updatedSettings,
        );
        if (encodeId !== activeEncodeIdRef.current) return;

        URL.revokeObjectURL(target.convertedUrl);

        setFiles((prev) =>
          prev.map((item) => {
            if (item.id === fileId) {
              return {
                ...item,
                settings: updatedSettings,
                convertedSize: result.convertedSize,
                convertedWidth: result.convertedWidth,
                convertedHeight: result.convertedHeight,
                convertedUrl: result.convertedUrl,
                webpName: result.webpName,
              };
            }
            return item;
          }),
        );
      } catch (err) {
        console.error("Individual re-encode failed:", err);
      }
    },
    [files],
  );

  const handleNameTemplateChange = (newTemplate: string) => {
    if (!selectedFile) {
      setGlobalDefaults((prev) => ({ ...prev, nameTemplate: newTemplate }));
      return;
    }

    setFiles((prev) =>
      prev.map((item) => {
        if (item.id === selectedFile.id) {
          const updatedSettings = {
            ...item.settings,
            nameTemplate: newTemplate,
          };
          const updatedName = resolveFileName(
            item.originalName,
            newTemplate,
            item.convertedWidth,
            item.convertedHeight,
            item.settings.quality,
            item.settings.isLossless,
          );
          return { ...item, settings: updatedSettings, webpName: updatedName };
        }
        return item;
      }),
    );
  };

  const handleQualityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!selectedFile) {
      setGlobalDefaults((prev) => ({
        ...prev,
        preset: "custom",
        quality: val,
      }));
      return;
    }

    setFiles((prev) =>
      prev.map((item) =>
        item.id === selectedFile.id
          ? {
              ...item,
              settings: { ...item.settings, preset: "custom", quality: val },
              webpName: resolveFileName(
                item.originalName,
                item.settings.nameTemplate,
                item.convertedWidth,
                item.convertedHeight,
                val,
                item.settings.isLossless,
              ),
            }
          : item,
      ),
    );
  };

  const handleQualityCommit = () => {
    if (!selectedFile) return;
    reprocessSpecificFile(selectedFile.id, {
      ...selectedFile.settings,
      preset: "custom",
    });
  };

  const updateSettingImmediate = <K extends keyof ImageSettings>(
    key: K,
    value: ImageSettings[K],
  ) => {
    if (!selectedFile) {
      setGlobalDefaults((prev) => ({ ...prev, [key]: value }));
      return;
    }

    const updatedSettings = { ...selectedFile.settings, [key]: value };
    reprocessSpecificFile(selectedFile.id, updatedSettings);
  };

  const applyPresetToFile = (p: Preset) => {
    if (!selectedFile) {
      setGlobalDefaults((prev) => ({ ...prev, preset: p }));
      return;
    }

    let nextSettings = { ...selectedFile.settings, preset: p };
    if (p === "balanced") {
      nextSettings = {
        ...nextSettings,
        quality: 0.8,
        isLossless: false,
        maxWidth: 1920,
        scaleFactor: 1,
      };
    } else if (p === "ultra") {
      nextSettings = {
        ...nextSettings,
        quality: 0.5,
        isLossless: false,
        maxWidth: 1280,
        scaleFactor: 1,
      };
    } else if (p === "lossless") {
      nextSettings = {
        ...nextSettings,
        quality: 1.0,
        isLossless: true,
        maxWidth: 0,
        scaleFactor: 1,
      };
    }
    reprocessSpecificFile(selectedFile.id, nextSettings);
  };

  const applyDimensionPreset = (w: number, h: number) => {
    if (!selectedFile) return;
    const updated = {
      ...selectedFile.settings,
      maxWidth: w,
      maxHeight: h,
      scaleFactor: 1,
      preset: "custom" as Preset,
    };
    reprocessSpecificFile(selectedFile.id, updated);
  };

  const applyCurrentSettingsToTargets = async (targetIds: string[]) => {
    if (!selectedFile || targetIds.length === 0) return;
    setIsProcessing(true);
    setProcessingStatus(
      `Syncing settings across ${targetIds.length} assets...`,
    );

    const sharedSettings = { ...selectedFile.settings };
    const updatedFiles = await Promise.all(
      files.map(async (item) => {
        if (!targetIds.includes(item.id) || item.id === selectedFile.id)
          return item;
        try {
          const res = await encodeToWebP(
            item.rawFile,
            item.originalUrl,
            sharedSettings,
          );
          URL.revokeObjectURL(item.convertedUrl);
          return {
            ...item,
            settings: sharedSettings,
            convertedSize: res.convertedSize,
            convertedWidth: res.convertedWidth,
            convertedHeight: res.convertedHeight,
            convertedUrl: res.convertedUrl,
            webpName: res.webpName,
          };
        } catch {
          return item;
        }
      }),
    );

    setFiles(updatedFiles);
    setIsProcessing(false);
    setProcessingStatus("");
  };

  const handleFiles = useCallback(
    async (uploadedFiles: FileList | File[]) => {
      setIsProcessing(true);
      setProcessingProgress(0);

      const validTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/bmp",
        "image/webp",
        "image/avif",
        "image/tiff",
      ];

      const fileArray = Array.from(uploadedFiles).filter((f) =>
        validTypes.includes(f.type),
      );

      if (fileArray.length === 0) {
        setIsProcessing(false);
        return;
      }

      setProcessingStatus(
        `Encoding ${fileArray.length} assets concurrently...`,
      );

      let completedCount = 0;
      const initialSettings = selectedFile
        ? { ...selectedFile.settings }
        : { ...globalDefaults };

      const processedResults = await Promise.all(
        fileArray.map(async (file) => {
          try {
            const originalUrl = URL.createObjectURL(file);
            const result = await encodeToWebP(
              file,
              originalUrl,
              initialSettings,
            );

            completedCount++;
            setProcessingProgress(
              Math.round((completedCount / fileArray.length) * 100),
            );
            setProcessingStatus(
              `Completed ${completedCount} of ${fileArray.length}`,
            );

            const newFileItem: ConvertedFile = {
              id: Math.random().toString(36).substring(2, 9),
              rawFile: file,
              originalName: file.name,
              originalSize: file.size,
              originalWidth: result.originalWidth,
              originalHeight: result.originalHeight,
              originalUrl,
              convertedSize: result.convertedSize,
              convertedWidth: result.convertedWidth,
              convertedHeight: result.convertedHeight,
              convertedUrl: result.convertedUrl,
              webpName: result.webpName,
              format: file.type.replace("image/", "").toUpperCase(),
              settings: { ...initialSettings },
            };

            return newFileItem;
          } catch (err) {
            console.error("Processing error:", err);
            return null;
          }
        }),
      );

      const validProcessed = processedResults.filter(
        (f): f is ConvertedFile => f !== null,
      );

      setFiles((prev) => {
        const updated = [...prev, ...validProcessed];
        if (updated.length > 0 && !selectedFileId) {
          setSelectedFileId(updated[0].id);
        }
        return updated;
      });

      setIsProcessing(false);
      setProcessingStatus("");
      setProcessingProgress(0);
    },
    [globalDefaults, selectedFile, selectedFileId],
  );

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData?.files && e.clipboardData.files.length > 0) {
        handleFiles(e.clipboardData.files);
      }
    };
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [handleFiles]);

  const downloadAllAsZip = async () => {
    const zip = new JSZip();
    const downloadQueue =
      selectedIds.size > 0 ? files.filter((f) => selectedIds.has(f.id)) : files;

    for (const item of downloadQueue) {
      const response = await fetch(item.convertedUrl);
      const blob = await response.blob();
      zip.file(item.webpName, blob);
    }
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = zipUrl;
    link.download = `webp_batch_${downloadQueue.length}_assets.zip`;
    link.click();
    URL.revokeObjectURL(zipUrl);

    // Trigger custom Google Analytics event for batch download
    trackEvent("download_zip", {
      file_count: downloadQueue.length,
      total_savings_bytes: totalSavedBytes,
    });
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const clearFiles = () => {
    files.forEach((f) => {
      URL.revokeObjectURL(f.originalUrl);
      URL.revokeObjectURL(f.convertedUrl);
    });
    setFiles([]);
    setSelectedIds(new Set());
    setSelectedFileId(null);
  };

  const removeFile = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id);
      if (target) {
        URL.revokeObjectURL(target.originalUrl);
        URL.revokeObjectURL(target.convertedUrl);
      }
      return prev.filter((f) => f.id !== id);
    });
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    if (selectedFileId === id) setSelectedFileId(null);
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === files.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(files.map((f) => f.id)));
    }
  };

  const toggleSelectOne = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const deleteSelected = () => {
    files.forEach((f) => {
      if (selectedIds.has(f.id)) {
        URL.revokeObjectURL(f.originalUrl);
        URL.revokeObjectURL(f.convertedUrl);
      }
    });
    setFiles((prev) => prev.filter((f) => !selectedIds.has(f.id)));
    if (selectedFileId && selectedIds.has(selectedFileId))
      setSelectedFileId(null);
    setSelectedIds(new Set());
  };

  const copyToClipboard = (text: string, type: "picture" | "css" | "img") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const totalOriginalSize = files.reduce((acc, f) => acc + f.originalSize, 0);
  const totalConvertedSize = files.reduce((acc, f) => acc + f.convertedSize, 0);
  const totalSavedBytes = Math.max(0, totalOriginalSize - totalConvertedSize);
  const totalSavingsPct =
    totalOriginalSize > 0
      ? ((totalOriginalSize - totalConvertedSize) / totalOriginalSize) * 100
      : 0;

  const activeSettings = selectedFile ? selectedFile.settings : globalDefaults;

  return (
    <div
      className="min-h-screen lg:h-screen w-full bg-slate-100/80 text-slate-800 font-sans flex flex-col lg:overflow-hidden antialiased select-none"
      onDragEnter={(e) => {
        e.preventDefault();
        dragCounter.current++;
        setIsDragging(true);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={(e) => {
        e.preventDefault();
        dragCounter.current--;
        if (dragCounter.current === 0) setIsDragging(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        dragCounter.current = 0;
        setIsDragging(false);
        if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
      }}
    >
      {/* Fullscreen Drop Overlay */}
      {isDragging && (
        <div className="fixed inset-0 z-50 bg-indigo-600/95 backdrop-blur-md border-4 border-dashed border-white flex flex-col items-center justify-center gap-3 pointer-events-none">
          <div className="w-20 h-20 rounded-3xl bg-white text-indigo-600 flex items-center justify-center shadow-2xl animate-bounce">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-white tracking-wide">
            Drop image files into workbench
          </p>
        </div>
      )}

      {/* Processing HUD */}
      {isProcessing && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl max-w-md w-full space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 animate-spin text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {/* Subtle Track */}
                  <circle
                    className="opacity-20"
                    cx="12"
                    cy="12"
                    r="9"
                    strokeWidth="2.5"
                  />
                  {/* Spinning Arc */}
                  <path
                    d="M12 3a9 9 0 0 1 9 9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="overflow-hidden flex-1">
                <h4 className="text-sm font-bold text-slate-900">
                  Processing using WebP Engine
                </h4>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {processingStatus}
                </p>
              </div>
            </div>

            {processingProgress > 0 && (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono font-medium text-slate-600">
                  <span>Batch Progress</span>
                  <span>{processingProgress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-200"
                    style={{ width: `${processingProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Top Application Header */}
      {/* Top Application Header */}
      <header className="min-h-14 border-b border-slate-200 bg-white/90 backdrop-blur-xl px-3.5 sm:px-5 lg:px-6 py-2.5 lg:py-0 flex flex-wrap items-center justify-between shrink-0 z-30 shadow-xs gap-y-2.5 gap-x-6">
        {/* Left: Logo & Title with 2-line mobile subheader */}
        <div className="flex items-center gap-3 shrink-0 min-w-0">
          <Link
            href="/"
            className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 flex items-center justify-center"
          >
            <NextImage
              src="/logo.svg"
              alt="WebP Studio Logo"
              width={32}
              height={32}
              priority
              className="w-full h-full object-contain"
            />
          </Link>
          <div className="min-w-0">
            <h1 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight truncate">
              WebP Studio
            </h1>
            {/* Mobile: 2-line stacked micro font | Desktop: 1-line clean font */}
            <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-0.5 leading-[1.15] sm:leading-tight">
              <span className="block sm:inline">
                In-Browser WebP Conversion
              </span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline text-slate-400 sm:text-slate-500">
                100% Private • Zero Uploads
              </span>
            </div>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto lg:order-3">
          {files.length > 0 && (
            <>
              <button
                onClick={clearFiles}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-2 sm:px-3 py-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
              >
                Clear
              </button>
              <button
                onClick={downloadAllAsZip}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow-xs active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>
                  Zip{" "}
                  {selectedIds.size > 0
                    ? `(${selectedIds.size})`
                    : `(${files.length})`}
                </span>
              </button>
            </>
          )}
        </div>

        {/* Center / Bottom on Mobile: Global Batch Size Summary with extra breathing room */}
        {files.length > 0 && (
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3.5 bg-slate-100/90 border border-slate-200/90 px-3 py-1.5 rounded-xl shrink-0 order-3 lg:order-2 lg:mx-auto">
            <div className="flex items-center gap-2 sm:gap-2.5 text-xs">
              <div className="flex flex-col">
                <span className="text-[8px] uppercase font-mono font-bold text-slate-500 leading-none">
                  Original
                </span>
                <span className="font-mono text-slate-700 text-[11px] sm:text-xs font-semibold mt-0.5">
                  {formatSize(totalOriginalSize)}
                </span>
              </div>
              <span className="text-slate-400 font-bold text-xs">→</span>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase font-mono font-bold text-indigo-600 leading-none">
                  WebP
                </span>
                <span className="font-mono text-indigo-700 text-[11px] sm:text-xs font-bold mt-0.5">
                  {formatSize(totalConvertedSize)}
                </span>
              </div>
              <div className="hidden md:block h-6 w-px bg-slate-300 mx-1" />
              <div className="hidden md:flex flex-col">
                <span className="text-[8px] uppercase font-mono font-bold text-slate-500 leading-none">
                  Saved
                </span>
                <span className="font-mono text-emerald-700 text-xs font-semibold mt-0.5">
                  {formatSize(totalSavedBytes)}
                </span>
              </div>
            </div>

            <span
              className={`text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-md border ml-1 ${
                totalSavingsPct >= 0
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-rose-50 text-rose-700 border-rose-200"
              }`}
            >
              {totalSavingsPct >= 0
                ? `-${totalSavingsPct.toFixed(1)}%`
                : `+${Math.abs(totalSavingsPct).toFixed(1)}%`}
            </span>
          </div>
        )}
      </header>

      {/* Main Grid Layout */}
      <main className="flex-1 p-3 sm:p-4 w-full mx-auto flex flex-col lg:flex-row gap-4 lg:overflow-hidden lg:min-h-0">
        {/* COLUMN 1: QUEUE & DROPZONE */}
        <section
          className={`w-full flex flex-col transition-all duration-300 ease-in-out ${
            isLeftCollapsed
              ? "lg:w-14 lg:shrink-0"
              : "lg:w-80 lg:shrink-0 lg:h-full lg:min-h-0"
          }`}
        >
          {isLeftCollapsed ? (
            <div className="hidden lg:flex bg-white border border-slate-200 rounded-2xl p-2 shadow-xs flex-col items-center justify-between h-full py-4">
              <button
                onClick={() => setIsLeftCollapsed(false)}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 flex items-center justify-center transition shadow-2xs cursor-pointer"
                title="Expand Queue"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="flex flex-col items-center gap-2">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Asset Queue
                </span>
                <span className="text-[10px] font-mono font-bold bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full">
                  {files.length}
                </span>
              </div>

              <label
                className="w-9 h-9 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition shadow-2xs cursor-pointer"
                title="Add Image Files"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <input
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/jpg, image/bmp, image/webp, image/avif, image/tiff"
                  className="hidden"
                  onChange={(e) =>
                    e.target.files && handleFiles(e.target.files)
                  }
                />
              </label>
            </div>
          ) : null}

          <div
            className={`bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col h-[280px] lg:h-full lg:min-h-0 ${
              isLeftCollapsed ? "lg:hidden flex" : "flex"
            }`}
          >
            <div className="flex items-center justify-between pb-2 shrink-0 border-b border-slate-100">
              <div className="flex items-center gap-2">
                {files.length > 0 && (
                  <input
                    type="checkbox"
                    checked={
                      selectedIds.size === files.length && files.length > 0
                    }
                    onChange={toggleSelectAll}
                    className="w-3.5 h-3.5 accent-indigo-600 rounded cursor-pointer"
                    title="Select all"
                  />
                )}
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Queue ({files.length})
                </h2>
              </div>

              <div className="flex items-center gap-1.5">
                {selectedIds.size > 0 && (
                  <button
                    onClick={deleteSelected}
                    className="text-[10px] font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2 py-0.5 rounded cursor-pointer"
                  >
                    Delete ({selectedIds.size})
                  </button>
                )}
                <label className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                  + Add
                  <input
                    type="file"
                    multiple
                    accept="image/png, image/jpeg, image/jpg, image/bmp, image/webp, image/avif, image/tiff"
                    className="hidden"
                    onChange={(e) =>
                      e.target.files && handleFiles(e.target.files)
                    }
                  />
                </label>
                <button
                  onClick={() => setIsLeftCollapsed(true)}
                  className="hidden lg:block text-slate-400 hover:text-slate-700 p-1 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                  title="Collapse Panel"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {files.length === 0 ? (
              <label className="flex-1 border-2 border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50/70 hover:bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition h-full group mt-3">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-800">
                  Add or Drop Files
                </span>
                <span className="text-[10px] text-slate-500 mt-1 max-w-[180px]">
                  PNG, JPG, BMP, AVIF, TIFF
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/jpg, image/bmp, image/webp, image/avif, image/tiff"
                  className="hidden"
                  onChange={(e) =>
                    e.target.files && handleFiles(e.target.files)
                  }
                />
              </label>
            ) : (
              <div
                className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-0 [scrollbar-gutter:stable] [transform:translateZ(0)] mt-2.5"
                style={{ overscrollBehavior: "contain" }}
              >
                {files.map((file) => {
                  const isSelected = selectedFile?.id === file.id;
                  const isChecked = selectedIds.has(file.id);
                  const savedPct =
                    ((file.originalSize - file.convertedSize) /
                      file.originalSize) *
                    100;

                  return (
                    <div
                      key={file.id}
                      onClick={() => setSelectedFileId(file.id)}
                      className={`p-2 rounded-xl border transition-colors cursor-pointer flex items-center gap-2.5 relative group ${
                        isSelected
                          ? "bg-indigo-50/80 border-indigo-500 shadow-xs ring-1 ring-indigo-500/20"
                          : "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onClick={(e) => toggleSelectOne(file.id, e)}
                        onChange={() => {}}
                        className="w-3.5 h-3.5 accent-indigo-600 rounded cursor-pointer shrink-0"
                      />

                      <img
                        src={file.convertedUrl}
                        alt={file.webpName}
                        className="w-10 h-10 rounded-lg object-cover bg-white border border-slate-200 shrink-0 pointer-events-none"
                      />

                      <div className="overflow-hidden flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <p className="text-xs font-bold text-slate-900 truncate">
                            {file.webpName}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-mono">
                          <span className="text-slate-500">
                            {formatSize(file.originalSize)}
                          </span>
                          <span className="text-slate-400">→</span>
                          <span className="font-bold text-indigo-700">
                            {formatSize(file.convertedSize)}
                          </span>
                          <span
                            className={`ml-auto text-[9px] font-mono font-bold px-1.5 py-0.2 rounded ${
                              savedPct >= 0
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {savedPct >= 0
                              ? `-${Math.round(savedPct)}%`
                              : `+${Math.round(Math.abs(savedPct))}%`}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => removeFile(file.id, e)}
                        className="text-slate-400 hover:text-rose-600 p-1 opacity-0 group-hover:opacity-100 transition shrink-0 cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* COLUMN 2: INTERACTIVE STAGE & PREVIEW */}
        <section className="flex-1 lg:h-full lg:min-h-0 flex flex-col min-w-0 transition-all duration-300">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col min-h-[440px] h-[520px] lg:h-full lg:min-h-0 gap-3">
            {selectedFile ? (
              <>
                <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-2.5 shrink-0 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-bold text-slate-900 truncate max-w-[180px] sm:max-w-[240px]">
                      {selectedFile.webpName}
                    </span>
                    <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                      {selectedFile.convertedWidth}×
                      {selectedFile.convertedHeight}px
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-1 bg-slate-100 px-1.5 py-0.5 rounded-lg border border-slate-200 text-xs font-mono">
                      <span className="text-slate-400 text-[10px]">Zoom:</span>
                      {[1, 2, 3].map((z) => (
                        <button
                          key={z}
                          onClick={() => setZoomLevel(z)}
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer transition ${
                            zoomLevel === z
                              ? "bg-white text-indigo-600 shadow-2xs"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          {z}x
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                      <button
                        onClick={() => setViewMode("slider")}
                        className={`px-3 py-1 text-xs rounded-lg font-semibold transition cursor-pointer ${
                          viewMode === "slider"
                            ? "bg-white text-indigo-600 shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Split Slider
                      </button>
                      <button
                        onClick={() => setViewMode("side-by-side")}
                        className={`px-3 py-1 text-xs rounded-lg font-semibold transition cursor-pointer ${
                          viewMode === "side-by-side"
                            ? "bg-white text-indigo-600 shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Side-by-Side
                      </button>
                      <button
                        onClick={() => setViewMode("code")}
                        className={`px-3 py-1 text-xs rounded-lg font-semibold transition cursor-pointer ${
                          viewMode === "code"
                            ? "bg-white text-indigo-600 shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Code
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center p-3 relative min-h-[260px] lg:min-h-0 [transform:translateZ(0)]">
                  {viewMode === "slider" && (
                    <div
                      className="relative w-full h-full flex items-center justify-center select-none overflow-hidden [transform:translateZ(0)] transition-transform duration-150"
                      style={{ transform: `scale(${zoomLevel})` }}
                    >
                      {/* Left Badge: Original */}
                      <div className="absolute top-3 left-3 z-30 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-white/20 shadow-md ring-1 ring-black/40">
                        <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                        <span className="text-[10px] font-mono font-bold text-white tracking-wide">
                          ORIGINAL{" "}
                          <span className="text-slate-300 font-normal">
                            ({formatSize(selectedFile.originalSize)})
                          </span>
                        </span>
                      </div>

                      {/* Right Badge: WebP */}
                      <div className="absolute top-3 right-3 z-30 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-white/20 shadow-md ring-1 ring-black/40">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0 shadow-[0_0_8px_rgba(129,140,248,0.9)]" />
                        <span className="text-[10px] font-mono font-bold text-white tracking-wide">
                          WEBP{" "}
                          <span className="text-slate-300 font-normal">
                            ({formatSize(selectedFile.convertedSize)})
                          </span>
                        </span>
                      </div>

                      <img
                        src={selectedFile.originalUrl}
                        alt="Original"
                        className="absolute inset-0 w-full h-full object-contain p-2 pointer-events-none"
                      />

                      <img
                        src={selectedFile.convertedUrl}
                        alt="Converted WebP"
                        className="absolute inset-0 w-full h-full object-contain p-2 pointer-events-none [transform:translateZ(0)] will-change-[clip-path]"
                        style={{
                          clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
                        }}
                      />

                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPos}
                        onChange={(e) => setSliderPos(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                      />

                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-indigo-600 z-20 pointer-events-none [transform:translateZ(0)]"
                        style={{ left: `${sliderPos}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-md text-xs font-bold border border-white">
                          ↔
                        </div>
                      </div>
                    </div>
                  )}

                  {viewMode === "side-by-side" && (
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full h-full transition-transform duration-150"
                      style={{ transform: `scale(${zoomLevel})` }}
                    >
                      <div className="relative flex flex-col items-center justify-center bg-white rounded-xl p-2 border border-slate-200 h-full overflow-hidden">
                        <span className="absolute top-2 left-2 bg-slate-800 text-white text-[9px] font-mono px-2 py-0.5 rounded z-10">
                          {selectedFile.format}:{" "}
                          {formatSize(selectedFile.originalSize)}
                        </span>
                        <img
                          src={selectedFile.originalUrl}
                          alt="Original"
                          className="h-full w-full object-contain pointer-events-none"
                        />
                      </div>

                      <div className="relative flex flex-col items-center justify-center bg-white rounded-xl p-2 border border-slate-200 h-full overflow-hidden">
                        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[9px] font-mono px-2 py-0.5 rounded z-10">
                          WEBP: {formatSize(selectedFile.convertedSize)}
                        </span>
                        <img
                          src={selectedFile.convertedUrl}
                          alt="Converted WebP"
                          className="h-full w-full object-contain pointer-events-none"
                        />
                      </div>
                    </div>
                  )}

                  {viewMode === "code" && (
                    <div className="w-full h-full bg-slate-900 text-slate-200 rounded-xl p-4 overflow-y-auto font-mono text-xs space-y-4 [scrollbar-gutter:stable]">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-400 font-bold uppercase text-[10px]">
                            HTML5 Picture Element
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                `<picture>\n  <source srcset="${selectedFile.webpName}" type="image/webp">\n  <img src="${selectedFile.originalName}" width="${selectedFile.convertedWidth}" height="${selectedFile.convertedHeight}" alt="Optimized asset">\n</picture>`,
                                "picture",
                              )
                            }
                            className="text-indigo-400 hover:text-indigo-300 text-[10px] font-bold cursor-pointer"
                          >
                            {copiedType === "picture"
                              ? "Copied!"
                              : "Copy Snippet"}
                          </button>
                        </div>
                        <pre className="bg-slate-950 p-3 rounded-lg border border-slate-800 overflow-x-auto text-emerald-400">
                          {`<picture>
  <source srcset="${selectedFile.webpName}" type="image/webp">
  <img src="${selectedFile.originalName}" width="${selectedFile.convertedWidth}" height="${selectedFile.convertedHeight}" alt="Optimized asset">
</picture>`}
                        </pre>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-400 font-bold uppercase text-[10px]">
                            CSS Background
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                `background-image: url('${selectedFile.webpName}');`,
                                "css",
                              )
                            }
                            className="text-indigo-400 hover:text-indigo-300 text-[10px] font-bold cursor-pointer"
                          >
                            {copiedType === "css" ? "Copied!" : "Copy Snippet"}
                          </button>
                        </div>
                        <pre className="bg-slate-950 p-3 rounded-lg border border-slate-800 overflow-x-auto text-sky-400">
                          {`background-image: url('${selectedFile.webpName}');`}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 shrink-0">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
                    <span className="text-slate-500">
                      Original:{" "}
                      <strong className="text-slate-800">
                        {formatSize(selectedFile.originalSize)}
                      </strong>
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">
                      WebP:{" "}
                      <strong className="text-indigo-600">
                        {formatSize(selectedFile.convertedSize)}
                      </strong>
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">
                      Saved:{" "}
                      <strong
                        className={
                          selectedFile.originalSize >=
                          selectedFile.convertedSize
                            ? "text-emerald-700"
                            : "text-rose-600"
                        }
                      >
                        {formatSize(
                          Math.abs(
                            selectedFile.originalSize -
                              selectedFile.convertedSize,
                          ),
                        )}{" "}
                        (
                        {(
                          ((selectedFile.originalSize -
                            selectedFile.convertedSize) /
                            selectedFile.originalSize) *
                          100
                        ).toFixed(1)}
                        %)
                      </strong>
                    </span>
                  </div>

                  <a
                    href={selectedFile.convertedUrl}
                    download={selectedFile.webpName}
                    className="px-4 py-1.5 flex gap-1 items-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow-xs active:scale-95 cursor-pointer"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download WebP
                  </a>
                </div>
              </>
            ) : (
              /* Clickable Empty State for File Uploads */
              <label className="flex-1 border-2 border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50/70 hover:bg-slate-50 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition h-full group select-none">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-3 shadow-2xs group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-800">
                  Click to Select or Drop Images
                </span>
                <span className="text-xs text-slate-500 mt-1 max-w-[260px]">
                  Supports PNG, JPG, BMP, AVIF, and TIFF with zero server
                  uploads
                </span>
                <span className="mt-4 px-3.5 py-1.5 bg-white border border-slate-200 group-hover:border-indigo-200 group-hover:bg-indigo-50/50 text-indigo-600 rounded-lg text-xs font-semibold shadow-2xs transition">
                  Browse Files
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/jpg, image/bmp, image/webp, image/avif, image/tiff"
                  className="hidden"
                  onChange={(e) =>
                    e.target.files && handleFiles(e.target.files)
                  }
                />
              </label>
            )}
          </div>
        </section>

        {/* COLUMN 3: CATEGORIZED TUNING DECK */}
        <section
          className={`w-full flex flex-col transition-all duration-300 ease-in-out ${
            isRightCollapsed
              ? "lg:w-14 lg:shrink-0"
              : "lg:w-80 lg:shrink-0 lg:h-full lg:min-h-0"
          }`}
        >
          {isRightCollapsed ? (
            <div className="hidden lg:flex bg-white border border-slate-200 rounded-2xl p-2 shadow-xs flex-col items-center justify-between h-full py-4">
              <button
                onClick={() => setIsRightCollapsed(false)}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 flex items-center justify-center transition shadow-2xs cursor-pointer"
                title="Expand Tuning Deck"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex flex-col items-center gap-2">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Tuning Deck
                </span>
                <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded-full border border-slate-200">
                  {activeSettings.isLossless
                    ? "100%"
                    : `${Math.round(activeSettings.quality * 100)}%`}
                </span>
              </div>

              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>
          ) : null}

          <div
            className={`bg-white border border-slate-200 rounded-2xl p-4 shadow-xs lg:h-full lg:min-h-0 lg:overflow-y-auto space-y-4 text-xs [scrollbar-gutter:stable] [transform:translateZ(0)] ${
              isRightCollapsed ? "lg:hidden flex flex-col" : "flex flex-col"
            }`}
            style={{ overscrollBehavior: "contain" }}
          >
            {/* Header info & Tabs */}
            <div className="border-b border-slate-100 pb-3">
              <div className="flex items-center justify-between mb-2.5">
                <div className="overflow-hidden min-w-0 pr-2">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 truncate">
                    {selectedFile ? "Asset Tuning" : "Defaults"}
                  </h3>
                  <p className="text-[10px] text-slate-500 truncate">
                    {selectedFile
                      ? selectedFile.originalName
                      : "Incoming uploads"}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {selectedFile && files.length > 1 && (
                    <button
                      onClick={() =>
                        applyCurrentSettingsToTargets(
                          selectedIds.size > 0
                            ? Array.from(selectedIds)
                            : files.map((f) => f.id),
                        )
                      }
                      className="text-[10px] font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-100 hover:border-indigo-200 px-2 py-0.5 rounded-md transition cursor-pointer"
                      title="Apply settings to all files"
                    >
                      {selectedIds.size > 0
                        ? `Apply to (${selectedIds.size})`
                        : "Apply All"}
                    </button>
                  )}
                  <button
                    onClick={() => setIsRightCollapsed(true)}
                    className="hidden lg:block text-slate-400 hover:text-slate-700 p-1 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                    title="Collapse Panel"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categorized Tab Bar */}
              <div className="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-xl">
                {[
                  { id: "compression", label: "Quality" },
                  { id: "transform", label: "Resize" },
                  { id: "filters", label: "Filters" },
                  { id: "export", label: "Export" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TuningTab)}
                    className={`py-1 text-[10px] font-bold rounded-lg transition cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-white text-indigo-600 shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB 1: COMPRESSION & QUALITY */}
            {activeTab === "compression" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Preset Bitrate
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: "balanced", name: "Balanced (80%)" },
                      { id: "ultra", name: "Ultra (50%)" },
                      { id: "lossless", name: "Lossless (1:1)" },
                      { id: "custom", name: "Custom Slider" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => applyPresetToFile(item.id as Preset)}
                        className={`py-1.5 text-[11px] font-bold rounded-lg border transition cursor-pointer ${
                          activeSettings.preset === item.id
                            ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {!activeSettings.isLossless && (
                  <div className="space-y-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600 font-medium">
                        Quality Percentage
                      </span>
                      <span className="font-mono text-indigo-600 font-bold">
                        {Math.round(activeSettings.quality * 100)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="1.0"
                      step="0.01"
                      value={activeSettings.quality}
                      onChange={handleQualityChange}
                      onPointerUp={handleQualityCommit}
                      onKeyUp={handleQualityCommit}
                      className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none touch-none"
                    />
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: DIMENSIONS & TRANSFORMS */}
            {activeTab === "transform" && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Quick Size Presets
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { label: "Original Size", w: 0, h: 0 },
                      { label: "1080p FHD", w: 1920, h: 1080 },
                      { label: "Social OG (1200×630)", w: 1200, h: 630 },
                      { label: "Square (1080×1080)", w: 1080, h: 1080 },
                      { label: "Thumbnail (400×400)", w: 400, h: 400 },
                    ].map((p) => (
                      <button
                        key={p.label}
                        onClick={() => applyDimensionPreset(p.w, p.h)}
                        className="py-1 px-2 text-[10px] font-bold bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 rounded-lg transition cursor-pointer"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 block mb-1">
                      Max Width (px)
                    </label>
                    <input
                      type="number"
                      value={activeSettings.maxWidth}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (selectedFile) {
                          setFiles((prev) =>
                            prev.map((f) =>
                              f.id === selectedFile.id
                                ? {
                                    ...f,
                                    settings: {
                                      ...f.settings,
                                      preset: "custom",
                                      maxWidth: val,
                                    },
                                  }
                                : f,
                            ),
                          );
                        } else {
                          setGlobalDefaults((prev) => ({
                            ...prev,
                            preset: "custom",
                            maxWidth: val,
                          }));
                        }
                      }}
                      onBlur={() =>
                        selectedFile &&
                        updateSettingImmediate(
                          "maxWidth",
                          activeSettings.maxWidth,
                        )
                      }
                      placeholder="1920"
                      className="w-full px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-800 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-600 block mb-1">
                      Max Height (px)
                    </label>
                    <input
                      type="number"
                      value={activeSettings.maxHeight}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (selectedFile) {
                          setFiles((prev) =>
                            prev.map((f) =>
                              f.id === selectedFile.id
                                ? {
                                    ...f,
                                    settings: {
                                      ...f.settings,
                                      preset: "custom",
                                      maxHeight: val,
                                    },
                                  }
                                : f,
                            ),
                          );
                        } else {
                          setGlobalDefaults((prev) => ({
                            ...prev,
                            preset: "custom",
                            maxHeight: val,
                          }));
                        }
                      }}
                      onBlur={() =>
                        selectedFile &&
                        updateSettingImmediate(
                          "maxHeight",
                          activeSettings.maxHeight,
                        )
                      }
                      placeholder="0"
                      className="w-full px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-800 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Orientation & Flip
                  </h4>
                  <div className="grid grid-cols-4 gap-1">
                    <button
                      onClick={() =>
                        updateSettingImmediate(
                          "rotation",
                          (activeSettings.rotation + 90) % 360,
                        )
                      }
                      className="py-1.5 text-[10px] font-bold bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition cursor-pointer flex items-center justify-center gap-1"
                      title="Rotate 90 degrees"
                    >
                      ↻ 90°
                    </button>
                    <button
                      onClick={() =>
                        updateSettingImmediate(
                          "rotation",
                          (activeSettings.rotation + 180) % 360,
                        )
                      }
                      className="py-1.5 text-[10px] font-bold bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition cursor-pointer flex items-center justify-center gap-1"
                      title="Rotate 180 degrees"
                    >
                      ↻ 180°
                    </button>
                    <button
                      onClick={() =>
                        updateSettingImmediate("flipH", !activeSettings.flipH)
                      }
                      className={`py-1.5 text-[10px] font-bold rounded-lg border transition cursor-pointer ${
                        activeSettings.flipH
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-slate-50 border-slate-200"
                      }`}
                      title="Flip Horizontally"
                    >
                      Flip ⇄
                    </button>
                    <button
                      onClick={() =>
                        updateSettingImmediate("flipV", !activeSettings.flipV)
                      }
                      className={`py-1.5 text-[10px] font-bold rounded-lg border transition cursor-pointer ${
                        activeSettings.flipV
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-slate-50 border-slate-200"
                      }`}
                      title="Flip Vertically"
                    >
                      Flip ⇅
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: COLOR & FILTERS */}
            {activeTab === "filters" && (
              <div className="space-y-3.5">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600 font-medium">
                      Brightness
                    </span>
                    <span className="font-mono text-slate-800 font-bold">
                      {activeSettings.brightness}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="180"
                    value={activeSettings.brightness}
                    onChange={(e) =>
                      updateSettingImmediate(
                        "brightness",
                        Number(e.target.value),
                      )
                    }
                    className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-600 font-medium">Contrast</span>
                    <span className="font-mono text-slate-800 font-bold">
                      {activeSettings.contrast}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="180"
                    value={activeSettings.contrast}
                    onChange={(e) =>
                      updateSettingImmediate("contrast", Number(e.target.value))
                    }
                    className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                  />
                </div>

                <button
                  onClick={() =>
                    updateSettingImmediate(
                      "grayscale",
                      !activeSettings.grayscale,
                    )
                  }
                  className={`w-full py-1.5 rounded-lg border font-bold text-xs transition cursor-pointer ${
                    activeSettings.grayscale
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  {activeSettings.grayscale
                    ? "✓ Grayscale Enabled (B&W)"
                    : "Convert to Grayscale (B&W)"}
                </button>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Background Transparency
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() =>
                        updateSettingImmediate("alphaMode", "transparent")
                      }
                      className={`py-1.5 rounded-lg border font-bold transition cursor-pointer ${
                        activeSettings.alphaMode === "transparent"
                          ? "bg-indigo-50 border-indigo-500 text-indigo-900"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      Keep Alpha
                    </button>
                    <button
                      onClick={() =>
                        updateSettingImmediate("alphaMode", "fill")
                      }
                      className={`py-1.5 rounded-lg border font-bold transition cursor-pointer ${
                        activeSettings.alphaMode === "fill"
                          ? "bg-indigo-50 border-indigo-500 text-indigo-900"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      Solid Fill
                    </button>
                  </div>

                  {activeSettings.alphaMode === "fill" && (
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="color"
                        value={activeSettings.bgColor}
                        onChange={(e) =>
                          updateSettingImmediate("bgColor", e.target.value)
                        }
                        className="w-7 h-7 rounded-lg border border-slate-200 cursor-pointer bg-white p-0.5"
                      />
                      <input
                        type="text"
                        value={activeSettings.bgColor}
                        onChange={(e) =>
                          updateSettingImmediate("bgColor", e.target.value)
                        }
                        className="flex-1 px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-800"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 4: EXPORT & NAMING */}
            {activeTab === "export" && (
              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Filename Pattern
                  </h4>
                  <input
                    type="text"
                    value={activeSettings.nameTemplate}
                    onChange={(e) => handleNameTemplateChange(e.target.value)}
                    placeholder="{name}.webp"
                    className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-800 focus:outline-none focus:border-indigo-500"
                  />
                  <p className="text-[10px] text-slate-500 leading-tight">
                    Variables:{" "}
                    <code className="text-indigo-600 font-mono">{`{name}`}</code>
                    ,{" "}
                    <code className="text-indigo-600 font-mono">{`{width}`}</code>
                    ,{" "}
                    <code className="text-indigo-600 font-mono">{`{height}`}</code>
                    ,{" "}
                    <code className="text-indigo-600 font-mono">{`{quality}`}</code>
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-[11px]">
                  <span className="font-bold text-slate-700 block">
                    Current Export Name:
                  </span>
                  <span className="font-mono text-indigo-700 break-all">
                    {selectedFile ? selectedFile.webpName : "No file active"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
