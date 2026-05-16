import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  "https://static.wixstatic.com/media/25ebd6_43c67d3d18aa401eb6464180f1175a03~mv2.jpg/v1/fill/w_548,h_730,q_90,enc_avif,quality_auto/25ebd6_43c67d3d18aa401eb6464180f1175a03~mv2.jpg", // White Wedding Gala
  "https://static.wixstatic.com/media/25ebd6_6c37979b7bb641cea63c7eaa1da29a02~mv2.jpg/v1/fit/w_1186,h_493,q_90,enc_avif,quality_auto/25ebd6_6c37979b7bb641cea63c7eaa1da29a02~mv2.jpg", // Traditional Gele/Wedding
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000", // Ballroom Decor
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=2000", // Wedding Celebration
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=2000", // Luxury Interior
  "https://static.wixstatic.com/media/25ebd6_0ffa96b84ba344deafef65c71447fbfa~mv2.jpg/v1/fill/w_748,h_421,q_90,enc_avif,quality_auto/25ebd6_0ffa96b84ba344deafef65c71447fbfa~mv2.jpg"  // Night Gala
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="freeze">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt="Luxury Event"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-brand-gold/50"></div>
          <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold">
            Established Excellence
          </span>
          <div className="h-[1px] w-12 bg-brand-gold/50"></div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-4xl md:text-8xl font-serif mb-10 leading-[1.1] tracking-tight"
        >
          Crafting Unforgettable <br className="hidden md:block" />
          Moments with <span className="italic text-brand-gold">Elegance</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <Link
            to="/booking"
            className="group relative bg-brand-gold text-brand-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all duration-300 md:w-auto w-full shadow-2xl hover:scale-105"
          >
            Book Your Event
          </Link>
          <Link
            to="/gallery"
            className="text-white border border-white/20 backdrop-blur-sm px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-brand-black transition-all duration-300 md:w-auto w-full"
          >
            Explore Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 flex gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              idx === currentSlide ? "w-12 bg-brand-gold" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute left-0 w-full h-1/2 bg-brand-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
