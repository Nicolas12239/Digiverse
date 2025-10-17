"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerCarouselProps {
  items: {
    id: string;
    title: string;
    description?: string;
    imageUrl?: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const BannerCarousel = ({
  items,
  autoPlay = true,
  interval = 5000,
  className,
}: BannerCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 z-10" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          {items[currentIndex].imageUrl ? (
            <div 
              className="absolute inset-0 bg-cover bg-center h-full w-full"
              style={{ backgroundImage: `url(${items[currentIndex].imageUrl})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 h-full w-full" />
          )}
          
          <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-10 py-16">
            <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white drop-shadow-md">
              {items[currentIndex].title}
            </h3>
            {items[currentIndex].description && (
              <p className="text-white/90 text-base md:text-lg max-w-lg drop-shadow-md">
                {items[currentIndex].description}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};