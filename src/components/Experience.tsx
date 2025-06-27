import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through performance optimization",
        "Led migration from monolith to microservices architecture",
        "Mentored 5 junior developers and improved team productivity by 25%"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects from concept to deployment. Collaborated with design and product teams to deliver user-centered solutions.",
      achievements: [
        "Built 10+ client applications with 99.9% uptime",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Increased user engagement by 35% through UX improvements"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Azure", "Redis"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Specialized in creating responsive, interactive websites for enterprise clients. Focused on performance optimization and cross-browser compatibility.",
      achievements: [
        "Delivered 20+ responsive websites with pixel-perfect designs",
        "Improved website performance scores by average of 30%",
        "Established component library used across 15+ projects"
      ],
      technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey and the impact I've made along the way
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <ExternalLink className="h-4 w-4" />
                          <span className="font-medium text-blue-600">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2 text-gray-700">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;