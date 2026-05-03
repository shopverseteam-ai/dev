import React from 'react';
import { motion } from 'motion/react';
import { Shield, ThumbsUp, Zap, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Shield,
      title: "Hygienic Environment",
      desc: "We follow international sterilization protocols for every procedure."
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      desc: "Equipped with Digital X-Rays and modern dental chairs for accurate diagnosis."
    },
    {
      icon: ThumbsUp,
      title: "Painless Treatment",
      desc: "Our techniques ensure minimal discomfort during even complex surgeries."
    },
    {
      icon: HeartPulse,
      title: "Patient Centric",
      desc: "Every plan is customized to suit your specific health needs and budget."
    }
  ];

  return (
    <section className="py-24 bg-blue-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4"
        >
          Why Our Clinic?
        </motion.p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">Setting Benchmark in <span className="text-blue-400">Dental Excellence</span></h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left"
            >
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-blue-200/60 leading-relaxed text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 grid lg:grid-cols-3 gap-12 border-t border-white/10 pt-20">
          {CLINIC_INFO.stats.map((stat, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 + index * 0.1 }}
            >
              <p className="text-5xl font-extrabold text-blue-400 mb-2">{stat.value}</p>
              <p className="text-blue-100 text-lg font-medium opacity-70 tracking-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
