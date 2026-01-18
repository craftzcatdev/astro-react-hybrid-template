# Contributing to Astro + React Hybrid Template

First off, thank you for considering contributing to this project! It's people like you that make this template better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [hainguyenchi@craftzcatdev.blog](mailto:hainguyenchi@craftzcatdev.blog).

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- Bun (recommended) or npm/yarn/pnpm
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/astro-app.git
   cd astro-app
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/astro-app.git
   ```

4. **Install dependencies**
   ```bash
   bun install
   ```

5. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Keep Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### 4. Commit Your Changes

Follow our [commit guidelines](#commit-guidelines)

```bash
git add .
git commit -m "feat: add amazing feature"
```

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

Go to GitHub and create a pull request from your fork to the main repository.

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type when possible
- Use type inference when appropriate

```typescript
// Good
interface ButtonProps {
  label: string
  onClick: () => void
}

// Avoid
const props: any = { label: "Click me" }
```

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use meaningful component names
- Export components as named exports

```tsx
// Good
export function UserProfile({ name, email }: UserProfileProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}
```

### Astro Components

- Use `.astro` extension for Astro components
- Define props interface in frontmatter
- Use semantic HTML
- Keep components reusable

```astro
---
interface Props {
  title: string
}

const { title } = Astro.props
---

<article>
  <h1>{title}</h1>
  <slot />
</article>
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use CSS variables for theme colors
- Keep custom CSS minimal

```tsx
// Good
<div className="flex items-center gap-4 p-4 bg-background text-foreground">
  <Button variant="outline">Click me</Button>
</div>
```

### File Naming

- **Components**: PascalCase (e.g., `UserProfile.tsx`, `Button.astro`)
- **Utilities**: camelCase (e.g., `utils.ts`, `formatDate.ts`)
- **Pages**: kebab-case (e.g., `user-profile.astro`, `about-us.astro`)
- **Styles**: kebab-case (e.g., `global.css`, `theme.css`)

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
feat(auth): add login functionality
fix(button): resolve click handler issue
docs(readme): update installation instructions
style(components): format code with prettier
refactor(utils): simplify date formatting logic
```

### Commit Message Rules

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- First line should be 50 characters or less
- Reference issues and pull requests when relevant

## Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your own code
- [ ] Comments added for complex code
- [ ] Documentation updated if needed
- [ ] No new warnings or errors
- [ ] Tested in development environment

### PR Title Format

Follow the same format as commit messages:

```
feat(component): add new feature
fix(layout): resolve responsive issue
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Tested changes
```

### Review Process

1. At least one maintainer must approve
2. All CI checks must pass
3. No merge conflicts
4. Follow-up on review comments

## Project Structure

### Directory Organization

```
src/
├── components/       # Reusable components
│   ├── ui/          # shadcn/ui components
│   └── ...          # Custom components
├── layouts/         # Page layouts
├── lib/             # Utility functions
├── pages/           # File-based routing
└── styles/          # Global styles
```

### Adding New Features

1. **Components**: Add to `src/components/`
2. **Pages**: Add to `src/pages/`
3. **Utilities**: Add to `src/lib/`
4. **Styles**: Update `src/styles/global.css`

### Component Guidelines

- One component per file
- Co-locate related files
- Use index files for exports
- Keep components focused

## Questions?

Feel free to:
- Open an issue for questions
- Join our [GitHub Discussions](https://github.com/craftzcatdev/astro-react-hybrid-template/discussions)
- Email us at [hainguyenchi@craftzcatdev.blog](mailto:hainguyenchi@craftzcatdev.blog)

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🎉
