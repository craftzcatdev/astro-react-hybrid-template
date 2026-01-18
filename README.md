# Astro + React Hybrid Template

A modern, production-ready template combining Astro's static generation with React's interactivity. Features dark/light mode, shadcn/ui components, and Tailwind CSS.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Astro](https://img.shields.io/badge/Astro-5.0-orange)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)

## ✨ Features

- 🚀 **Astro 5** - Fast, content-focused static site generation
- ⚛️ **React 19** - Interactive components with islands architecture
- 🎨 **shadcn/ui** - Beautiful, accessible UI components
- 🌓 **Dark/Light Mode** - Theme switching with persistence
- 💅 **Tailwind CSS 4** - Utility-first styling
- 📱 **Responsive Design** - Mobile-first approach
- 🔒 **TypeScript** - Type-safe development
- 🎯 **SEO Ready** - Optimized for search engines

## 📁 Project Structure

```
astro-app/
├── .git/                    # Git repository
├── .vscode/                 # VS Code settings
├── public/                  # Static assets (served as-is)
│   └── favicon.svg
├── src/
│   ├── components/          # React & Astro components
│   │   ├── ui/             # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── toast.tsx
│   │   ├── AppWrapper.tsx
│   │   ├── DashboardStats.tsx
│   │   ├── LoginForm.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeProviderIsland.tsx
│   │   ├── ThemeScript.astro
│   │   └── ThemeToggle.tsx
│   ├── layouts/            # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── DashboardLayout.astro
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Landing page
│   │   ├── dashboard.astro # Dashboard page
│   │   ├── login.astro     # Login page
│   │   └── markdown-page.md
│   └── styles/             # Global styles
│       └── global.css
├── .gitignore
├── astro.config.mjs        # Astro configuration
├── components.json         # shadcn/ui configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **Bun** (recommended) or npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd astro-app
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:4321`

### Available Scripts

```bash
bun run dev       # Start development server
bun run build     # Build for production
bun run preview   # Preview production build
bun run astro     # Run Astro CLI commands
```

## 🎨 Adding New Components

### Adding shadcn/ui Components

This project uses shadcn/ui components. To add new components:

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
```

### Creating Custom Components

**React Component** (Interactive):
```tsx
// src/components/MyComponent.tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function MyComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <Button onClick={() => setCount(count + 1)}>
      Count: {count}
    </Button>
  )
}
```

**Astro Component** (Static):
```astro
---
// src/components/MyComponent.astro
interface Props {
  title: string
}

const { title } = Astro.props
---

<div>
  <h2>{title}</h2>
  <slot />
</div>
```

### Using Components in Pages

```astro
---
// src/pages/example.astro
import BaseLayout from "../layouts/BaseLayout.astro"
import { MyComponent } from "../components/MyComponent"
---

<BaseLayout title="Example">
  <!-- React component with client:load directive -->
  <MyComponent client:load />
</BaseLayout>
```

## 🌓 Theme System

The project includes a custom dark/light mode implementation:

### How It Works

1. **ThemeScript.astro** - Runs before page render to prevent flash
2. **ThemeToggle.tsx** - Button component for switching themes
3. **CSS Variables** - Defined in `global.css` for both themes

### Using Theme in Components

Theme automatically applies to all components using Tailwind classes:

```tsx
<div className="bg-background text-foreground">
  <p className="text-muted-foreground">This text adapts to theme</p>
</div>
```

## 🔧 Configuration

### Astro Configuration

Edit `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
})
```

### TypeScript Configuration

Path aliases are configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📦 Building for Production

```bash
bun run build
```

Output will be in `dist/` directory. Deploy to:
- **Vercel** - Zero configuration
- **Netlify** - Automatic builds
- **Cloudflare Pages** - Edge deployment
- **GitHub Pages** - Free hosting

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new files
- Follow existing code formatting
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before submitting

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: fix bug in component
docs: update README
style: format code
refactor: restructure component
test: add tests
chore: update dependencies
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

If you discover a security vulnerability, please email [security@example.com](mailto:security@example.com). Do not open a public issue.

See [SECURITY.md](SECURITY.md) for our security policy.

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [React Documentation](https://react.dev/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 💬 Support

- 📖 [Documentation](https://docs.astro.build/)
- 💬 [Discord Community](https://astro.build/chat)
- 🐛 [Issue Tracker](https://github.com/your-repo/issues)

## 🙏 Acknowledgments

- [Astro Team](https://astro.build/) - Amazing framework
- [shadcn](https://twitter.com/shadcn) - Beautiful UI components
- [Tailwind Labs](https://tailwindcss.com/) - Utility-first CSS

---

Made with ❤️ by the community
