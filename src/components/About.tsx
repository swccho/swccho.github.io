import React from 'react';
import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Rocket className="h-8 w-8 text-emerald-500" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Coffee className="h-8 w-8 text-orange-500" />,
      title: "Collaboration",
      description: "Working effectively in agile development teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate developer with 5+ years of experience creating digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-700">
                <p className="text-lg leading-relaxed">
                  I'm a full-stack developer with a passion for creating exceptional digital experiences. 
                  My journey began with curiosity about how websites work, and it's evolved into a career 
                  dedicated to building scalable, user-friendly applications.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I specialize in modern web technologies including React, Node.js, and cloud platforms. 
                  I believe great software combines technical excellence with thoughtful user experience design.
                </p>

                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community through blog posts and mentoring.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;