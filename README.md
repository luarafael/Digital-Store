# 🛍️ Digital Store

Loja virtual de moda e acessórios desenvolvida como projeto de front-end. Permite navegar por categorias de produtos (Tênis, Camisetas, Calças, Bonés e Headphones), visualizar detalhes de cada item, adicionar ao carrinho e realizar cadastro e login de usuários.

---

## 🚀 Tecnologias utilizadas

| Tecnologia                                               | Versão | Descrição                             |
| -------------------------------------------------------- | ------ | ------------------------------------- |
| [React](https://react.dev)                               | 19     | Biblioteca principal de UI            |
| [Vite](https://vite.dev)                                 | 8      | Bundler e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com)              | 7      | Roteamento de páginas (SPA)           |
| [Tailwind CSS](https://tailwindcss.com)                  | 4      | Estilização utilitária                |
| [Axios](https://axios-http.com)                          | 1      | Requisições HTTP à API                |
| [React Icons](https://react-icons.github.io/react-icons) | 5      | Biblioteca de ícones                  |

---

## 📦 Como instalar

> Pré-requisito: ter o [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

```bash
# 1. Clone o repositório
git clone https://github.com/luarafael/Digital-Store.git

# 2. Acesse a pasta do projeto
cd Digital-Store

# 3. Instale as dependências
npm install
```

---

## ▶️ Como executar

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: **http://localhost:5173**

### Outros comandos disponíveis

```bash
# Gera a build de produção
npm run build

# Pré-visualiza a build gerada
npm run preview

# Executa o linter
npm run lint
```

---

## 📁 Estrutura do projeto

```
src/
├── assets/          # Imagens e ícones estáticos
├── components/      # Componentes reutilizáveis (Header, Footer, Cards...)
├── contexts/        # Context API (carrinho de compras)
├── data/            # Catálogo de produtos (products.js)
├── pages/           # Páginas da aplicação (Home, Login, Cadastro...)
└── services/        # Cliente HTTP (Axios)
```

---

## ✨ Funcionalidades

- Listagem de produtos por categoria
- Filtros e ordenação na página de produtos
- Carrinho de compras com Context API
- Página de detalhes do produto com galeria de imagens
- Cadastro e login de usuários
- Layout responsivo (mobile e desktop)
