import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Music2 } from 'lucide-react';

export default function Footer() {
  const socialLinks = {
    instagram: "https://www.instagram.com/houseof_bowgan?igsh=MWN5ODh2MDdnaHMzMQ%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1CvmPRTN7d/?mibexƟd=wwXIfr",
    tiktok: "https://www.tiktok.com/@houseofbowgan"
  };

  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-xs tracking-[0.4em] uppercase text-brand-gold">
              House of
            </span>
            <span className="font-serif text-3xl tracking-widest uppercase font-bold text-white">
              Bowgan
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting unforgettable moments with elegance, precision, and a touch of luxury. Your dream event, perfectly executed.
          </p>
          <div className="flex space-x-4">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
              <Music2 size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-brand-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li><Link to="/about" className="hover:text-white transition-colors uppercase tracking-wider">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors uppercase tracking-wider">Services</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors uppercase tracking-wider">Event Types</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors uppercase tracking-wider">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition-colors uppercase tracking-wider">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-brand-gold">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-brand-gold shrink-0" />
              <span>Port Harcourt, Nigeria</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <span>+234 906 346 8136</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-brand-gold shrink-0" />
              <span>hello@houseofbowgan.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-brand-gold">Stay Connected</h4>
          <p className="text-sm text-gray-400 mb-6 font-medium">Join our mailing list for luxury event inspiration and offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-zinc-900 border-none px-4 py-3 rounded-l-md text-sm outline-none w-full focus:ring-1 focus:ring-brand-gold"
            />
            <button className="bg-brand-gold text-white px-4 py-3 rounded-r-md text-sm uppercase tracking-widest font-bold">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-10 text-center text-xs text-gray-500 uppercase tracking-widest">
        © {new Date().getFullYear()} House of Bowgan. All rights reserved. 
        <span className="mx-2">|</span>
        Design by Excellence
      </div>
    </footer>
  );
}
