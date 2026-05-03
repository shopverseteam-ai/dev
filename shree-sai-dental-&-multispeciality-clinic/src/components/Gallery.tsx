import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1629909605125-5861e8194466?q=80&w=2070&auto=format&fit=crop",
      title: "Dental Chair Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1597872200370-4a9cca01ad5e?q=80&w=2070&auto=format&fit=crop",
      title: "Clinic Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a34?q=80&w=2070&auto=format&fit=crop",
      title: "Modern Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1606811841660-1b51e9eb7a47?q=80&w=2070&auto=format&fit=crop",
      title: "Advanced Surgery Room"
    },
    {
      url: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2071&auto=format&fit=crop",
      title: "Patient Comfort"
    },
    {
      url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
      title: "Expert Care"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Inside the Clinic</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-4 flex items-center justify-center gap-4">
            Our <span className="text-blue-600">Premium</span> Facility
            <Camera className="w-10 h-10 text-blue-100 hidden md:block" />
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            Take a look at our clean, hygienic, and modern clinic environment designed for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-[300px] rounded-[2.5rem] overflow-hidden shadow-lg"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform">{img.title}</p>
                <p className="text-blue-200 text-sm">Shree Sai Dental Clinic</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
