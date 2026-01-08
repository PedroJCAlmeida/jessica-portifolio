import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Compensate for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Expertise' },
    { id: 'projects', label: 'Carreira' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group z-50 relative"
            onClick={() => scrollToSection('hero')}
          >
            <span className={`text-2xl font-display font-bold transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? 'text-brand-charcoal' : 'text-white'
            }`}>
              Jéssica
              <span className={`text-brand-gold ml-1 text-3xl transition-transform duration-300 group-hover:-translate-y-1 inline-block`}>.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-sans font-medium uppercase tracking-widest transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-neutral-600 hover:text-brand-burgundy' 
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-burgundy' : 'bg-brand-gold'
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-sans font-semibold text-sm px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                isScrolled
                  ? 'bg-brand-burgundy text-white hover:bg-brand-charcoal hover:shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
              }`}
            >
              Falar Comigo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 z-50 relative focus:outline-none transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? 'text-brand-charcoal' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-display font-bold text-brand-charcoal hover:text-brand-burgundy transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
            
            <div 
              className={`pt-8 w-full max-w-xs transition-all duration-500 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-brand-burgundy text-white font-sans font-bold py-4 rounded-xl shadow-lg hover:bg-brand-charcoal transition-colors"
              >
                Falar Comigo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
