import { motion } from 'motion/react';
import { Package, Users, Compass, Pencil, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Wedding & Event Planning",
    desc: "The full-service experience. We handle everything from budget spreadsheets and mood boards to spatial planning and floor plans. Your only job is to be present.",
    icon: <Users size={40} className="text-brand-gold" />,
    features: ["Budget management", "Design & styling", "Timeline creation", "RSVP tracking"]
  },
  {
    title: "Vendor Management",
    desc: "We bridge the gap between you and the best suppliers. Our vendor management ensures contract accuracy, quality control, and seamless communication.",
    icon: <Package size={40} className="text-brand-gold" />,
    features: ["Contract negotiation", "Vendor sourcing", "Technical briefings", "Payment schedules"]
  },
  {
    title: "Day-of Coordination",
    desc: "Already planned everything but want a professional to run the show? We step in 4 weeks prior to ensure your hard work results in a flawless day.",
    icon: <Compass size={40} className="text-brand-gold" />,
    features: ["On-site management", "Vendor handover", "Crisis management", "Guest hospitality"]
  },
  {
    title: "P.I.Y (Plan It Yourself)",
    desc: "For the hands-on couple who needs professional guidance. We provide the tools, templates, and 3 strategic sessions to set you up for success.",
    icon: <Pencil size={40} className="text-brand-gold" />,
    features: ["3 Strategy sessions", "Planning templates", "Checklist & tools", "Expert advice"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24 text-center space-y-6">
        <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Offerings</span>
        <h1 className="text-5xl md:text-7xl font-serif text-brand-black">Bespoke Services</h1>
        <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-medium leading-relaxed">
          From full-scale event production to expert guidance for DIY planners, we offer a range of services designed for excellence.
        </p>
      </section>

      <section className="px-6 space-y-12 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 bg-white rounded-[2.5rem] shadow-luxury overflow-hidden`}
          >
            <div className="md:w-1/2 w-full aspect-square md:aspect-auto md:h-[500px]">
              <img
                src={`https://images.unsplash.com/photo-${[
                  '1519225421980-715cb0215aed',
                  '1511795409834-ef04bbd61622',
                  '1519741497674-611481863552',
                  '1472653525502-fc569e405a74'
                ][i]}?auto=format&fit=crop&q=80&w=800`}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 w-full p-12 md:p-20 space-y-8 font-medium">
              <div>
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-4xl font-serif mb-4">{service.title}</h2>
                <p className="text-zinc-500 leading-relaxed text-sm">{service.desc}</p>
              </div>
              
              <ul className="grid grid-cols-2 gap-4">
                {service.features.map(f => (
                  <li key={f} className="flex items-center text-xs text-brand-teal-deep uppercase tracking-widest font-bold">
                    <span className="h-1.5 w-1.5 bg-brand-gold rounded-full mr-3"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/booking" className="inline-flex items-center text-brand-gold font-bold uppercase tracking-widest text-xs border-b border-brand-gold pb-2 hover:text-brand-teal-light transition-all">
                Inquire Now <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mt-32 px-6 bg-brand-beige-light py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-serif">Need something custom?</h2>
          <p className="text-zinc-500 font-medium leading-relaxed">
            We understand that unique visions require unique solutions. Contact us for a personalized package tailored strictly to your event requirements.
          </p>
          <Link to="/contact" className="inline-block bg-brand-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors">
            Custom Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
