import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Mail, Home, User, Briefcase, FolderOpen, MessageCircle, Award } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);

            // Determine if current section has dark or light background
            const darkSections = ['home', 'contact'];
            setIsDarkBackground(darkSections.includes(section));

            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  // Dynamic styles based on background
  const navStyles = isDarkBackground
    ? {
        container: 'bg-white/10 backdrop-blur-xl border border-white/20',
        text: 'text-white/80 hover:text-white',
        activeButton: 'bg-blue-500 text-white shadow-lg shadow-blue-500/30',
        inactiveButton: 'text-white/80 hover:text-white hover:bg-white/10',
        brandText: 'text-white',
        brandIcon: 'text-blue-400',
        socialLinks: 'text-white/80 hover:text-white',
        indicator: 'bg-white'
      }
    : {
        container: 'bg-slate-900/95 backdrop-blur-xl border border-slate-700/50',
        text: 'text-slate-300 hover:text-white',
        activeButton: 'bg-blue-500 text-white shadow-lg shadow-blue-500/30',
        inactiveButton: 'text-slate-300 hover:text-white hover:bg-slate-700/50',
        brandText: 'text-white',
        brandIcon: 'text-blue-400',
        socialLinks: 'text-slate-300 hover:text-white',
        indicator: 'bg-blue-500'
      };

  return (
    <>
      {/* Brand Logo - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <div className={`${navStyles.container} rounded-full p-3 shadow-2xl transition-all duration-300`}>
          <div className="flex items-center space-x-2">
            <Code className={`h-6 w-6 ${navStyles.brandIcon}`} />
            <span className={`${navStyles.brandText} font-bold text-lg hidden sm:block`}>AH</span>
          </div>
        </div>
      </div>

      {/* Vertical Right Navigation - Desktop */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className={`${navStyles.container} rounded-2xl p-4 shadow-2xl transition-all duration-300`}>
          <div className="flex flex-col space-y-3">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative p-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? navStyles.activeButton
                        : navStyles.inactiveButton
                    } hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />


                  </button>

                  {/* Tooltip */}
                  <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-2 ${navStyles.container} rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap`}>
                    <span className={`text-sm font-medium ${navStyles.text}`}>{item.label}</span>
                    <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${isDarkBackground ? 'border-l-white/10' : 'border-l-slate-900/95'}`}></div>
                  </div>
                </div>
              );
            })}

            {/* Divider */}
            <div className={`w-full h-px ${isDarkBackground ? 'bg-white/20' : 'bg-slate-700/50'} my-2`}></div>

            {/* Social Links */}
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl ${navStyles.inactiveButton} hover:scale-110 transition-all duration-300 group`}
              >
                <Github className="h-4 w-4" />
                <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-2 ${navStyles.container} rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap`}>
                  <span className={`text-sm font-medium ${navStyles.text}`}>GitHub</span>
                  <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${isDarkBackground ? 'border-l-white/10' : 'border-l-slate-900/95'}`}></div>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl ${navStyles.inactiveButton} hover:scale-110 transition-all duration-300 group`}
              >
                <Linkedin className="h-4 w-4" />
                <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-2 ${navStyles.container} rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap`}>
                  <span className={`text-sm font-medium ${navStyles.text}`}>LinkedIn</span>
                  <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${isDarkBackground ? 'border-l-white/10' : 'border-l-slate-900/95'}`}></div>
                </div>
              </a>
              <a
                href="mailto:contact@example.com"
                className={`p-3 rounded-xl ${navStyles.inactiveButton} hover:scale-110 transition-all duration-300 group`}
              >
                <Mail className="h-4 w-4" />
                <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-2 ${navStyles.container} rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap`}>
                  <span className={`text-sm font-medium ${navStyles.text}`}>Email</span>
                  <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent ${isDarkBackground ? 'border-l-white/10' : 'border-l-slate-900/95'}`}></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`fixed top-6 right-6 z-50 lg:hidden ${navStyles.container} rounded-full p-3 shadow-2xl transition-all duration-300`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ?
          <X className={`h-6 w-6 ${navStyles.brandText}`} /> :
          <Menu className={`h-6 w-6 ${navStyles.brandText}`} />
        }
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"></div>
          <div className="relative flex items-center justify-center min-h-screen">
            <nav className="text-center space-y-8">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full transition-all duration-300 ${
                      isActive ? 'text-blue-400 scale-110' : 'text-white hover:text-blue-400 hover:scale-105'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`p-4 rounded-full border-2 transition-all duration-300 ${
                        isActive 
                          ? 'border-blue-400 bg-blue-400/20' 
                          : 'border-white/30 hover:border-blue-400/50'
                      }`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className="text-xl font-medium">{item.label}</span>
                    </div>
                  </button>
                );
              })}

              {/* Mobile Social Links */}
              <div className="pt-8 flex justify-center space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-white/80 hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator - Left Side */}
      <div className="fixed left-0 top-0 h-full w-1 bg-white/10 z-40">
        <div
          className="w-full bg-gradient-to-b from-blue-500 to-emerald-500 transition-all duration-300 ease-out"
          style={{
            height: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        ></div>
      </div>
    </>
  );
};

export default Header;
