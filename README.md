# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🌟 Portfólio da Jessica

Um portfólio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS.

## ✨ Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Construído com Vite para carregamento rápido
- **Animações Fluidas**: Transições suaves e efeitos visuais atraentes
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade web

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Estilização**: Tailwind CSS
- **Build Tool**: Vite
- **Linting**: ESLint
- **Fontes**: Google Fonts (Inter)

## 📋 Seções do Portfólio

- **🏠 Home**: Introdução e apresentação inicial
- **👤 Sobre**: Informações pessoais e profissionais
- **🚀 Habilidades**: Tecnologias e ferramentas dominadas
- **💼 Projetos**: Showcase dos trabalhos realizados
- **📬 Contato**: Formulário de contato e informações

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16+)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/jessica-portifolio.git
cd jessica-portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── sections/
│   │   ├── Header.tsx      # Navegação principal
│   │   ├── Hero.tsx        # Seção inicial
│   │   ├── About.tsx       # Sobre mim
│   │   ├── Skills.tsx      # Habilidades técnicas
│   │   ├── Projects.tsx    # Portfolio de projetos
│   │   ├── Contact.tsx     # Formulário de contato
│   │   └── Footer.tsx      # Rodapé
│   └── ui/                 # Componentes reutilizáveis
├── assets/                 # Imagens e recursos
├── App.tsx                 # Componente principal
├── main.tsx               # Ponto de entrada
└── index.css              # Estilos globais
```

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: { /* suas cores primárias */ },
      secondary: { /* suas cores secundárias */ }
    }
  }
}
```

### Conteúdo
Para personalizar o conteúdo, edite os arquivos de componentes em `src/components/sections/`.

## 📱 Responsividade

O portfólio é totalmente responsivo e foi testado em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## ⚡ Performance

- Lazy loading de imagens
- Otimização de bundle com Vite
- CSS purging automático com Tailwind
- Compressão de assets

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Jessica - [jessica@exemplo.com](mailto:jessica@exemplo.com)

Link do Projeto: [https://github.com/seu-usuario/jessica-portifolio](https://github.com/seu-usuario/jessica-portifolio)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
