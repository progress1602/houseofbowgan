import { motion } from 'motion/react';
import Hero from '../components/Hero';
import { ShoppingBag, Users, Calendar, Diamond, Star, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesPreview = [
  {
    title: "Wedding Planning",
    desc: "From concept to the final dance, we handle every detail of your special day with grace.",
    icon: <Users className="text-brand-gold" size={32} />
  },
  {
    title: "Vendor Management",
    desc: "Access our curated network of the finest vendors to ensure top-tier quality.",
    icon: <ShoppingBag className="text-brand-gold" size={32} />
  },
  {
    title: "Day-of Coordination",
    desc: "Relax and enjoy your event while we oversee every operational aspect behind the scenes.",
    icon: <Calendar className="text-brand-gold" size={32} />
  }
];

const eventTypes = [
  { name: "Weddings", img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242241/IMG_6805.JPG_-_Copy_huluol.jpg" },
  { name: "Galas", img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242637/IMG_4159_dqjxnm.jpg" },
  { name: "Surprise Parties", img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242239/IMG_6790.JPG_dsotzt.jpg" },
  { name: "Anniversaries", img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242215/IMG_5404_jec98v.jpg" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Intro Section */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-5/12">
            <div className="bg-brand-black/5 p-10 border-l-2 border-brand-gold rounded-r-[2rem]">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-6 font-bold">The Heritage</h3>
              <p className="text-xl font-serif leading-relaxed text-zinc-700 italic">
                "House of Bowgan is a premium wedding and events planning brand based in Port Harcourt, delivering elegance, precision, and unforgettable experiences."
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-7/12 space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-brand-black leading-tight"
            >
              Excellence defined by <br /> <span className="italic">extraordinary detail.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-500 text-lg leading-relaxed font-medium max-w-xl"
            >
              We believe that every luxury event is a curated story. From the first sketch to the final toast, we architect environments that resonate with sophistication and cultural depth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/about" className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold border-b border-brand-gold pb-2 hover:text-brand-teal-deep hover:border-brand-teal-deep transition-all">
                Learn Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 px-6 bg-brand-beige-light relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif">Curated Services</h2>
            </div>
            <Link to="/services" className="flex items-center text-brand-black font-bold uppercase tracking-[0.2em] text-[10px] hover:text-brand-gold transition-colors">
              Browse All <ArrowUpRight className="ml-2" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {servicesPreview.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[2rem] shadow-luxury hover:scale-[1.02] transition-all duration-500 border border-brand-beige-base/30 group"
              >
                <div className="mb-10 transition-transform duration-500 group-hover:scale-110">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-6">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{service.desc}</p>
                <div className="mt-10 h-[1px] w-0 bg-brand-gold group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Grid Section (Editorial Style) */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-brand-teal-deep p-12 rounded-[2rem] flex flex-col justify-between text-white border border-white/5">
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-60">Signature</div>
            <h3 className="text-4xl font-serif italic text-brand-gold mt-6 italic">Wedding <br /> Planning</h3>
            <p className="text-sm opacity-60 font-medium leading-relaxed mt-10">
              The full-service experience. From budget spreadsheets to spatial planning, your only job is to be present.
            </p>
            <Link to="/booking" className="mt-12 text-[10px] font-bold uppercase tracking-widest text-white border-b border-white/20 pb-2 w-fit">Inquire Now</Link>
          </div>
          
          <div className="lg:col-span-1 bg-brand-beige-base/50 p-12 rounded-[2rem] flex flex-col justify-between text-brand-black overflow-hidden relative group">
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40">Portfolio</div>
            <h3 className="text-4xl font-serif mt-6">Events</h3>
            <div className="flex flex-wrap gap-3 mt-10">
              {['Weddings', 'Galas', 'Anniversaries'].map(tag => (
                <span key={tag} className="text-[9px] px-4 py-2 border border-brand-black/10 rounded-full font-bold uppercase tracking-wider">{tag}</span>
              ))}
            </div>
            <Link to="/gallery" className="mt-12 text-[10px] font-bold uppercase tracking-widest text-brand-black border-b border-brand-black/20 pb-2 w-fit group-hover:text-brand-gold group-hover:border-brand-gold transition-all">VIEW GALLERY</Link>
          </div>

          <div className="lg:col-span-1 md:col-span-2 bg-brand-beige-light p-12 rounded-[2rem] flex flex-col shadow-luxury border border-brand-beige-base/40">
            <div className="flex justify-between items-center mb-10">
              <h4 className="font-serif text-3xl italic">Reserve Your <br /> Consultation</h4>
              <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-teal-deep">Inquiry</div>
            </div>
            <div className="space-y-6">
              <div className="border-b border-brand-black/5 py-2">
                <label className="text-[8px] uppercase block opacity-40 font-bold tracking-widest mb-1">Status</label>
                <span className="text-xs font-bold text-brand-teal-light">Bookings Available for Q3 2026</span>
              </div>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                Step into the sphere of elite planning. Our bespoke approach ensures your celebration is nothing short of legendary.
              </p>
              <Link to="/booking" className="bg-brand-black text-white p-5 rounded-xl flex items-center justify-center text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-brand-gold transition-colors">
                SEND REQUEST
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Grid */}
      <section className="py-24 px-6 bg-brand-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 font-medium">
            <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif">Celebrations We Plan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, idx) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-serif text-brand-gold mb-1">{event.name}</h3>
                  <Link to="/gallery" className="text-[10px] uppercase tracking-widest text-white/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    View in Gallery
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2">
              <img
                src="https://res.cloudinary.com/progresshenry/image/upload/v1783242215/IMG_5404_jec98v.jpg"
                alt="Nigerian Wedding Couple"
                className="w-full h-[500px] md:h-[600px] object-cover rounded-3xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-brand-gold text-white p-8 md:p-12 rounded-3xl z-10">
                <Star fill="white" className="mb-4" size={24} />
                <p className="text-xl md:text-2xl font-serif italic">"Simply the best in the city."</p>
                <p className="uppercase tracking-widest text-[10px] mt-4 font-bold">- Chinedu & Adaugo</p>
              </div>
            </div>
            <div className="space-y-10 order-1 lg:order-2">
              <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Kind Words</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">What Our Clients <br /> Are Saying</h2>
              <div className="space-y-8">
                {[1].map((i) => (
                  <div key={i} className="border-b border-brand-beige-base pb-8 font-medium">
                    <p className="text-zinc-600 mb-4 leading-relaxed italic">
                      "House of Bowgan took our vision and elevated it to a level we couldn't have imagined. From vendor coordination to the final minutes of our wedding, their precision was unmatched."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-brand-beige-base rounded-full"></div>
                      <span className="uppercase tracking-widest text-xs font-bold text-brand-black">Jessica Smith</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-teal-deep text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto space-y-10 relative z-10 font-medium">
          <h2 className="text-4xl md:text-6xl font-serif">Let's Create Your <br /> Masterpiece Event</h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed">
            Every celebration deserves to be legendary. We are ready to turn your dreams into reality.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/booking" className="bg-brand-gold text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform w-full md:w-auto">
              Book a Consultation
            </Link>
            <Link to="/contact" className="border border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors w-full md:w-auto">
              Get in Touch
            </Link>
          </div>
          <p className="text-xs text-white/40 uppercase tracking-widest pt-8 border-t border-white/10">
            We welcome collaborations from vendors and venue managers.
          </p>
        </div>
      </section>
    </div>
  );
}
