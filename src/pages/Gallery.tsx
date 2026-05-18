import { motion } from 'motion/react';

const galleryImages = [
  "https://static.wixstatic.com/media/25ebd6_0085e6a101e44037b20bb14917f77b3f~mv2.jpg/v1/fill/w_204,h_283,q_90,enc_avif,quality_auto/25ebd6_0085e6a101e44037b20bb14917f77b3f~mv2.jpg", // Nigerian Wedding 1
  "https://static.wixstatic.com/media/25ebd6_11a62a72cd3a447f80618e6a84a9fbfa~mv2.jpeg/v1/fill/w_269,h_283,q_90,enc_avif,quality_auto/25ebd6_11a62a72cd3a447f80618e6a84a9fbfa~mv2.jpeg", // Traditional Elegance 2
  "https://static.wixstatic.com/media/25ebd6_1eb39357410045f9bf3b06e14c4ac252~mv2.jpg/v1/fill/w_522,h_348,q_90,enc_avif,quality_auto/25ebd6_1eb39357410045f9bf3b06e14c4ac252~mv2.jpg", // Birthday Party 3
  "https://static.wixstatic.com/media/25ebd6_3bbc1d6fc1344809a3cdaecbc51709db~mv2.jpg/v1/fill/w_259,h_385,q_90,enc_avif,quality_auto/25ebd6_3bbc1d6fc1344809a3cdaecbc51709db~mv2.jpg", // Joyful Celebration 4
  "https://static.wixstatic.com/media/25ebd6_4d25ce2bdf604169aaac6a9064b27ef8~mv2.jpg/v1/fill/w_259,h_192,q_90,enc_avif,quality_auto/25ebd6_4d25ce2bdf604169aaac6a9064b27ef8~mv2.jpg", // White Wedding 5
  "https://static.wixstatic.com/media/25ebd6_50e0bea61e0b46d68140c4a23db9b021~mv2.jpg/v1/fill/w_279,h_348,q_90,enc_avif,quality_auto/25ebd6_50e0bea61e0b46d68140c4a23db9b021~mv2.jpg", // Gala Setup 6
  "https://static.wixstatic.com/media/25ebd6_7cb8875b2e884edcb5320c261d58d3c3~mv2.jpg/v1/fill/w_501,h_375,q_90,enc_avif,quality_auto/25ebd6_7cb8875b2e884edcb5320c261d58d3c3~mv2.jpg", // African Cultural 7
  "https://static.wixstatic.com/media/25ebd6_7d8a0acc31954ac283ce654bc28a23ce~mv2.jpg/v1/fill/w_400,h_300,q_90,enc_avif,quality_auto/25ebd6_7d8a0acc31954ac283ce654bc28a23ce~mv2.jpg", // Lively Event 8
  "https://static.wixstatic.com/media/25ebd6_89363eacfba84337959af1c63547d672~mv2.jpg/v1/fill/w_299,h_375,q_90,enc_avif,quality_auto/25ebd6_89363eacfba84337959af1c63547d672~mv2.jpg", // Interior Detail 9
  "https://static.wixstatic.com/media/25ebd6_8f55b674bd0f44ac877664ac0c359648~mv2.jpg/v1/fill/w_400,h_300,q_90,enc_avif,quality_auto/25ebd6_8f55b674bd0f44ac877664ac0c359648~mv2.jpg", // Sophisticated Evening 10
  "https://static.wixstatic.com/media/25ebd6_9fb7f3a4c9764acea5fb3e3613e109e6~mv2.jpg/v1/fill/w_396,h_505,q_90,enc_avif,quality_auto/25ebd6_9fb7f3a4c9764acea5fb3e3613e109e6~mv2.jpg", // Floral Decor 11
  "https://static.wixstatic.com/media/25ebd6_bc35383648974cc9bcc4f4559a5fa477~mv2.jpg/v1/fill/w_278,h_348,q_90,enc_avif,quality_auto/25ebd6_bc35383648974cc9bcc4f4559a5fa477~mv2.jpg", // Wedding Rings 12
  "https://static.wixstatic.com/media/25ebd6_bfbbfdf78713476bb6682784fee24f0a~mv2.jpg/v1/fill/w_400,h_300,q_90,enc_avif,quality_auto/25ebd6_bfbbfdf78713476bb6682784fee24f0a~mv2.jpg", // Luxury Interior 13
  "https://static.wixstatic.com/media/25ebd6_d69c258192c54f2989d2708eec033890~mv2.jpg/v1/fill/w_400,h_300,q_90,enc_avif,quality_auto/25ebd6_d69c258192c54f2989d2708eec033890~mv2.jpg", // Gala Table 14
  "https://static.wixstatic.com/media/25ebd6_e000c18795014b8d88ba5c50724b68b3~mv2.jpg/v1/fill/w_542,h_677,q_90,enc_avif,quality_auto/25ebd6_e000c18795014b8d88ba5c50724b68b3~mv2.jpg", // Cake Details 15
  "https://static.wixstatic.com/media/25ebd6_ea908a7cd87c4600b5b54df2b8ce8331~mv2.jpg/v1/fill/w_227,h_283,q_90,enc_avif,quality_auto/25ebd6_ea908a7cd87c4600b5b54df2b8ce8331~mv2.jpg", // Interior 16
  "https://static.wixstatic.com/media/25ebd6_ec57d769b4f34699b6d7a9c0d4a86e6a~mv2.jpg/v1/fill/w_521,h_348,q_90,enc_avif,quality_auto/25ebd6_ec57d769b4f34699b6d7a9c0d4a86e6a~mv2.jpg", // Decor 17
  "https://static.wixstatic.com/media/25ebd6_ec9fd9ba7a7740268ea3fab2b207ee70~mv2.jpg/v1/fill/w_404,h_505,q_90,enc_avif,quality_auto/25ebd6_ec9fd9ba7a7740268ea3fab2b207ee70~mv2.jpg", // Detail 18
  "https://static.wixstatic.com/media/25ebd6_659ed193696547f4a0b886cdba99f62d~mv2.jpg/v1/fill/w_900,h_453,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_2855_edited_edited.jpg", // Table 19
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800", // Gala 22
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", // Wedding 23
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800", // Event 24
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800", // Decor 26
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", // Cake 27
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", // Floral 28
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&q=80&w=800", // Rings 29
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800", // Celebration 33
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", // Wedding 34
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800", // Gala 35
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800", // Detail 38
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800", // Evening 39
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800", // Floral 40
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", // Dance 48
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800", // Models 49
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", // Detail 50
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800", // Dinner 52
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
