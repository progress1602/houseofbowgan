import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const eventCategories = [
  {
    title: "Weddings",
    desc: "Timeless, romantic, and breathtakingly elegant. We plan weddings that celebrate your love story with cinematic precision.",
    img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242775/IMG_5400_lshigx.jpg"
  },
  {
    title: "Birthdays",
    desc: "From milestone celebrations to intimate dinners, we make sure your special day is high-energy and perfectly styled.",
    img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242239/IMG_6790.JPG_dsotzt.jpg"
  },
  {
    title: "Anniversaries",
    desc: "Honoring the journey of love with sophisticated gatherings that reflect a lifetime of memories.",
    img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242215/IMG_5404_jec98v.jpg"
  },
  {
    title: "Galas & Corporate",
    desc: "Strategic coordination for high-profile events. We handle the complexity so your brand can shine.",
    img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242637/IMG_4159_dqjxnm.jpg"
  },
  {
    title: "Surprise Parties",
    desc: "Mastering the art of mystery. We manage the logistics and the secrecy for the ultimate reveal.",
    img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242734/IMG_5401_k8c4wy.jpg"
  },
  {
    title: "Bridal Showers",
    desc: "Chic and delightful pre-wedding celebrations tailored for the bride and her closest circle.",
    img: "https://res.cloudinary.com/progresshenry/image/upload/v1783242667/IMG_5406_a52egm.jpg"
  }
];

export default function Events() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24 text-center space-y-6">
        <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Portfolio Categories</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-black">Celebrations</h1>
        <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-medium leading-relaxed">
          Explore the diverse range of events we specialize in. Each category represents our commitment to excellence.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[500px] overflow-hidden rounded-[2rem] shadow-xl"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
              <h3 className="text-3xl font-serif text-brand-gold">{cat.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed line-clamp-2 uppercase tracking-wide font-medium">
                {cat.desc}
              </p>
              <Link to={`/gallery?category=${cat.title.toLowerCase()}`} className="text-white text-[10px] uppercase font-bold tracking-[0.2em] pt-4 flex items-center group-hover:text-brand-gold transition-colors">
                View Gallery <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mt-32 mb-12 px-6">
        <div className="max-w-7xl mx-auto bg-brand-teal-deep rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 font-medium">
          <div className="text-white md:w-2/3 space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif">Partner With Us</h2>
            <p className="text-white/70 text-lg">
              We welcome collaborations from vendors and event venue managers. Partnership opportunities are available with commission-based referrals.
            </p>
          </div>
          <Link to="/contact" className="bg-brand-gold text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm whitespace-nowrap hover:bg-white hover:text-brand-black transition-all">
            Join Our Network
          </Link>
        </div>
      </section>
    </div>
  );
}
