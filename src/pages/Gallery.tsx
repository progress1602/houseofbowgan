import { motion } from 'motion/react';

const galleryImages = [
  "https://images.unsplash.com/photo-1550005808-49033303848b?auto=format&fit=crop&q=80&w=800", // Nigerian Wedding 1
  "https://images.unsplash.com/photo-1549416878-b9ca35c2d4bf?auto=format&fit=crop&q=80&w=800", // Traditional Elegance 2
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800", // Birthday Party 3
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800", // Joyful Celebration 4
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", // White Wedding 5
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800", // Gala Setup 6
  "https://images.unsplash.com/photo-1614959544551-b91c069b4124?auto=format&fit=crop&q=80&w=800", // African Cultural 7
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800", // Lively Event 8
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800", // Interior Detail 9
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800", // Sophisticated Evening 10
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", // Floral Decor 11
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&q=80&w=800", // Wedding Rings 12
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800", // Luxury Interior 13
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=800", // Gala Table 14
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", // Cake Details 15
  "https://images.unsplash.com/photo-1472653525502-fc569e405a74?auto=format&fit=crop&q=80&w=800", // Interior 16
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", // Decor 17
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800", // Detail 18
  "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800", // Table 19
  "https://images.unsplash.com/photo-1496733094125-219f752d9190?auto=format&fit=crop&q=80&w=800", // Setting 20
  "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800", // Hall 21
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800", // Gala 22
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", // Wedding 23
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800", // Event 24
  "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800", // Birthday 25
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800", // Decor 26
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", // Cake 27
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", // Floral 28
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&q=80&w=800", // Rings 29
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800", // Interior 30
  "https://images.unsplash.com/photo-1549416878-b9ca35c2d4bf?auto=format&fit=crop&q=80&w=800", // Traditional 31
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800", // Birthday 32
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800", // Celebration 33
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", // Wedding 34
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800", // Gala 35
  "https://images.unsplash.com/photo-1614959544551-b91c069b4124?auto=format&fit=crop&q=80&w=800", // Cultural 36
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800", // Party 37
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800", // Detail 38
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800", // Evening 39
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", // Floral 40
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", // Corporate 41
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", // Stage 42
  "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800", // Setup 43
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", // Event 44
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800", // Crowd 45
  "https://images.unsplash.com/photo-1475721027185-da8993881079?auto=format&fit=crop&q=80&w=800", // Light 46
  "https://images.unsplash.com/photo-1514525253361-bee24387052b?auto=format&fit=crop&q=80&w=800", // Music 47
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", // Dance 48
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800", // Models 49
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", // Detail 50
  "https://images.unsplash.com/photo-1496733094125-219f752d9190?auto=format&fit=crop&q=80&w=800", // Glass 51
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800", // Dinner 52
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800", // Social 53
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800", // DJ 54
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800", // Singer 55
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800", // Venue 56
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", // Style 57
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=800", // Jazz 58
  "https://images.unsplash.com/photo-1485872222662-74ef727282a9?auto=format&fit=crop&q=80&w=800", // Bokeh 59
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"  // End 60
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24 text-center space-y-6">
        <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Visual Excellence</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-black">The Gallery</h1>
        <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-medium leading-relaxed">
          A curate selection of our most memorable celebrations. Every image tells a story of elegance and precision.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i % 3 * 0.1 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${i}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white uppercase tracking-[0.3em] text-[10px] font-bold border border-white px-4 py-2">View Full</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
