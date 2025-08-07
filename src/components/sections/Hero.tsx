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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-element"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full floating-element" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full floating-element" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Headline */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block">Jéssica</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400">
                Almeida
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl">Especialista Comercial</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-300">Turismo & Marketing Digital</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Mestre em Marketing e Promoção Turística • Vendas & Relacionamento • Hotelaria & OTA
              <br />
              <span className="text-yellow-400 font-semibold">12 anos de experiência</span> impulsionando resultados no setor turístico
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={scrollToProjects}
                className="btn-primary text-xl px-10 py-4 w-full sm:w-auto group"
              >
                <span className="flex items-center justify-center">
                  Ver Experiência
                  <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={scrollToContact}
                className="glass-effect text-white font-semibold text-xl px-10 py-4 w-full sm:w-auto hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Entrar em Contacto
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">12+</div>
                <div className="text-gray-300 font-medium">Anos Hotelaria</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-pink-400 mb-2">9</div>
                <div className="text-gray-300 font-medium">Anos Vendas/Marketing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">27-37</div>
                <div className="text-gray-300 font-medium">Equipa Liderada</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">M2</div>
                <div className="text-gray-300 font-medium">Marketing Turístico</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center mb-12">
              <p className="text-gray-300 mb-4">Experiência comprovada em:</p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
                {['The Yeatman Hotel', 'IHG Hotels', 'Iberostar Hotels', 'Hotelbeds', 'Nalua Viagens'].map((company) => (
                  <div key={company} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold text-sm">
                    {company}
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
              <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
                <div className="w-1 h-4 bg-white/70 rounded-full animate-pulse"></div>
              </div>
              <p className="text-white/70 text-sm mt-2">Scroll para descobrir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-white/20 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 border-4 border-yellow-400/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 transform rotate-45 animate-pulse"></div>
    </section>
  );
};

export default Hero;
