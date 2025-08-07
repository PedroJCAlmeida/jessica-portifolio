import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="section-title">Sobre a Jéssica</h2>
            <p className="section-subtitle">
              Especialista Comercial com 12 anos de experiência no setor turístico e hoteleiro
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Transformando <span className="text-blue-500">experiências</span> em 
                  <span className="text-purple-500"> resultados comerciais</span>
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sou a Jéssica Almeida, Mestre em Marketing e Promoção Turística com mais de 12 anos 
                  de experiência na hotelaria. Especializo-me em vendas, marketing digital e gestão 
                  de equipas, tendo trabalhado em redes internacionais como IHG, Iberostar e The Yeatman Hotel.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Meu percurso inclui <strong>9 anos focados em vendas e marketing digital</strong>, 
                  gestão de contas de operadoras, análise de mercado e liderança de equipas. 
                  Atualmente busco uma nova oportunidade numa empresa onde possa aplicar toda esta experiência.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    🎯 Minha Experiência:
                  </p>
                  <p className="text-gray-700">
                    Gestão comercial, CRM (Salesforce), marketing digital para hotelaria, 
                    liderança de equipas e análise de performance comercial.
                  </p>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">Jornada Profissional</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>2014-2017:</strong> Hotelbeds - Yield Manager</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>2018-2019:</strong> IHG/Iberostar - Analista Comercial</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>2021-2023:</strong> The Yeatman - Supervisora</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>2023:</strong> Mestrado Marketing Turístico</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="card-modern p-8 h-full">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl glow-effect">
                    J
                  </div>
                  <h3 className="text-2xl font-bold mt-6 text-gray-900">Jéssica Almeida</h3>
                  <p className="text-blue-600 font-semibold">Especialista Comercial Turismo</p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-black text-blue-600">12+</div>
                    <div className="text-sm text-gray-600">Anos Hotelaria</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-black text-green-600">27-37</div>
                    <div className="text-sm text-gray-600">Equipa Liderada</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-black text-purple-600">9</div>
                    <div className="text-sm text-gray-600">Anos Vendas</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-xl">
                    <div className="text-2xl font-black text-yellow-600">M2</div>
                    <div className="text-sm text-gray-600">Marketing Turístico</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    Salesforce CRM
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    E-commerce
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                    OTA Management
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 text-sm font-medium rounded-full">
                    Revenue Mgmt
                  </span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-20 floating-element"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-500 rounded-full opacity-20 floating-element"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-purple-400 rounded-full opacity-30 floating-element"></div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Áreas de <span className="text-gradient">Especialização</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-modern p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Gestão de Equipas</h4>
                <p className="text-gray-600">
                  Liderança de equipas de 27-37 colaboradores com foco em resultados e desenvolvimento
                </p>
              </div>

              <div className="card-modern p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Vendas & CRM</h4>
                <p className="text-gray-600">
                  Gestão comercial, relacionamento com clientes e análise de performance via Salesforce
                </p>
              </div>

              <div className="card-modern p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Marketing Turístico</h4>
                <p className="text-gray-600">
                  Marketing digital, e-commerce e promoções para o setor hoteleiro e OTAs
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="marketing-gradient rounded-2xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Vamos trabalhar juntos?
              </h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Se a sua empresa procura uma profissional experiente em vendas, marketing turístico 
                e gestão de equipas, adoraria conversar sobre as oportunidades disponíveis.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-purple-600 font-bold text-xl px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-xl"
              >
                Vamos Conversar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
