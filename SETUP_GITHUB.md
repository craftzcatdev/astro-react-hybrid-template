# GitHub Repository Setup Instructions

Follow these steps to set up your GitHub repository and welcome contributors.

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in the details:
   - **Owner:** craftzcatdev
   - **Repository name:** `astro-react-hybrid-template`
   - **Description:** `A modern, production-ready template combining Astro's static generation with React's interactivity. Features dark/light mode, shadcn/ui components, and Tailwind CSS.`
   - **Visibility:** Public
   - **Initialize:** Don't add README, .gitignore, or license (we have them)
3. Click "Create repository"

## Step 2: Push Your Code

**IMPORTANT: Run security scan first!**

```bash
# Make script executable
chmod +x .github/scripts/security-scan.sh

# Run security scan
./.github/scripts/security-scan.sh

# If scan passes, proceed with git commands
```

If security scan passes:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit with conventional commit message
git commit -m "feat: initial project setup with Astro + React hybrid template"

# Add remote
git remote add origin https://github.com/craftzcatdev/astro-react-hybrid-template.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Configure Repository Settings

### General Settings

1. Go to **Settings** → **General**
2. Under **Features:**
   - ✅ Enable Issues
   - ✅ Enable Projects
   - ✅ Enable Discussions
   - ❌ Disable Wiki (we use README)
3. Under **Pull Requests:**
   - ✅ Allow merge commits
   - ✅ Allow squash merging
   - ✅ Allow rebase merging
   - ✅ Automatically delete head branches
4. Click **Save changes**

### Add Topics

1. Go to repository main page
2. Click ⚙️ next to "About"
3. Add topics:
   ```
   astro, react, typescript, tailwindcss, shadcn-ui, dark-mode, 
   template, starter, hybrid, islands-architecture, 
   static-site-generator, ui-components, responsive-design, 
   modern-web, frontend-template
   ```
4. Add website URL (when deployed)
5. Click **Save changes**

### Enable Discussions

1. Go to **Settings** → **General**
2. Scroll to **Features**
3. Check **Discussions**
4. Go to **Discussions** tab
5. Create categories:
   - 💡 Ideas
   - 🙏 Q&A
   - 📣 Announcements
   - 🎉 Show and tell

### Branch Protection

1. Go to **Settings** → **Branches**
2. Click **Add rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Require status checks to pass
   - ✅ Require conversation resolution
   - ✅ Require linear history
   - ✅ Include administrators
5. Click **Create**

### Security Settings

1. Go to **Settings** → **Code security and analysis**
2. Enable:
   - ✅ Dependency graph
   - ✅ Dependabot alerts
   - ✅ Dependabot security updates
   - ✅ Code scanning (GitHub Advanced Security)

## Step 4: Set Up GitHub Actions

Actions are already configured in `.github/workflows/`:
- `ci.yml` - Continuous Integration
- `welcome.yml` - Welcome new contributors

They will run automatically on push and pull requests.

## Step 5: Create First Release

```bash
# Tag the first release
git tag -a v1.0.0 -m "Release v1.0.0: Initial release"
git push origin v1.0.0
```

Then on GitHub:
1. Go to **Releases**
2. Click **Draft a new release**
3. Choose tag: `v1.0.0`
4. Release title: `v1.0.0 - Initial Release`
5. Description: Copy from CHANGELOG.md
6. Click **Publish release**

## Step 6: Enable GitHub Pages (Optional)

If you want to host documentation:

1. Go to **Settings** → **Pages**
2. Source: Deploy from a branch
3. Branch: `main` / `docs` folder
4. Click **Save**

## Step 7: Set Up Sponsorship (Optional)

1. Go to **Settings** → **General**
2. Scroll to **Sponsorships**
3. Check **Sponsorships**
4. Edit `.github/FUNDING.yml` with your details

## Step 8: Create Social Preview

1. Go to **Settings** → **General**
2. Scroll to **Social preview**
3. Click **Edit**
4. Upload an image (1280x640px recommended)
   - Create one at https://www.canva.com/
   - Include: Project name, key features, tech stack

## Step 9: Pin Repository (Optional)

1. Go to your profile
2. Click **Customize your pins**
3. Select this repository
4. Click **Save pins**

## Step 10: Announce Your Project

Share your template:

- 🐦 Twitter/X: Share with #Astro #React #WebDev
- 💬 Reddit: r/webdev, r/reactjs, r/astro
- 🎯 Dev.to: Write an article
- 📱 LinkedIn: Share with your network
- 💬 Discord: Astro Discord, React Discord

## Verification Checklist

- [ ] Repository created and code pushed
- [ ] Topics added
- [ ] Discussions enabled
- [ ] Branch protection configured
- [ ] Security features enabled
- [ ] GitHub Actions running
- [ ] First release created
- [ ] README badges working
- [ ] Issue templates working
- [ ] PR template working
- [ ] Welcome workflow tested

## Maintenance

### Regular Tasks

- **Weekly:** Review and respond to issues/PRs
- **Monthly:** Update dependencies
- **Quarterly:** Review and update documentation
- **Yearly:** Major version updates

### Monitoring

- Watch for security alerts
- Monitor CI/CD pipeline
- Track community engagement
- Review analytics

## Need Help?

- 📖 [GitHub Docs](https://docs.github.com/)
- 💬 [GitHub Community](https://github.community/)
- 📧 Email: hainguyenchi@craftzcatdev.blog

---

**Congratulations! Your repository is now set up and ready to welcome contributors! 🎉**
