/**
 * @file expandable-image.tsx
 * @description Click-to-enlarge image with a lightbox dialog.
 */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ExpandableImageProps {
  src: string;
  alt: string;
  sizes?: string;
  containerClassName?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ExpandableImage({
  src,
  alt,
  sizes = "100vw",
  containerClassName,
  imageClassName = "object-contain",
  priority = false,
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2",
          containerClassName,
        )}
        aria-label={`Enlarge image: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            imageClassName,
            "transition-transform duration-200 group-hover:scale-[1.02]",
          )}
          sizes={sizes}
        />
        <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white sm:opacity-90">
          <ZoomIn className="h-3 w-3" aria-hidden="true" />
          Enlarge
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[min(96vw,56rem)] border-0 bg-transparent p-2 shadow-none sm:p-4 [&>button]:text-white [&>button]:opacity-90 [&>button]:hover:opacity-100">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            className="mx-auto h-auto max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
            sizes="96vw"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
