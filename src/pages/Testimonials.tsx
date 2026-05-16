import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Chinedu & Adaugo",
    event: "Luxury Wedding",
    text: " Simply the best in the city. House of Bowgan took our vision and turned it into a breathtaking reality. The precision in their planning meant we could actually enjoy our day without a single worry.",
    image: "https://images.unsplash.com/photo-1550005808-49033303848b?auto=format&fit=crop&q=80&w=800",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    event: "Premium Birthday",
    text: "Working with the team was an absolute dream. My surprise birthday party was orchestrated with so much class and secrecy. Every guest was blown away by the decor and the flow of the event.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800",
    rating: 5
  },
  {
    name: "Dr. & Mrs. Okeke",
    event: "Anniversary Gala",
    text: "The institutional knowledge and vendor relationships they bring to the table are unmatched. They managed a 500-guest gala with the ease of an intimate dinner. Truly elite service.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800",
    rating: 5
  },
  {
    name: "Anita Bello",
    event: "Bridal Shower",
    text: "Chic, delightful, and perfectly tailored. House of Bowgan understood my aesthetic perfectly and delivered a shower that was both intimate and grandly sophisticated.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    rating: 5
  },
  {
    name: "Michael Chen",
    event: "Corporate Gala",
    text: "Strategic coordination at its finest. They handled our high-profile corporate launch with cinematic precision. Their attention to detail reflects our brand's values perfectly.",
    image: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800",
    rating: 5
  },
  {
    name: "Zainab & Ibrahim",
    event: "Traditional Ceremony",
    text: "They honored our heritage with such grace. The traditional elements were blended seamlessly with modern luxury. We couldn't have asked for a better partner for our wedding.",
    image: "https://images.unsplash.com/photo-1549416878-b9ca35c2d4bf?auto=format&fit=crop&q=80&w=800",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <section className="px-6 mb-24 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Kind Words</span>
          <h1 className="text-5xl md:text-8xl font-serif text-brand-black leading-tight">
            Client <span className="italic">Testimonials</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto italic font-medium mt-8">
            "The greatest measure of our success is the joy of our clients and the memories we help them create."
          </p>
        </motion.div>
      </section>

      {/* Featured Cinematic Testimonials */}
      <section className="px-6 space-y-32 mb-32">
        {testimonials.slice(0, 3).map((testimonial, idx) => (
          <div key={testimonial.name} className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 md:gap-24`}>
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-gold/5 rounded-[3rem] -z-10 group-hover:bg-brand-gold/10 transition-colors duration-700"></div>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-[500px] md:h-[650px] object-cover rounded-[2.5rem] shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute -bottom-6 ${idx % 2 === 0 ? '-right-6' : '-left-6'} bg-brand-white p-6 rounded-2xl shadow-luxury hidden md:block z-10`}>
                    <p className="text-brand-gold font-bold uppercase tracking-widest text-[10px]">{testimonial.event}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <Quote className="text-brand-gold opacity-20" size={60} />
                <h3 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight">
                  "{testimonial.text}"
                </h3>
                <div className="space-y-4 pt-4 border-t border-brand-beige-base/30">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#C5A059" className="text-brand-gold" />
                    ))}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-brand-black">{testimonial.name}</h4>
                    <p className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold">Verified Client Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials Grid for others */}
      <section className="px-6 mb-32 py-24 bg-brand-beige-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif">More Kind Words</h2>
            <div className="h-1 w-20 bg-brand-gold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.slice(3).map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-white p-10 rounded-[2.5rem] border border-brand-beige-base/30 shadow-luxury flex flex-col group hover:scale-[1.02] transition-all duration-500"
              >
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-xl text-brand-black">{testimonial.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">{testimonial.event}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="#C5A059" className="text-brand-gold" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-brand-gold/10" size={48} />
                <p className="text-zinc-600 leading-relaxed font-medium italic relative z-10">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="mt-auto pt-8 flex justify-end">
                <div className="h-[1px] w-12 bg-brand-gold/30 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Featured Big Quote */}
      <section className="bg-brand-black py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Quote className="mx-auto text-brand-gold mb-12" size={60} />
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-serif text-white leading-tight italic"
          >
            "Exceptional orchestrator of dreams. Every second was accounted for, and every detail was filled with grace."
          </motion.h2>
          <div className="mt-12">
            <p className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-2">The Excellence Standard</p>
            <div className="h-[1px] w-24 bg-brand-gold/50 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black">Ready to create <br /> <span className="italic">your own story?</span></h2>
          <p className="text-zinc-500 font-medium">Join our growing list of satisfied clients who have experienced the House of Bowgan difference.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                  to="/booking"
                  className="bg-brand-gold text-brand-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl block"
              >
                  Start Planning
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                  to="/gallery"
                  className="text-brand-black border border-brand-black/10 px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-black hover:text-white transition-all block"
              >
                  View Gallery
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
