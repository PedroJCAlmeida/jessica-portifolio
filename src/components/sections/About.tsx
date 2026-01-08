import React from 'react';
import profileImg from '../../assets/profile.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="section-title">Sobre a Jéssica</h2>
            <p className="section-subtitle">
              Especialista Comercial com 12 anos de experiência transformando o setor turístico e hoteleiro
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-bold text-brand-charcoal">
                  Transformando <span className="text-brand-burgundy">experiências</span> em 
                  <span className="text-brand-gold"> resultados comerciais</span>
                </h3>
                
                <p className="text-lg text-neutral-600 leading-relaxed font-serif">
                  Sou a Jéssica Almeida, Mestre em Marketing e Promoção Turística com uma carreira consolidada na hotelaria de luxo. 
                  Minha paixão é unir a <span className="font-semibold text-brand-burgundy">estratégia de vendas</span> com a 
                  <span className="font-semibold text-brand-burgundy"> criatividade do marketing digital</span>.
                </p>
                
                <p className="text-lg text-neutral-600 leading-relaxed font-serif">
                  Com passagens por gigantes como IHG, Iberostar e The Yeatman, desenvolvi uma visão 360º do negócio turístico: 
                  desde a gestão de contas e yield management até a liderança de grandes equipas operacionais.
                </p>

                <div className="bg-white p-8 rounded-xl border-l-4 border-brand-gold shadow-md">
                  <p className="text-lg font-display font-bold text-brand-burgundy mb-2">
                    🎯 Minha Experiência:
                  </p>
                  <p className="text-neutral-600 font-serif italic">
                    Gestão comercial estratégica, CRM (Salesforce), marketing digital para hotelaria, 
                    liderança inspiradora e análise de performance baseada em dados.
                  </p>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-6">
                <h4 className="text-xl font-display font-bold text-brand-charcoal border-b border-neutral-200 pb-2">Jornada Profissional</h4>
                <div className="space-y-4 relative pl-4 border-l border-neutral-200">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-brand-gold rounded-full ring-4 ring-neutral-50"></div>
                    <span className="text-neutral-800 font-sans"><strong>2014-2017:</strong> Hotelbeds - Yield Manager</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-brand-burgundy rounded-full ring-4 ring-neutral-50"></div>
                    <span className="text-neutral-800 font-sans"><strong>2018-2019:</strong> IHG/Iberostar - Analista Comercial</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-brand-purple rounded-full ring-4 ring-neutral-50"></div>
                    <span className="text-neutral-800 font-sans"><strong>2021-2023:</strong> The Yeatman - Supervisora</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-brand-charcoal rounded-full ring-4 ring-neutral-50"></div>
                    <span className="text-neutral-800 font-sans"><strong>2023:</strong> Mestrado Marketing Turístico</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="card-modern p-10 h-full relative z-10 bg-white">
                <div className="text-center mb-8">
                  <div className="w-48 h-48 mx-auto relative group mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-burgundy to-brand-purple rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <img 
                      src={profileImg} 
                      alt="Jéssica Almeida" 
                      className="w-full h-full object-cover rounded-full shadow-xl ring-4 ring-white relative z-10"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mt-6 text-brand-charcoal">Jéssica Almeida</h3>
                  <p className="text-brand-burgundy font-medium uppercase tracking-wide text-sm mt-2">Especialista Comercial Turismo</p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-brand-burgundy/5 transition-colors">
                    <div className="text-2xl font-display font-black text-brand-burgundy">12+</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Anos Hotelaria</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-brand-gold/10 transition-colors">
                    <div className="text-2xl font-display font-black text-brand-gold">37</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Equipa Liderada</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-brand-purple/5 transition-colors">
                    <div className="text-2xl font-display font-black text-brand-purple">9</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Anos Vendas</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-50 rounded-xl hover:bg-brand-charcoal/5 transition-colors">
                    <div className="text-2xl font-display font-black text-brand-charcoal">M2</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Marketing</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Salesforce CRM', 'E-commerce', 'OTA Management', 'Revenue Mgmt', 'Liderança'].map((badge) => (
                    <span key={badge} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-wide rounded-sm border border-neutral-200">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-burgundy/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-20">
            <h3 className="text-3xl font-display font-bold text-center text-brand-charcoal mb-12">
              Áreas de <span className="gradient-text-primary">Especialização</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Gestão de Equipas',
                  desc: 'Liderança de equipas numerosas (27-37 colaboradores) com foco em motivação e resultados.',
                  icon: '👥',
                  gradient: 'from-brand-burgundy to-brand-purple'
                },
                {
                  title: 'Vendas & CRM',
                  desc: 'Gestão comercial estratégica, relacionamento B2B e análise de dados via Salesforce.',
                  icon: '📈',
                  gradient: 'from-brand-gold to-yellow-600'
                },
                {
                  title: 'Marketing Turístico',
                  desc: 'Estratégias digitais, e-commerce e posicionamento de marca para hotéis e OTAs.',
                  icon: '🌍',
                  gradient: 'from-brand-purple to-indigo-600'
                }
              ].map((item) => (
                <div key={item.title} className="card-modern p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-display font-bold text-brand-charcoal mb-4">{item.title}</h4>
                  <p className="text-neutral-600 font-serif leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-brand-charcoal rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-burgundy rounded-full blur-[80px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold rounded-full blur-[80px] opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Vamos elevar o nível dos seus resultados?
                </h3>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-80 font-serif font-light">
                  Se a sua empresa procura excelência em gestão e inovação em marketing turístico.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-gold text-white px-10 py-4 shadow-lg hover:shadow-brand-gold/20"
                >
                  Vamos Conversar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
