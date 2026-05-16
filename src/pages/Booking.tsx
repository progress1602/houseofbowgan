import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Calendar, Phone, Mail, User, Wallet, MessageSquare, ChevronRight } from 'lucide-react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    budgetRange: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In real app, send to API
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 bg-brand-beige-light min-h-screen">
      <section className="px-6 mb-16 text-center space-y-6">
        <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Reservation</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-black">Book Your Event</h1>
        <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-medium leading-relaxed">
          Fill out the form below to begin your consultation. We personally review every inquiry to ensure we are the right fit for your vision.
        </p>
      </section>

      <section className="px-6 max-w-4xl mx-auto font-medium">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] shadow-luxury p-8 md:p-16 border border-brand-beige-base"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div className="space-y-4">
                    <label className="flex items-center text-[8px] uppercase tracking-[0.3em] font-bold text-brand-teal-deep opacity-60">
                      <User size={12} className="mr-2" /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Sarah Johnson"
                      className="w-full bg-transparent border-b border-brand-black/10 px-0 py-3 focus:border-brand-gold outline-none text-brand-black transition-all text-sm font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-4">
                    <label className="flex items-center text-[8px] uppercase tracking-[0.3em] font-bold text-brand-teal-deep opacity-60">
                      <Mail size={12} className="mr-2" /> Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className="w-full bg-transparent border-b border-brand-black/10 px-0 py-3 focus:border-brand-gold outline-none text-brand-black transition-all text-sm font-semibold"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-4">
                    <label className="flex items-center text-[8px] uppercase tracking-[0.3em] font-bold text-brand-teal-deep opacity-60">
                      <Phone size={12} className="mr-2" /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234..."
                      className="w-full bg-transparent border-b border-brand-black/10 px-0 py-3 focus:border-brand-gold outline-none text-brand-black transition-all text-sm font-semibold"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="space-y-4">
                    <label className="flex items-center text-[8px] uppercase tracking-[0.3em] font-bold text-brand-teal-deep opacity-60">
                      <Calendar size={12} className="mr-2" /> Event Type
                    </label>
                    <select
                      required
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brand-black/10 px-0 py-3 focus:border-brand-gold outline-none text-brand-black transition-all text-sm font-semibold italic cursor-pointer"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Luxury Wedding</option>
                      <option value="birthday">Premium Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="gala">Gala / Corporate</option>
                      <option value="surprise">Surprise Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-4">
                    <label className="flex items-center text-[8px] uppercase tracking-[0.3em] font-bold text-brand-teal-deep opacity-60">
                      <Calendar size={12} className="mr-2" /> Anticipated Date
                    </label>
                    <input
                      required
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brand-black/10 px-0 py-3 focus:border-brand-gold outline-none text-brand-black transition-all text-sm font-semibold"
                    />
                  </div>

                  {/* Budget */}
                  <div className="space-y-4">
                    <label className="flex items-center text-[8px] uppercase tracking-[0.3em] font-bold text-brand-teal-deep opacity-60">
                      <Wallet size={12} className="mr-2" /> Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brand-black/10 px-0 py-3 focus:border-brand-gold outline-none text-brand-black transition-all text-sm font-semibold cursor-pointer"
                    >
                      <option value="">Select budget range</option>
                      <option value="luxury">Luxury Elite</option>
                      <option value="premium">Premium Portfolio</option>
                      <option value="custom">Custom Discussion</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                  <label className="flex items-center text-[8px] uppercase tracking-[0.3em] font-bold text-brand-teal-deep opacity-60">
                    <MessageSquare size={12} className="mr-2" /> Additional Details
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vision..."
                    rows={4}
                    className="w-full bg-transparent border-b border-brand-black/10 px-0 py-3 focus:border-brand-gold outline-none text-brand-black transition-all text-sm font-semibold resize-none"
                  ></textarea>
                </div>

                <div className="pt-10">
                  <button
                    type="submit"
                    className="w-full bg-brand-teal-deep text-white hover:bg-brand-gold py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center group shadow-xl"
                  >
                    SEND REQUEST
                    <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-teal-deep text-white rounded-[2.5rem] shadow-2xl p-16 text-center space-y-8"
            >
              <div className="inline-flex items-center justify-center h-24 w-24 bg-white/10 rounded-full mb-4">
                <CheckCircle2 size={60} className="text-brand-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif">Inquiry Received</h2>
              <p className="text-white/70 max-w-lg mx-auto text-lg leading-relaxed">
                Thank you for choosing House of Bowgan. We have received your booking request and our lead consultant will reach out to you within 24-48 hours.
              </p>
              <div className="pt-10">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-brand-gold text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
