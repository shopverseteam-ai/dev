import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { Award, GraduationCap, Stethoscope } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden border-[12px] border-blue-50 shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                alt={CLINIC_INFO.doctor.name}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-3xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Meet Our Specialist</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6 leading-tight">
              {CLINIC_INFO.doctor.name}
            </h2>
            <p className="text-blue-900/60 font-semibold text-lg mb-8 italic">
              {CLINIC_INFO.doctor.qualification}
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              {CLINIC_INFO.doctor.about}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">Expert in Surgery</h4>
                  <p className="text-sm text-gray-500">MDS (Oral & Maxillofacial Surgery)</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">8+ Years Experience</h4>
                  <p className="text-sm text-gray-500">Advanced Clinical Practice</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">Modern Equipment</h4>
                  <p className="text-sm text-gray-500">Minimal Pain Technology</p>
                </div>
              </div>
               <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 mb-1">Registered Expert</h4>
                  <p className="text-sm text-gray-500">Reg No: {CLINIC_INFO.doctor.registration.split(' ')[0]}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-950 rounded-3xl text-white">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-blue-200 text-sm font-medium mb-1 uppercase tracking-tighter">Availability Status</p>
                  <p className="text-xl font-bold flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    Accepting New Patients
                  </p>
                </div>
                <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />
                <div className="hidden sm:block">
                  <p className="text-blue-200 text-sm font-medium mb-1 uppercase tracking-tighter">Direct Line</p>
                  <p className="text-xl font-bold">{CLINIC_INFO.contact.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
