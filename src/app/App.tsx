import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Block 1: History
import { Slide01Timeline } from '@/app/components/slides/Slide01Timeline';
import { Slide02Problem } from '@/app/components/slides/Slide02Problem';
import { Slide03Reveal } from '@/app/components/slides/Slide03Reveal';

// Block 2: Introduction
import { Slide04Control } from '@/app/components/slides/Slide04Control';

// Block 3: Solution
import { Slide08WhatIs } from '@/app/components/slides/Slide08WhatIs';

// Block 4: Modules
import { Slide10Modules } from '@/app/components/slides/Slide10Modules';
import { Slide11SalesTasks } from '@/app/components/slides/Slide11SalesTasks';
import { Slide12MaterialsFinance } from '@/app/components/slides/Slide12MaterialsFinance';
import { Slide13AI } from '@/app/components/slides/Slide13AI';

// Block 5: Industries
import { Slide14Industries } from '@/app/components/slides/Slide14Industries';
import { Slide15Construction } from '@/app/components/slides/Slide15Construction';
import { Slide16Manufacturing } from '@/app/components/slides/Slide16Manufacturing';
import { Slide17Trade } from '@/app/components/slides/Slide17Trade';
import { Slide18Government } from '@/app/components/slides/Slide18Government';

// Block 6: Technical
import { Slide19Analytics } from '@/app/components/slides/Slide19Analytics';
import { Slide20Security } from '@/app/components/slides/Slide20Security';

// Block 7-9: Final
import { Slide22Pricing } from '@/app/components/slides/Slide22Pricing';
import { Slide23Effect } from '@/app/components/slides/Slide23Effect';
import { Slide24WhyUs } from '@/app/components/slides/Slide24WhyUs';
import { Slide25Conclusion } from '@/app/components/slides/Slide25Conclusion';
import { Slide26CTA } from '@/app/components/slides/Slide26CTA';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const slides = [
    <Slide01Timeline key="slide-01" />,
    <Slide02Problem key="slide-02" />,
    <Slide03Reveal key="slide-03" />,
    <Slide04Control key="slide-04" />,
    <Slide08WhatIs key="slide-08" />,
    <Slide10Modules key="slide-10" />,
    <Slide11SalesTasks key="slide-11" />,
    <Slide12MaterialsFinance key="slide-12" />,
    <Slide13AI key="slide-13" />,
    <Slide14Industries key="slide-14" />,
    <Slide15Construction key="slide-15" />,
    <Slide16Manufacturing key="slide-16" />,
    <Slide17Trade key="slide-17" />,
    <Slide18Government key="slide-18" />,
    <Slide19Analytics key="slide-19" />,
    <Slide20Security key="slide-20" />,
    <Slide22Pricing key="slide-22" />,
    <Slide23Effect key="slide-23" />,
    <Slide24WhyUs key="slide-24" />,
    <Slide25Conclusion key="slide-25" />,
    <Slide26CTA key="slide-26" />
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-white/50 text-sm font-light z-50">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
