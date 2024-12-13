# Estrutura do Projeto

## Diretórios Principais

```plaintext
.
├── .next/                  # Build do Next.js (ignorado no git)
├── node_modules/          # Dependências (ignorado no git)
├── public/                # Assets estáticos
│   └── manifest.json     # Configuração PWA
└── src/                   # Código fonte da aplicação
    ├── app/              # App Router do Next.js 13+
    │   ├── globals.css   # Estilos globais
    │   ├── layout.tsx    # Layout principal
    │   ├── page.tsx      # Página inicial
    │   ├── plano/        # Rota /plano
    │   │   └── page.tsx  # Página do plano
    │   ├── icons.tsx     # Ícones da aplicação
    │   └── providers.tsx # Providers da aplicação
    ├── components/       # Componentes reutilizáveis
    │   └── ui/          # Componentes de UI
    │       └── Button.tsx # Componente botão
    ├── hooks/           # Hooks customizados
    │   └── useLocalStorage.ts # Hook para localStorage
    ├── lib/             # Bibliotecas e utilitários
    │   └── constants/   # Constantes da aplicação
    │       └── config.ts # Configurações
    └── types/           # Definições de tipos
        └── index.ts     # Tipos globais
```

## Arquivos de Configuração

```plaintext
.
├── .github/workflows/     # Configurações do GitHub Actions
│   └── check-deps.yml    # Verificação de dependências
├── .npmrc                # Configuração do NPM
├── .nvmrc               # Versão do Node.js (NVM)
├── .yarnrc.yml          # Configuração do Yarn
├── CHANGELOG.md         # Registro de alterações
├── package.json         # Manifesto do projeto
├── public/manifest.json # Configuração PWA
├── README.md           # Documentação principal
└── tsconfig.json       # Configuração do TypeScript
```

## Explicação dos Arquivos

### Configuração do Projeto

- `.github/workflows/check-deps.yml`: Workflow para verificação de dependências
- `.npmrc`: Configurações específicas do NPM
- `.nvmrc`: Especifica a versão do Node.js para o projeto
- `.yarnrc.yml`: Configurações específicas do Yarn
- `CHANGELOG.md`: Histórico de mudanças do projeto
- `package.json`: Manifesto do projeto e suas dependências
- `public/manifest.json`: Configuração do PWA (Progressive Web App)
- `README.md`: Documentação do projeto
- `tsconfig.json`: Configuração do TypeScript

### Next.js

- `next.config.js`: Configuração do Next.js
- `next.config.ts`: Tipos para configuração do Next.js
- `next-env.d.ts`: Tipos globais do Next.js

### Estilização

- `postcss.config.mjs`: Configuração do PostCSS
- `tailwind.config.ts`: Configuração do Tailwind CSS

### Linting e Formatação

- `eslint.config.mjs`: Regras de linting
- `.cursorrules`: Configuração do cursor
- `.cursorignore`: Arquivos ignorados pelo cursor

### Controle de Versão

- `.gitignore`: Arquivos e pastas ignorados pelo Git

#### Arquivos e Pastas Ignorados

- `temp-setup/`: Arquivos temporários de configuração
- `node_modules/`: Dependências do projeto
- `.next/`: Build do Next.js
- `.env`: Variáveis de ambiente
- `*.log`: Arquivos de log
- `.DS_Store`: Arquivos do sistema macOS

### GitHub e Controle de Versão

- `.github/workflows/`: Configurações de CI/CD do GitHub Actions
- `.npmrc`: Configurações específicas do NPM
- `.nvmrc`: Especifica a versão do Node.js para o projeto
- `.yarnrc.yml`: Configurações específicas do Yarn
- `CHANGELOG.md`: Histórico de mudanças do projeto

## Observações

- Todos estes arquivos devem permanecer na raiz do projeto
- Não mover para subpastas para manter compatibilidade
- Código fonte da aplicação deve ficar em `src/`
- Assets estáticos devem ficar em `public/`
