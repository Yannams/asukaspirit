"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Laptop, Watch, ShieldAlert, Sparkles, Image as ImageIcon } from "lucide-react";

interface FigmaImageProps {
  nodeId: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackType?: "laptop" | "watch" | "scene" | "logo" | "default";
}

export default function FigmaImage({
  nodeId,
  alt,
  className = "",
  width,
  height,
  fallbackType = "default"
}: FigmaImageProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Tenter de charger le registre d'images
    fetch("/images_registry.json")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((registry) => {
        if (registry[nodeId] && registry[nodeId].fileName) {
          setSrc(registry[nodeId].fileName);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, [nodeId]);

  if (error || !src) {
    // Rendu d'un placeholder premium et animé en cas d'absence de l'image
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-tr from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col items-center justify-center p-6 text-center ${className}`}
        style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%", minHeight: "200px" }}
      >
        {/* Effet de lueur animée */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        
        {fallbackType === "laptop" && (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Laptop size={24} />
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">Asuka Spirit Laptop</span>
          </div>
        )}

        {fallbackType === "watch" && (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Watch size={24} />
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">Asuka Watch Series</span>
          </div>
        )}

        {fallbackType === "scene" && (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Sparkles size={24} />
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">Innovation & Technologie</span>
          </div>
        )}

        {fallbackType === "default" && (
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="text-neutral-300 dark:text-neutral-700" size={36} />
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{alt}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        onError={() => setError(true)}
      />
    </div>
  );
}
