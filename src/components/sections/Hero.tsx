import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-charcoal">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-premium opacity-90"></div>
        {/* Elegant Orbs */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-burgundy/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Headline */}
          <div className="animate-slide-up">
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-tight">
              <span className="block text-neutral-100">Jéssica</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-cream to-brand-gold bg-[200%_auto] animate-glow">
                Almeida
              </span>
            </h1>
            
            <div className="flex flex-col items-center justify-center space-y-4 mb-8">
              <span className="h-1 w-24 bg-brand-burgundy rounded-full"></span>
              <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-neutral-300 italic">
                Especialista Comercial & Marketing Turístico
              </span>
            </div>
            
            <p className="font-body text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Combinando a hospitalidade de luxo com estratégias digitais de alto impacto.
              <br className="hidden md:block" />
              <span className="text-brand-gold font-medium">12 anos de excelência</span> em hotelaria, vendas e gestão de equipas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={scrollToProjects}
                className="btn-gold group min-w-[200px]"
              >
                <span className="flex items-center justify-center">
                  Ver Experiência
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 rounded-lg border border-neutral-600 text-neutral-300 font-sans font-semibold hover:bg-white/5 hover:text-white hover:border-white transition-all duration-300 min-w-[200px]"
              >
                Entrar em Contacto
              </button>
            </div>

            {/* Premium Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-white/10 pt-12">
              <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-brand-gold mb-2">12+</div>
                <div className="text-neutral-400 font-serif text-sm tracking-widest uppercase">Anos Hotelaria</div>
              </div>
              <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-brand-burgundy mb-2">9</div>
                <div className="text-neutral-400 font-serif text-sm tracking-widest uppercase">Anos Vendas</div>
              </div>
              <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">37</div>
                <div className="text-neutral-400 font-serif text-sm tracking-widest uppercase">Equipa Liderada</div>
              </div>
              <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-display font-bold text-brand-purple mb-2">M2</div>
                <div className="text-neutral-400 font-serif text-sm tracking-widest uppercase">Marketing</div>
              </div>
            </div>

            {/* Social Proof logos (Styled as text for elegance) */}
            <div className="text-center">
              <p className="text-neutral-500 mb-6 text-sm uppercase tracking-widest">Experiência em marcas de prestígio</p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                {['The Yeatman', 'IHG Hotels', 'Iberostar', 'Hotelbeds', 'Nalua Viagens'].map((company) => (
                  <span key={company} className="text-neutral-300 font-display font-semibold text-lg tracking-wide border-b border-transparent hover:border-brand-gold transition-all cursor-default">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;