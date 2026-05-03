import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { Calendar, Phone, User, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  problem: string;
  time: string;
};

export default function AppointmentForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-blue-50/50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Book Now</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-8 leading-tight">
              Ready for Your <span className="text-blue-600 italic">Perfect Smile?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Schedule your appointment today. Our friendly staff will confirm your slot via phone or WhatsApp within 2 hours of booking.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-blue-100 shadow-sm">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">Emergency Service</p>
                  <p className="text-2xl font-bold text-blue-950">{CLINIC_INFO.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-blue-100 shadow-sm">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">Opening Hours</p>
                  <p className="text-lg font-bold text-blue-950">Mon-Fri: 10AM - 9PM</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-blue-50 relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="appointment-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-bold text-blue-950 tracking-tight">
                      <User className="w-4 h-4 text-blue-600" />
                      Full Name
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-blue-50/50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-blue-950 font-medium"
                    />
                    {errors.name && <p className="text-red-500 text-xs font-bold">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-bold text-blue-950 tracking-tight">
                      <Phone className="w-4 h-4 text-blue-600" />
                      Phone Number
                    </label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      placeholder="+91 00000 00000"
                      className="w-full px-6 py-4 rounded-2xl bg-blue-50/50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-blue-950 font-medium"
                    />
                    {errors.phone && <p className="text-red-500 text-xs font-bold">{errors.phone.message}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-blue-950 tracking-tight">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                        Problem
                      </label>
                      <select
                        {...register('problem')}
                        className="w-full px-6 py-4 rounded-2xl bg-blue-50/50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-blue-950 font-medium appearance-none"
                      >
                        <option value="">General Checkup</option>
                        <option value="rct">Root Canal (RCT)</option>
                        <option value="braces">Braces</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="extraction">Extraction</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold text-blue-950 tracking-tight">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        Preferred Time
                      </label>
                      <select
                        {...register('time')}
                        className="w-full px-6 py-4 rounded-2xl bg-blue-50/50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-blue-950 font-medium appearance-none"
                      >
                        <option value="morning">Morning (10AM-1PM)</option>
                        <option value="afternoon">Afternoon (1PM-5PM)</option>
                        <option value="evening">Evening (5PM-9PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white rounded-3xl font-extrabold text-xl shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Confirm Appointment
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-950 mb-4">Slot Reserved!</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    We've received your request, <b>{CLINIC_INFO.doctor.name}</b>'s team 
                    will call you shortly to confirm your exact time slot.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-blue-600 font-bold hover:underline"
                  >
                    Book another appointment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
