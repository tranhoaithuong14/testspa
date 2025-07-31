# React SPA with TypeScript

A production-ready Single Page Application built from scratch with React, TypeScript, and Webpack.

## Features

- ⚛️ **React 19.1** - Latest React with concurrent features
- 🔷 **TypeScript 5.7** - Full type safety
- 📦 **Webpack 5.97** - Custom configuration with optimization
- 🎨 **LESS** - CSS preprocessor with variables and nesting
- 🔧 **ESLint & Prettier** - Code quality and formatting
- 🐺 **Husky & lint-staged** - Pre-commit hooks
- 🚀 **Production optimized** - Code splitting, tree shaking, minification
- 📱 **Responsive design** - Mobile-first approach

## Tech Stack

- **Core**: React, TypeScript, React Router DOM
- **Build Tool**: Webpack (custom configuration)
- **Styling**: LESS with autoprefixer
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Bundle Analysis**: Webpack Bundle Analyzer

## Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles and variables
└── assets/             # Static assets
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build for production
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run analyze` - Analyze bundle size
- `npm run prepare` - Setup Husky hooks

## Code Quality

This project enforces code quality through:

- **ESLint** - Static code analysis for React and TypeScript
- **Prettier** - Consistent code formatting
- **Husky** - Git hooks for pre-commit and pre-push validation
- **lint-staged** - Run linters on staged files only

The pre-commit hook automatically:
- Runs ESLint and fixes issues
- Formats code with Prettier
- Blocks commit if there are linting errors

The pre-push hook:
- Runs full lint check
- Ensures production build succeeds

## Browser Support

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## License

MIT