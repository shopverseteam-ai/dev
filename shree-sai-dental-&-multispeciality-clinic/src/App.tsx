import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Pricing from './components/Pricing.tsx';
import Testimonials from './components/Testimonials.tsx';
import Gallery from './components/Gallery.tsx';
import AppointmentForm from './components/AppointmentForm.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white scroll-smooth cursor-default">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <Gallery />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
