import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho, pagamentos e dashboard administrativo.',
      longDescription: 'Uma aplicação full-stack desenvolvida com React e Node.js, incluindo autenticação, processamento de pagamentos via Stripe, sistema de inventário e painel administrativo completo.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/jessica/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com interface intuitiva e recursos avançados.',
      longDescription: 'Sistema de produtividade com funcionalidades como arrastar e soltar, colaboração em tempo real, notificações push e integração com calendário.',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/jessica/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico com previsões detalhadas e mapas interativos.',
      longDescription: 'Aplicação que consome APIs meteorológicas para fornecer previsões precisas, com visualizações gráficas, mapas interativos e alertas personalizados.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Leaflet'],
      imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/jessica/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Dashboard para gerenciamento de múltiplas redes sociais em uma única interface.',
      longDescription: 'Ferramenta para marketers e influenciadores gerenciarem múltiplas contas de redes sociais, com analytics detalhados e agendamento de posts.',
      technologies: ['Vue.js', 'Nuxt.js', 'TailwindCSS', 'Express.js'],
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/jessica/social-dashboard',
      liveUrl: 'https://social-dashboard-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Website portfolio responsivo com animações modernas e design clean.',
      longDescription: 'Portfolio pessoal desenvolvido com as mais modernas tecnologias, incluindo animações fluidas, otimização para SEO e performance excepcional.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/jessica/portfolio',
      liveUrl: 'https://jessica-portfolio.com',
      featured: false
    },
    {
      id: 6,
      title: 'Crypto Tracker',
      description: 'Aplicativo para acompanhar preços e tendências de criptomoedas em tempo real.',
      longDescription: 'Aplicação que fornece dados em tempo real sobre criptomoedas, com gráficos interativos, alertas de preço e portfolio tracker para investidores.',
      technologies: ['React', 'Redux Toolkit', 'WebSocket', 'Recharts'],
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/jessica/crypto-tracker',
      liveUrl: 'https://crypto-tracker-demo.com',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ 
    project, 
    featured = false 
  }) => (
    <div className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <a 
              href={project.githubUrl}
              className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg text-center font-medium hover:bg-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href={project.liveUrl}
              className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {featured ? project.longDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <a 
            href={project.githubUrl}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href={project.liveUrl}
            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Projetos</h2>
            <p className="section-subtitle">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Projetos em Destaque</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    featured={true}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Outros Projetos</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interessado em colaborar?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Estou sempre aberta a novos desafios e oportunidades de trabalhar 
                em projetos interessantes. Vamos conversar!
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary text-lg px-8 py-3"
              >
                Entrar em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
