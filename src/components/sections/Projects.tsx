import React from 'react';

interface Project {
  id: number;
  title: string;
  company: string;
  description: string;
  longDescription: string;
  skills: string[];
  imageUrl: string;
  period: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Supervisão Operacional & Liderança',
      company: 'The Yeatman Hotel',
      description: 'Liderança de equipas numerosas (27-37 colaboradores) num dos hotéis mais prestigiados de Portugal.',
      longDescription: 'Responsável pela supervisão operacional e gestão de equipas, garantindo os mais altos padrões de serviço e hospitalidade. Foco em otimização de processos e desenvolvimento de talentos.',
      skills: ['Liderança', 'Hospitalidade de Luxo', 'Gestão de Equipas', 'KPIs'],
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      period: '2021 - 2023',
      featured: true
    },
    {
      id: 2,
      title: 'Análise Comercial & Marketing',
      company: 'IHG / Iberostar',
      description: 'Análise detalhada de performance comercial e suporte a estratégias de marketing hoteleiro.',
      longDescription: 'Atuação como Analista Comercial, utilizando dados para identificar oportunidades de crescimento, gerir parcerias e otimizar a presença digital das marcas no mercado.',
      skills: ['Salesforce', 'Análise de Dados', 'Revenue Management', 'E-commerce'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      period: '2018 - 2019',
      featured: true
    },
    {
      id: 3,
      title: 'Yield Management & Parcerias',
      company: 'Hotelbeds',
      description: 'Gestão de contas e otimização de inventário (Yield Management) para um dos maiores bancos de camas do mundo.',
      longDescription: 'Foco na gestão de relacionamento com hotéis parceiros, negociação de tarifas e estratégias de disponibilidade para maximizar o volume de vendas e rentabilidade.',
      skills: ['Yield Management', 'Negociação', 'OTA Management', 'B2B Sales'],
      imageUrl: 'https://images.unsplash.com/photo-1454165833767-02302321456c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      period: '2014 - 2017',
      featured: false
    },
    {
      id: 4,
      title: 'Estratégia de Marketing Turístico',
      company: 'Mestrado ESHT',
      description: 'Desenvolvimento de estratégias modernas para a promoção de destinos e produtos turísticos.',
      longDescription: 'Projeto final de mestrado focado em tendências atuais de marketing digital aplicadas ao turismo, integrando automação, CRM e análise de comportamento do consumidor.',
      skills: ['Marketing Digital', 'Planeamento Estratégico', 'Investigação', 'Promoção'],
      imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      period: '2023',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ 
    project, 
    featured = false 
  }) => (
    <div className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 ${
      featured ? 'lg:col-span-1' : ''
    }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden h-72">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
        <div className="absolute bottom-6 left-8 right-8">
          <span className="bg-brand-gold text-white text-xs font-bold font-sans uppercase tracking-widest px-3 py-1 mb-3 inline-block shadow-sm">
            {project.period}
          </span>
          <h3 className="text-2xl font-display font-bold text-white mb-1 drop-shadow-md">
            {project.company}
          </h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        <h4 className="text-xl font-display font-bold text-brand-charcoal mb-4 group-hover:text-brand-burgundy transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-neutral-600 mb-6 leading-relaxed font-serif">
          {featured ? project.longDescription : project.description}
        </p>

        {/* Technologies/Skills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.skills.map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-neutral-50 text-neutral-600 text-xs font-bold uppercase tracking-wide rounded border border-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-neutral-100">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center text-brand-burgundy font-bold font-sans text-sm tracking-wide uppercase hover:text-brand-gold transition-colors group/btn"
          >
            Saber mais
            <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-neutral-50 relative">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="section-title">Percurso & Impacto</h2>
            <p className="section-subtitle">
              Destaques de uma trajetória profissional construída em marcas de excelência
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                featured={true}
              />
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {otherProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <div className="bg-brand-burgundy rounded-2xl p-14 text-white shadow-2xl relative overflow-hidden group hover:shadow-brand-burgundy/30 transition-shadow">
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-6">
                  Pronta para novos desafios estratégicos
                </h3>
                <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 font-serif font-light">
                  A minha experiência combina a visão operacional da hotelaria de luxo com a 
                  agilidade do marketing digital e a precisão da gestão comercial.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-white text-brand-burgundy font-sans font-bold text-lg px-12 py-4 rounded shadow-lg hover:bg-brand-gold hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  Solicitar Currículo Completo
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/15 transition-colors"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
