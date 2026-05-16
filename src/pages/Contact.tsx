import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const socialLinks = {
    instagram: "https://www.instagram.com/houseof_bowgan?igsh=MWN5ODh2MDdnaHMzMQ%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1CvmPRTN7d/?mibexƟd=wwXIfr",
    tiktok: "https://www.tiktok.com/@houseofbowgan"
  };

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24 text-center space-y-6">
        <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Get In Touch</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-black">Contact Excellence</h1>
        <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-medium leading-relaxed">
          Ready to begin the journey? We are here to answer your questions and start planning your masterpiece.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 font-medium">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif">Reach Out</h2>
            <p className="text-zinc-500 leading-relaxed">
              Whether it's a grand wedding or an intimate surprise, our team is dedicated to providing you with a seamless experience from the first interaction.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-6 p-8 bg-brand-beige-light rounded-3xl">
              <div className="bg-white p-4 rounded-xl text-brand-gold shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-teal-deep mb-2">Call/WhatsApp</h4>
                <p className="text-lg text-brand-black font-semibold">+234 906 346 8136</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 bg-brand-beige-light rounded-3xl">
              <div className="bg-white p-4 rounded-xl text-brand-gold shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-teal-deep mb-2">Email Us</h4>
                <p className="text-lg text-brand-black font-semibold">hello@houseofbowgan.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 bg-brand-beige-light rounded-3xl">
              <div className="bg-white p-4 rounded-xl text-brand-gold shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-teal-deep mb-2">Our Studio</h4>
                <p className="text-lg text-brand-black font-semibold">Port Harcourt, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-teal-deep">Follow The Journey</h4>
            <div className="flex space-x-4">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="h-14 w-14 border border-brand-beige-base rounded-full flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="h-14 w-14 border border-brand-beige-base rounded-full flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="h-14 w-14 border border-brand-beige-base rounded-full flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all">
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Placeholder / Map */}
        <div className="bg-brand-black rounded-[3rem] p-12 text-white flex flex-col justify-between h-full min-h-[600px]">
           <div>
             <h3 className="text-3xl font-serif text-brand-gold mb-8 italic">"A goal without a plan is just a wish."</h3>
             <p className="text-zinc-400 text-sm leading-relaxed mb-12">
               We don't just plan events; we architect memories. Let's start building yours today. Our studio is available for consultations by appointment only.
             </p>
           </div>
           
           <div className="space-y-8">
             <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                <h5 className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-2 font-medium">Quick Message</h5>
                <textarea 
                  className="w-full bg-transparent border-none outline-none text-zinc-300 placeholder:text-zinc-700 resize-none h-24" 
                  placeholder="Tell us briefly about your event..."
                ></textarea>
                <button className="mt-4 flex items-center text-xs uppercase tracking-widest font-bold text-white hover:text-brand-gold transition-colors">
                  Send Quick Note <Send size={14} className="ml-2" />
                </button>
             </div>
             
             <p className="text-[10px] uppercase tracking-widest text-zinc-600">
               For detailed inquiries, please use our <Link to="/booking" className="text-brand-gold hover:underline">Booking Form</Link>.
             </p>
           </div>
        </div>
      </section>
    </div>
  );
}
