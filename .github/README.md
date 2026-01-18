# .github Directory

GitHub-specific configuration files for this repository.

## 📁 Structure

```
.github/
├── ISSUE_TEMPLATE/          # Issue templates for bug reports & features
├── workflows/               # GitHub Actions CI/CD
├── FUNDING.yml             # Sponsorship configuration
├── PULL_REQUEST_TEMPLATE.md # PR template
└── SECURITY_QUICK_REFERENCE.md # Security guidelines
```

## 🔧 GitHub Actions Workflows

### CI Workflow (`workflows/ci.yml`)
**Purpose:** Automatically test and build the project on every push/PR

**What it does:**
- ✅ Runs on Node 18.x and 20.x
- ✅ Installs dependencies with Bun
- ✅ Type checks with Astro
- ✅ Builds the project
- ✅ Uploads build artifacts

**When it runs:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

**Required:** ✅ Yes - Ensures code quality

---

### Welcome Workflow (`workflows/welcome.yml`)
**Purpose:** Welcome first-time contributors

**What it does:**
- 👋 Posts welcome message on first issue
- 🎉 Posts welcome message on first PR

**When it runs:**
- When a new contributor opens their first issue/PR

**Required:** ⚠️ Optional - Nice to have but not essential

**To disable:** Delete `.github/workflows/welcome.yml`

---

## 📝 Templates

### Issue Templates
- `bug_report.md` - For reporting bugs
- `feature_request.md` - For suggesting features
- `config.yml` - Template configuration

### Pull Request Template
- `PULL_REQUEST_TEMPLATE.md` - Checklist for PRs

---

## 💖 Funding

`FUNDING.yml` - Configure sponsorship options

**Supported platforms:**
- GitHub Sponsors
- Ko-fi
- Patreon
- Buy Me a Coffee
- Open Collective
- Custom URLs

**Setup:** Uncomment and add your usernames

---

## 🔒 Security

`SECURITY_QUICK_REFERENCE.md` - Quick security guidelines

**What's safe to public:**
- ✅ Templates
- ✅ Workflows (using GitHub Secrets)
- ✅ Documentation
- ✅ Public usernames/emails

**Never commit:**
- ❌ API keys, passwords, tokens
- ❌ Private keys (.pem, .key)
- ❌ Personal information
- ❌ .env files

---

## 🚀 Quick Start

### For Maintainers

1. **Enable GitHub Actions:**
   - Go to repository Settings → Actions
   - Enable workflows

2. **Set up branch protection:**
   - Settings → Branches → Add rule
   - Require status checks (CI) to pass

3. **Configure funding:**
   - Edit `FUNDING.yml`
   - Add your usernames

### For Contributors

- Use issue templates when reporting bugs/features
- Follow PR template checklist
- Wait for CI to pass before requesting review

---

## 📚 Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Issue Templates Guide](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [FUNDING.yml Syntax](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)

---

**Questions?** Open an issue or discussion!
