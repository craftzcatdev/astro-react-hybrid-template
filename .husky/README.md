# Git Hooks Setup

This project uses [Husky](https://typicode.github.io/husky/) to manage Git hooks for code quality and consistency.

## Available Hooks

### pre-commit
Runs before each commit:
- TypeScript type checking
- Ensures code compiles without errors

### commit-msg
Validates commit message format:
- Enforces [Conventional Commits](https://www.conventionalcommits.org/) specification
- Format: `<type>(<scope>): <subject>`
- Types: feat, fix, docs, style, refactor, perf, test, chore, ci

### pre-push
Runs before pushing to remote:
- Full project build
- Ensures production build succeeds

## Installation

Hooks are automatically installed when you run:

```bash
bun install
# or
npm install
```

This triggers the `prepare` script which runs `husky install`.

## Manual Setup

If hooks are not working, manually install them:

```bash
# Install husky
bun add -d husky

# Initialize husky
bunx husky install

# Make hooks executable
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
chmod +x .husky/pre-push
```

## Bypassing Hooks

**Not recommended**, but if you need to bypass hooks:

```bash
# Skip pre-commit and commit-msg
git commit --no-verify -m "message"

# Skip pre-push
git push --no-verify
```

## Troubleshooting

### Hooks not running

1. Check if `.husky` directory exists
2. Verify hooks are executable: `ls -la .husky/`
3. Reinstall: `bunx husky install`

### Permission denied

```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
chmod +x .husky/pre-push
```

### Commit message validation failing

Ensure your commit message follows this format:

```
feat(auth): add login functionality
fix(button): resolve click handler
docs(readme): update installation steps
```

## Customizing Hooks

Edit the hook files in `.husky/` directory:
- `.husky/pre-commit` - Pre-commit checks
- `.husky/commit-msg` - Commit message validation
- `.husky/pre-push` - Pre-push checks

## Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
