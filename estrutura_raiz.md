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
├── .cursorrules          # Regras do cursor
├── .cursorignore        # Arquivos ignorados pelo cursor
├── .gitignore           # Arquivos ignorados pelo Git
├── eslint.config.mjs    # Configuração do ESLint
├── next.config.js       # Configuração principal do Next.js
├── next.config.ts       # Tipos da configuração do Next.js
├── next-env.d.ts        # Declarações de tipos do Next.js
├── package.json         # Manifesto do projeto
├── package-lock.json    # Versões exatas das dependências
├── postcss.config.mjs   # Configuração do PostCSS
├── README.md           # Documentação principal
├── tailwind.config.ts  # Configuração do Tailwind CSS
└── tsconfig.json       # Configuração do TypeScript
```

## Explicação dos Arquivos

### Configuração do Projeto

- `package.json`: Manifesto do projeto e suas dependências
- `package-lock.json`: Versões exatas das dependências
- `tsconfig.json`: Configuração do TypeScript
- `README.md`: Documentação do projeto

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

## Observações

- Todos estes arquivos devem permanecer na raiz do projeto
- Não mover para subpastas para manter compatibilidade
- Código fonte da aplicação deve ficar em `src/`
- Assets estáticos devem ficar em `public/`
