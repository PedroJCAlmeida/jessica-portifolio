import React from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Gestão e Liderança
    { name: 'Gestão de Equipas', level: 95, icon: '👥', category: 'Gestão & Liderança' },
    { name: 'Supervisão Operacional', level: 90, icon: '🎯', category: 'Gestão & Liderança' },
    { name: 'Formação e Desenvolvimento', level: 85, icon: '📚', category: 'Gestão & Liderança' },
    { name: 'Análise de Performance', level: 90, icon: '📈', category: 'Gestão & Liderança' },
    
    // Vendas e Comercial
    { name: 'Gestão de Contas', level: 95, icon: '🤝', category: 'Vendas & Comercial' },
    { name: 'Relacionamento Cliente', level: 95, icon: '⭐', category: 'Vendas & Comercial' },
    { name: 'Negociação Comercial', level: 90, icon: '💰', category: 'Vendas & Comercial' },
    { name: 'Análise de Mercado', level: 85, icon: '🔍', category: 'Vendas & Comercial' },
    
    // Marketing Digital
    { name: 'Marketing Digital', level: 90, icon: '📱', category: 'Marketing Digital' },
    { name: 'Gestão de Redes Sociais', level: 85, icon: '🌐', category: 'Marketing Digital' },
    { name: 'E-commerce', level: 85, icon: '🛒', category: 'Marketing Digital' },
    { name: 'Copywriting', level: 80, icon: '✍️', category: 'Marketing Digital' },
    
    // Ferramentas Técnicas
    { name: 'Salesforce CRM', level: 90, icon: '☁️', category: 'Ferramentas Técnicas' },
    { name: 'Microsoft Office', level: 95, icon: '💻', category: 'Ferramentas Técnicas' },
    { name: 'WordPress', level: 70, icon: '📝', category: 'Ferramentas Técnicas' },
    { name: 'Google Analytics', level: 80, icon: '📊', category: 'Ferramentas Técnicas' }
  ];

  const categories = ['Gestão & Liderança', 'Vendas & Comercial', 'Marketing Digital', 'Ferramentas Técnicas'];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-3 opacity-80 grayscale group-hover:grayscale-0 transition-all">{skill.icon}</span>
          <span className="font-display font-medium text-brand-charcoal">{skill.name}</span>
        </div>
        <span className="text-sm font-sans font-bold text-brand-gold">{skill.level}%</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-brand-burgundy to-brand-gold h-2 rounded-full transition-all duration-1000 ease-out shadow-sm"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Competências</h2>
            <p className="section-subtitle">
              Habilidades refinadas ao longo de uma carreira dedicada à excelência
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {categories.map(category => (
              <div key={category} className="card-modern p-10 group bg-neutral-50 border border-neutral-100 hover:border-brand-gold/30">
                <h3 className="text-2xl font-display font-bold text-brand-burgundy mb-8 pb-4 border-b border-neutral-200">
                  {category}
                </h3>
                {getSkillsByCategory(category).map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="bg-brand-burgundy/5 rounded-3xl p-12 border border-brand-burgundy/10">
              <h3 className="text-2xl font-display font-bold text-brand-charcoal mb-6">Formação Contínua</h3>
              <p className="text-lg text-neutral-600 mb-10 max-w-3xl mx-auto font-serif">
                Acredito na aprendizagem constante. Além do mestrado, mantenho-me atualizada com as ferramentas e metodologias mais recentes do mercado.
              </p>
              
              {/* Recent Certifications */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Automação Marketing Omnicanal',
                  'Ferramentas Google',
                  'Gestão Redes Sociais',
                  'Fidelização Clientes',
                  'UX & Design Thinking'
                ].map((cert) => (
                  <span 
                    key={cert}
                    className="px-6 py-3 bg-white text-brand-charcoal rounded-full font-sans font-medium hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-sm border border-neutral-200 cursor-default"
                  >
                    🎓 {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications/Achievements Cards */}
          <div className="mt-20">
            <h3 className="text-2xl font-display font-bold text-center text-brand-charcoal mb-12">Reconhecimento</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🎓', title: 'Mestrado', subtitle: 'Marketing e Promoção Turística (ESHT)' },
                { icon: '💼', title: 'Liderança', subtitle: 'Gestão de equipas de grande dimensão' },
                { icon: '🌍', title: 'Hospitalidade', subtitle: 'Experiência em redes de luxo' },
              ].map((achievement, idx) => (
                <div key={idx} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-neutral-50 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl group-hover:bg-brand-burgundy group-hover:text-white transition-colors duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-display font-bold text-brand-charcoal mb-2">{achievement.title}</h4>
                  <p className="text-neutral-500 font-serif text-sm">{achievement.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
