# Quick Start Guide

Get up and running with Astro + React Hybrid Template in 5 minutes!

## Prerequisites

- Node.js 18.0 or higher
- Bun (recommended) or npm/yarn/pnpm
- Git

## Installation

### Option 1: Use This Template (Recommended)

1. Click the "Use this template" button on GitHub
2. Create a new repository from the template
3. Clone your new repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

### Option 2: Clone Directly

```bash
git clone https://github.com/craftzcatdev/astro-react-hybrid-template.git
cd astro-react-hybrid-template
```

## Setup

1. **Install dependencies:**
   ```bash
   bun install
   # or
   npm install
   ```

2. **Start development server:**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4321`

## Project Structure

```
astro-react-hybrid-template/
├── src/
│   ├── components/     # React & Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes (file-based routing)
│   ├── lib/            # Utilities
│   └── styles/         # Global styles
├── public/             # Static assets
└── ...config files
```

## Available Pages

- `/` - Landing page
- `/dashboard` - Dashboard with stats
- `/login` - Login form

## Next Steps

1. **Customize the theme:**
   - Edit `src/styles/global.css` for colors
   - Modify CSS variables for light/dark mode

2. **Add new pages:**
   - Create `.astro` files in `src/pages/`
   - File-based routing automatically creates routes

3. **Add components:**
   - React components: `src/components/*.tsx`
   - Astro components: `src/components/*.astro`
   - shadcn/ui: `npx shadcn@latest add <component>`

4. **Deploy:**
   - Vercel: `vercel deploy`
   - Netlify: Connect your repo
   - Cloudflare Pages: Connect your repo

## Common Commands

```bash
bun run dev       # Start dev server
bun run build     # Build for production
bun run preview   # Preview production build
bun run astro     # Run Astro CLI
```

## Need Help?

- 📖 [Full Documentation](README.md)
- 💬 [GitHub Discussions](https://github.com/craftzcatdev/astro-react-hybrid-template/discussions)
- 🐛 [Report Issues](https://github.com/craftzcatdev/astro-react-hybrid-template/issues)
- 📧 [Email Support](mailto:hainguyenchi@craftzcatdev.blog)

## What's Next?

- Read the [Contributing Guide](CONTRIBUTING.md)
- Check out [Astro Documentation](https://docs.astro.build/)
- Explore [shadcn/ui Components](https://ui.shadcn.com/)
- Learn about [React](https://react.dev/)

Happy coding! 🚀
