import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-blue-700" />
            <span>Top Rated Dental Clinic in Muzaffarpur</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-blue-950 leading-[1.1] mb-6">
            Giving You a <span className="text-blue-600 italic">Perfect Smile</span> You Deserve.
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Experience premium dental care with {CLINIC_INFO.doctor.name}. We specialize in painless treatments and modern dental care using the latest technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2 group"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-white text-blue-900 border border-blue-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
            >
              Our Services
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-600" />
              <span className="font-semibold text-blue-950">Safe & Hygienic</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-blue-600" />
              <span className="font-semibold text-blue-950">Minimal Waiting</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1629909605125-5861e8194466?q=80&w=2070&auto=format&fit=crop"
              alt="Dental Care"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-blue-50"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Star className="w-6 h-6 fill-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-950 leading-none">5000+</p>
              <p className="text-sm text-gray-500 font-medium whitespace-nowrap">Happy Patients</p>
            </div>
          </motion.div>

           <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-10 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-blue-50"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl font-bold text-blue-950 leading-none">8+ Years</p>
              <p className="text-sm text-gray-500 font-medium whitespace-nowrap">Excellence</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
