import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jessica',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jessica',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/jessica',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zm4.624 7.512c.068 1.528.089 2.001.089 5.875 0 3.874-.021 4.347-.089 5.875-.068 1.528-.343 2.358-.573 2.91-.301.78-.662 1.337-1.242 1.918-.581.58-1.139.941-1.918 1.242-.552.23-1.382.505-2.91.573-1.528.068-2.001.089-5.875.089-3.874 0-4.347-.021-5.875-.089-1.528-.068-2.358-.343-2.91-.573-.78-.301-1.337-.662-1.918-1.242-.58-.581-.941-1.139-1.242-1.918-.23-.552-.505-1.382-.573-2.91-.068-1.528-.089-2.001-.089-5.875 0-3.874.021-4.347.089-5.875.068-1.528.343-2.358.573-2.91.301-.78.662-1.337 1.242-1.918.581-.58 1.139-.941 1.918-1.242.552-.23 1.382-.505 2.91-.573 1.528-.068 2.001-.089 5.875-.089 3.874 0 4.347.021 5.875.089 1.528.068 2.358.343 2.91.573.78.301 1.337.662 1.918 1.242.58.581.941 1.139 1.242 1.918.23.552.505 1.382.573 2.91z"/>
          <circle cx="12.017" cy="12.017" r="3.624"/>
          <circle cx="18.052" cy="5.98" r="1.144"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jessica',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand/About */}
            <div className="md:col-span-2">
              <div 
                className="text-2xl font-bold text-primary-400 mb-4 cursor-pointer"
                onClick={scrollToTop}
              >
                Jessica
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Desenvolvedora Frontend apaixonada por criar experiências digitais únicas. 
                Especializando-se em React, TypeScript e design responsivo para transformar 
                ideias em realidade.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:jessica@exemplo.com" className="hover:text-primary-400 transition-colors duration-200">
                    jessica@exemplo.com
                  </a>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>São Paulo, Brasil</span>
                </div>

                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-400 text-sm">Disponível para projetos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter/CTA Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Interessado em colaborar?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estou sempre aberta a discutir novos projetos, oportunidades criativas ou parcerias.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-3"
            >
              Vamos Conversar
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Jessica. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Feito com ❤️ e React</span>
              <button
                onClick={scrollToTop}
                className="flex items-center hover:text-primary-400 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Voltar ao topo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 z-40"
          aria-label="Voltar ao topo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
