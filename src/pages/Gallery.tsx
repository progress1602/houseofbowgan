import { motion } from 'motion/react';

const galleryImages = [
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242781/IMG_5408_sf1esu.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242778/IMG_5403_vmufdv.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242775/IMG_5400_lshigx.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242763/IMG_6121.JPG_1_frpdj5.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242761/IMG_6545.JPG_erxbp4.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242745/IMG_5381_ft4ldv.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242746/IMG_6793.JPG_id09j2.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242748/IMG_6104.JPG_glea7g.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242734/IMG_5401_k8c4wy.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242714/IMG_6810.JPG_udktly.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242667/IMG_5406_a52egm.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242706/IMG_6814.JPG_m0hdn3.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242637/IMG_4159_dqjxnm.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242257/IMG_6547.JPG_juhsm7.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242251/IMG_5407_xtyhff.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242239/IMG_6790.JPG_dsotzt.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242217/IMG_6809.JPG_-_Copy_m6fh9f.jpg",
  "https://res.cloudinary.com/progresshenry/image/upload/v1783242215/IMG_5404_jec98v.jpg"
];

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24 text-center space-y-6">
        <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Visual Excellence</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-black">The Gallery</h1>
        <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-medium leading-relaxed">
          A curated selection of our most memorable celebrations. Every image tells a story of elegance and precision.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden rounded-[2.5rem] shadow-luxury group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${i}`}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold border border-white px-6 py-3 rounded-full bg-brand-black/20 backdrop-blur-sm">View Full</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full-screen Lightbox */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 bg-brand-black/95 z-50 flex items-center justify-center p-4 transition-all duration-300">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <X size={24} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-6 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 hidden md:block"
          >
            <ChevronLeft size={36} />
          </button>

          <div className="max-w-5xl max-h-[80vh] flex flex-col items-center">
            <img 
              src={galleryImages[activeImageIndex]} 
              alt={`Gallery image ${activeImageIndex}`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <p className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mt-4">
              IMAGE {activeImageIndex + 1} OF {galleryImages.length}
            </p>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-6 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 hidden md:block"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
