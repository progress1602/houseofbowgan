import { motion } from 'motion/react';
import { Award, Heart, Users, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">The Legacy</span>
          <h1 className="text-5xl md:text-8xl font-serif text-brand-black leading-tight mb-8">
            Architecting <br /> <span className="italic">Memorable Stories</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto italic font-medium">
            "We don't just plan events; we curated environments where life's most precious moments can unfold with grace and precision."
          </p>
        </motion.div>
      </section>

      {/* Section 1: Image Left, Long Text Right */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-beige-base/30 rounded-[3rem] -z-10 group-hover:bg-brand-gold/10 transition-colors duration-700"></div>
              <img 
                src="https://static.wixstatic.com/media/25ebd6_eb2cc121c54349fdb2f5cc478e0f154b~mv2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2696_JPG.jpg" 
                alt="Founder at work" 
                className="w-full h-[500px] md:h-[700px] object-cover rounded-[2.5rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-white p-8 rounded-2xl shadow-luxury hidden md:block">
                <p className="text-brand-black font-serif italic text-xl">10+ Years of Artistry</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight">
              About Emem
            </h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
              <p>
                My name is Emem Udoh and I have keen interest for all things LOVE & WEDDINGS! Passionate and dedicated to wedding planning, I draw inspiration and enthusiasm from the extensive experience and practical know-how I've gathered throughout my career years. I love to keep up with the latest wedding trends, adding a little tweak in here and there, and of course including them in our repertoire. I love trends, but I always choose to pair it with those classic, elegant, and timeless details that make weddings as whimsical as they are.
              </p>
              <p>
                The driving force behind the birth of House of Bowgan was my love and interest for details that seemed inconsequential to the eyes of others until it was, indeed, consequential. Many people attend weddings for the fun and pleasure of it (I do too, don’t get me wrong) But my eyes always wandered to possible minor concerns at wedding parties. To the Brides who eagerly wants to speak to someone to get things done right or the Guests having a hard time settling in, or vendors who won’t stick to timelines and no one to follow up on them. I found myself solving minor and major concerns that do arise at weddings and events. It gave me so much sense of fulfilment that I can solve problems, fix things and be the heroine of the day. I just cannot shake off the feeling that helping couples get their dream weddings is something I should do. Since I discovered this passion, I was lovestruck on it. This is why my team and I have assisted numerous couples plan their ideal wedding. It is a rare privilege to be inter-woven in numerous love stories I have no idea how they came to existence in the first place.
              </p>
              <p className="font-medium text-brand-black">
                A smiling, satisfied bride, groom, and guests (very important) that are having the time of their lives is really what makes me get out of bed to do it over and over and over! When I'm not planning weddings, I'm either creating fun and insightful wedding content on YouTube, Instagram, and TikTok (seriously, I take weddings a tad seriously), or I’m engrossed in my 9-5 job as a Human Resource Manager. I also love travelling, meeting people, exploring new places and their food; but when I am home, a Netflix and chill is right up my alley! Any G.O.T fans ?
              </p>
            </div>
            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-brand-gold text-4xl font-serif mb-2">350+</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Events Hosted</p>
              </div>
              <div>
                <h4 className="text-brand-gold text-4xl font-serif mb-2">98%</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Client Retention</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="px-6 py-24 bg-brand-beige-light/30">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold">Our History</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight">
              About House of Bowgan Luxurious, Elegant & Stylish Weddings
            </h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
              <p>
                Born out of pure passion for all things love & weddings, House of Bowgan is a boutique wedding planning company specializing in Nigerian, African, Multi-cultural and Destination weddings. We truly believe every couple deserves a perfectly planned, joyous wedding day, so we handle each wedding as if it were our last, giving our clients our very best and making sure they have a memorable, unforgettable yet delightful experience they'll cherish forever.              </p>
              <p>
               When planning weddings we aim for perfection, elegant style, and a detailed unique representation of our clients' vision - constantly aspiring to create amazing weddings! Based in Port Harcourt, Nigeria, House of Bowgan has been the go-to for couples wanting a bespoke, luxurious, and fun affair!              
               </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-brand-white rounded-full flex items-center justify-center shadow-sm">
                    <Star size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-1">Bespoke Design</h5>
                    <p className="text-xs opacity-70">Tailored to your DNA.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-brand-white rounded-full flex items-center justify-center shadow-sm">
                    <Award size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-1">Elite Sourcing</h5>
                    <p className="text-xs opacity-70">Only the finest vendors.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-gold/20 rounded-full animate-spin-slow hidden md:block"></div>
              <img 
                src="https://static.wixstatic.com/media/25ebd6_2614396940214fccbba3c885c079a978~mv2.jpg/v1/fill/w_500,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2700_JPG.jpg" 
                alt="Luxury Event Setup" 
                className="w-full h-[500px] md:h-[650px] object-cover rounded-[2.5rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold">Guiding Lights</span>
            <h2 className="text-4xl md:text-6xl font-serif">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Heart className="text-brand-gold" size={32} />, title: "Passion", desc: "We love what we do, and that energy is infused into every floral arrangement and floor plan." },
              { icon: <Users className="text-brand-gold" size={32} />, title: "Collaboration", desc: "Your voice is central. We listen, adapt, and amplify your vision to its greatest potential." },
              { icon: <Award className="text-brand-gold" size={32} />, title: "Excellence", desc: "Good is never enough. We strive for the extraordinary in every logistical detail." }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-serif">{value.title}</h3>
                <p className="text-zinc-500 leading-relaxed max-w-xs mx-auto">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
