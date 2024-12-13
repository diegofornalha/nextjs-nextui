# Meu Projeto Next.js

## Requisitos

- Node.js >= 18.0.0
- Yarn >= 4.0.0

## Dependências Principais

### Core

- next: 14.0.4
- react: 18.2.0
- react-dom: 18.2.0

### UI Framework

- @nextui-org/react: 2.2.9
- @nextui-org/system: 2.0.15
- @nextui-org/theme: 2.1.17
- framer-motion: 10.18.0

## Instalação

```bash
# Instalar dependências
yarn install

# Iniciar em desenvolvimento
yarn dev

# Build de produção
yarn build

# Iniciar em produção
yarn start
```

## Gerenciamento de Dependências

### Verificação de Dependências

```bash
# Verificar dependências desatualizadas
yarn update-check

# Atualizar de forma segura
yarn update-safe

# Verificar vulnerabilidades
yarn audit
```

### Processo de Atualização

1. Criar branch de atualização:

```bash
git checkout -b update/dependencies-YYYY-MM
```

2. Verificar e atualizar dependências:

```bash
yarn update-check
yarn update-safe
```

3. Testar:

```bash
yarn build
yarn start
```

4. Documentar mudanças em CHANGELOG.md

5. Criar Pull Request

### Boas Práticas

- Use apenas Yarn como gerenciador de pacotes
- Mantenha vers��es fixas para dependências críticas
- Teste todas as atualizações antes de fazer merge
- Documente todas as mudanças no CHANGELOG.md
- Mantenha o yarn.lock no controle de versão
- Não edite manualmente o yarn.lock

### Scripts Disponíveis

- `yarn dev`: Ambiente de desenvolvimento
- `yarn build`: Build de produção
- `yarn start`: Iniciar em produção
- `yarn lint`: Executar linter
- `yarn update-check`: Verificar atualizações
- `yarn update-safe`: Atualizar de forma segura
- `yarn audit`: Verificar vulnerabilidades

## Licença

MIT
