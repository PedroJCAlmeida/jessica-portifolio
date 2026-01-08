import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'jessicansalmeida2@gmail.com',
      link: 'mailto:jessicansalmeida2@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.91 0-3.79-.459-5.464-1.335l-6.533 1.543zm6.086-3.846l.44.26c1.32.782 2.846 1.196 4.412 1.196 4.793 0 8.691-3.898 8.693-8.691.001-2.323-.902-4.507-2.545-6.151s-3.828-2.547-6.152-2.547c-4.794 0-8.691 3.898-8.693 8.691-.001 1.638.463 3.238 1.341 4.64l.285.457-1.008 3.68 3.777-.892zm9.13-5.28c-.265-.133-1.567-.773-1.81-.861-.243-.088-.42-.133-.596.133-.176.265-.685.862-.839 1.039-.154.177-.308.2-.573.067-.265-.133-1.119-.412-2.13-1.316-.788-.702-1.32-1.569-1.474-1.834-.154-.265-.016-.409.117-.541.12-.119.265-.31.397-.465.133-.155.177-.266.265-.443.088-.177.044-.332-.022-.465-.066-.133-.596-1.438-.816-1.97-.215-.518-.432-.447-.597-.456-.155-.008-.331-.01-.507-.01-.176 0-.464.066-.706.332-.243.265-.927.907-.927 2.213s.95 2.567 1.083 2.744c.133.177 1.87 2.854 4.529 4.001.633.273 1.125.435 1.509.558.635.202 1.213.174 1.67.106.51-.077 1.568-.641 1.789-1.26.221-.619.221-1.151.154-1.26-.067-.109-.243-.177-.508-.31z"/>
          </svg>
      ),
      title: 'WhatsApp',
      value: '+351 911 837 844',
      link: 'https://wa.me/351911837844'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telemóvel',
      value: '+351 911 837 844',
      link: 'tel:+351911837844'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jessicansalmeida/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/jessicansalmeida',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jessicansalmeida/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-100">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Contacto</h2>
            <p className="section-subtitle">
              Disponível para discutir novas oportunidades e colaborações estratégicas no setor turístico
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-neutral-100">
              <h3 className="text-2xl font-display font-bold text-brand-charcoal mb-8">Enviar Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sans font-bold text-neutral-600 mb-2 uppercase tracking-wide">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition-all duration-200 bg-neutral-50 font-serif"
                      placeholder="Jéssica Almeida"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans font-bold text-neutral-600 mb-2 uppercase tracking-wide">
                      Email de Contacto *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition-all duration-200 bg-neutral-50 font-serif"
                      placeholder="exemplo@mail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-sans font-bold text-neutral-600 mb-2 uppercase tracking-wide">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition-all duration-200 bg-neutral-50 font-serif"
                    placeholder="Oportunidade de Colaboração / Recrutamento"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-sans font-bold text-neutral-600 mb-2 uppercase tracking-wide">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-burgundy focus:border-transparent transition-all duration-200 bg-neutral-50 font-serif resize-none"
                    placeholder="Como posso ajudar a sua empresa a atingir novos resultados?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-sans font-bold text-lg transition-all duration-300 shadow-md ${
                    isSubmitting
                      ? 'bg-neutral-400 cursor-not-allowed'
                      : 'bg-brand-burgundy text-white hover:bg-brand-charcoal transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? 'A Enviar...' : 'Enviar Proposta'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 animate-fade-in font-serif">
                    ✅ Mensagem enviada! Entrarei em contacto o mais breve possível.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information & More */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-neutral-100">
                <h3 className="text-2xl font-display font-bold text-brand-charcoal mb-8">Canais Diretos</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? "_blank" : "_self"}
                      rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                      className="flex items-center p-4 rounded-xl hover:bg-brand-burgundy/5 transition-all duration-300 group border border-transparent hover:border-brand-burgundy/20"
                    >
                      <div className="w-12 h-12 bg-brand-burgundy/10 rounded-full flex items-center justify-center text-brand-burgundy group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div className="ml-6">
                        <h4 className="font-display font-bold text-brand-charcoal text-lg">{info.title}</h4>
                        <p className="text-neutral-600 font-serif">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 pt-10 border-t border-neutral-100">
                  <h4 className="text-sm font-sans font-bold text-neutral-400 uppercase tracking-widest mb-6">Redes Sociais</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 bg-neutral-50 rounded-lg text-brand-charcoal hover:bg-brand-burgundy hover:text-white transition-all duration-300 font-sans font-semibold border border-neutral-200 hover:border-brand-burgundy"
                      >
                        {social.icon}
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Card */}
              <div className="bg-brand-charcoal rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl group">
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <span className="relative flex h-3 w-3 mr-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <h3 className="text-xl font-display font-bold tracking-wide">Estado Atual</h3>
                  </div>
                  <p className="text-neutral-300 text-lg font-serif leading-relaxed">
                    Em busca ativa de novos desafios profissionais na área comercial e marketing turístico.
                  </p>
                </div>
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;