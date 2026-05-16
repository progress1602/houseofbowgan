import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
  { name: 'Book Now', href: '/booking', primary: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contextLocation = useLocation();
  const isHomePage = contextLocation.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [contextLocation]);

  const navTheme = scrolled || !isHomePage;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        navTheme ? 'bg-white shadow-luxury py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className={cn(
            "text-[10px] tracking-[0.4em] uppercase font-bold transition-colors duration-300",
            navTheme ? "text-brand-gold" : "text-brand-gold"
          )}>
            House of
          </span>
          <span className={cn(
            "font-serif text-3xl tracking-wider uppercase font-bold transition-colors duration-300",
            navTheme ? "text-brand-black" : "text-white"
          )}>
            Bowgan
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300",
                link.primary 
                  ? "bg-brand-gold text-white px-8 py-3 rounded-full hover:bg-brand-teal-deep hover:scale-105" 
                  : (navTheme 
                      ? "text-brand-black font-extrabold hover:text-brand-gold" 
                      : "text-white font-bold hover:text-brand-gold")
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden", navTheme ? "text-brand-black" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden flex flex-col p-8 space-y-6 text-center border-t border-brand-beige-light"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-lg uppercase tracking-widest font-medium text-brand-black",
                  link.primary && "bg-brand-gold text-white py-3 rounded-xl"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
