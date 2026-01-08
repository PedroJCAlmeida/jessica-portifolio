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
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Expertise' },
    { id: 'projects', label: 'Carreira' },
    { id: 'contact', label: 'Contato' }
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
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <span className={`text-2xl font-display font-bold transition-colors duration-300 ${
              isScrolled ? 'text-brand-charcoal' : 'text-white'
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
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-brand-charcoal' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 w-full transition-colors ${isScrolled ? 'bg-current' : 'bg-white'}`}></span>
              <span className={`h-0.5 w-2/3 transition-colors ${isScrolled ? 'bg-current' : 'bg-white'}`}></span>
              <span className={`h-0.5 w-full transition-colors ${isScrolled ? 'bg-current' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-lg font-serif text-brand-charcoal hover:text-brand-burgundy transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-brand-burgundy text-white font-sans font-bold py-4 rounded-lg hover:bg-brand-charcoal transition-colors"
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