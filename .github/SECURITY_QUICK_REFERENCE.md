# Security Quick Reference

Quick guide for `.github/` directory security.

## ✅ SAFE TO PUBLIC

| File/Folder | Status |
|-------------|--------|
| `ISSUE_TEMPLATE/` | ✅ Safe |
| `workflows/*.yml` | ✅ Safe (uses `${{ secrets }}`) |
| `FUNDING.yml` | ✅ Safe (public usernames only) |
| `PULL_REQUEST_TEMPLATE.md` | ✅ Safe |
| `*.md` files | ✅ Safe |

## ❌ NEVER COMMIT

| Type | Examples |
|------|----------|
| Secrets | API keys, passwords, tokens |
| Private Keys | `.pem`, `.key`, SSH keys |
| Personal Info | Phone, address, SSN |
| Credentials | Database URLs, auth tokens |

## 🔒 Current Status

```
✅ ALL FILES IN .github/ ARE SAFE TO PUBLIC
```

## 📧 Email Safety

- ✅ Public email: `haing.dev@gmail.com`
- ❌ Personal/work emails

## 🛡️ Quick Check

Before pushing:
```bash
# Check what you're committing
git diff --staged

# Look for secrets
grep -r "password\|secret\|token" .github/
```

## 🔐 Use GitHub Secrets

```yaml
# ❌ WRONG
env:
  API_KEY: "abc123"

# ✅ CORRECT
env:
  API_KEY: ${{ secrets.API_KEY }}
```

---

**All current files are safe to push!** 🎉
