import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ricardo Silva",
      role: "Diretor Geral",
      company: "The Yeatman Hotel",
      content: "A Jéssica demonstrou uma capacidade excecional de liderança durante o seu tempo connosco. A sua gestão da equipa operacional resultou num aumento mensurável na satisfação dos hóspedes e na eficiência dos processos.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Ana Martins",
      role: "Diretora Comercial",
      company: "IHG Hotels & Resorts",
      content: "Uma profissional orientada para dados e resultados. A Jéssica transformou a nossa abordagem de análise comercial, implementando relatórios no Salesforce que nos permitiram identificar novas oportunidades de receita.",
      image: "https://images.unsplash.com/photo-1573496359-136d47552600?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Carlos Mendes",
      role: "Head of Sales",
      company: "Hotelbeds",
      content: "Trabalhar com a Jéssica foi um privilégio. A sua habilidade em negociação e gestão de yield management é de alto nível. Ela compreende profundamente a dinâmica entre a hotelaria e a distribuição online.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-burgundy/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[400px] font-serif text-white/5 opacity-50 select-none leading-none">
          "
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            O que dizem sobre mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-burgundy to-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[400px] md:min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Image */}
                  <div className="relative shrink-0">
                    <div className="w-32 h-32 rounded-full border-4 border-brand-burgundy/30 p-1">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-brand-gold text-brand-charcoal p-2 rounded-full shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="text-center md:text-left">
                    <p className="font-serif text-xl md:text-2xl text-neutral-300 italic mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-display font-bold text-xl text-white mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="font-sans text-brand-gold uppercase tracking-widest text-sm font-semibold">
                        {testimonial.role} <span className="text-neutral-500 mx-2">•</span> {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-12 bg-brand-gold' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
