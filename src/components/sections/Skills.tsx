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
    { name: 'Análise de Performance', level: 90, icon: '�', category: 'Gestão & Liderança' },
    
    // Vendas e Comercial
    { name: 'Gestão de Contas', level: 95, icon: '🤝', category: 'Vendas & Comercial' },
    { name: 'Relacionamento Cliente', level: 95, icon: '�', category: 'Vendas & Comercial' },
    { name: 'Negociação Comercial', level: 90, icon: '�', category: 'Vendas & Comercial' },
    { name: 'Análise de Mercado', level: 85, icon: '🔍', category: 'Vendas & Comercial' },
    
    // Marketing Digital
    { name: 'Marketing Digital', level: 90, icon: '�', category: 'Marketing Digital' },
    { name: 'Gestão de Redes Sociais', level: 85, icon: '�', category: 'Marketing Digital' },
    { name: 'E-commerce', level: 85, icon: '�', category: 'Marketing Digital' },
    { name: 'Copywriting', level: 80, icon: '✍️', category: 'Marketing Digital' },
    
    // Ferramentas Técnicas
    { name: 'Salesforce CRM', level: 90, icon: '☁️', category: 'Ferramentas Técnicas' },
    { name: 'Microsoft Office', level: 95, icon: '💻', category: 'Ferramentas Técnicas' },
    { name: 'WordPress', level: 70, icon: '🌐', category: 'Ferramentas Técnicas' },
    { name: 'Google Analytics', level: 80, icon: '�', category: 'Ferramentas Técnicas' }
  ];

  const categories = ['Gestão & Liderança', 'Vendas & Comercial', 'Marketing Digital', 'Ferramentas Técnicas'];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{skill.icon}</span>
          <span className="font-medium text-gray-900">{skill.name}</span>
        </div>
        <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Competências</h2>
            <p className="section-subtitle">
              Habilidades desenvolvidas ao longo de 12 anos de experiência no setor turístico
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {categories.map(category => (
              <div key={category} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  {category}
                </h3>
                {getSkillsByCategory(category).map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formação Contínua</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Mantenho-me sempre atualizada através de formações especializadas. 
                Recentemente completei cursos em automação de marketing digital, 
                ferramentas Google e técnicas avançadas de comunicação digital.
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
                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-gray-700 rounded-full font-medium hover:from-primary-200 hover:to-secondary-200 transition-colors duration-200"
                  >
                    🎓 {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications/Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Conquistas</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  🏆
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">React Specialist</h4>
                <p className="text-gray-600">Certificação avançada em React Development</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  💡
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation Award</h4>
                <p className="text-gray-600">Reconhecimento por soluções criativas</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  🌟
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Open Source</h4>
                <p className="text-gray-600">Contribuições ativas para projetos open source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
