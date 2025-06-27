import React from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Ali Haider
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">

            Full-Stack Developer specializing in
            <span className="text-blue-400 font-semibold"> Laravel</span>,
            <span className="text-emerald-400 font-semibold"> Angular</span>,
            <span className="text-purple-400 font-semibold"> Vue</span>,
            <span className="text-blue-400 font-semibold"> React</span>,
            <span className="text-emerald-400 font-semibold"> Next.js</span>,
            <span className="text-emerald-400 font-semibold"> Nuxt.js</span>,
            <span className="text-emerald-400 font-semibold"> Supabase</span>,
            <span className="text-emerald-400 font-semibold"> Bolt AI</span>,
            <span className="text-emerald-400 font-semibold"> ChatGPT</span>,and
            <span className="text-emerald-400 font-semibold"> modern web technologies</span>

            — crafting scalable web applications with clean architecture, API efficiency, and modern DevOps practices.
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I build scalable web applications and love turning complex problems into
            simple, beautiful solutions. Let's create something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-36">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <span>View My Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105">
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
