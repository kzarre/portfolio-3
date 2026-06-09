"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiChevronLeft } from "react-icons/hi2";
import type { CarouselSlide } from "@/types/portfolio";
import { VisualMedia } from "@/components/ui/visual-media";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  slides: CarouselSlide[];
  title: string;
}

export function ImageCarousel({ slides, title }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  if (slides.length === 0) return null;

  return (
    <div className="relative flex h-full w-full flex-col bg-black">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-w-0 flex-[0_0_100%] h-full">
              <div className="relative flex h-full w-full items-center justify-center">
                <VisualMedia
                  visual={slide.visual}
                  fallback={slide.fallback}
                  alt={slide.alt}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
            onClick={scrollPrev}
            aria-label="Previous"
          >
            <HiChevronLeft className="h-5 w-5 text-black" />
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow"
            onClick={scrollNext}
            aria-label="Next"
          >
            <HiChevronLeft className="h-5 w-5 rotate-180 text-black" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "h-[6px] w-[6px] rounded-full bg-white transition-all",
                  index === selectedIndex ? "opacity-100 animate-pulse" : "opacity-40"
                )}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <p className="sr-only">
        {title} — slide {selectedIndex + 1} of {slides.length}
      </p>
    </div>
  );
}
