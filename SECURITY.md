# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our project seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please do NOT:

- Open a public GitHub issue
- Discuss the vulnerability in public forums, social media, or other public channels

### Please DO:

1. **Email us directly** at [security@example.com](mailto:security@example.com)
2. **Include the following information:**
   - Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
   - Full paths of source file(s) related to the manifestation of the issue
   - The location of the affected source code (tag/branch/commit or direct URL)
   - Any special configuration required to reproduce the issue
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue, including how an attacker might exploit it

### What to Expect:

- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Communication**: We will send you regular updates about our progress
- **Timeline**: We aim to patch critical vulnerabilities within 7 days
- **Credit**: If you wish, we will publicly credit you for the discovery

## Security Best Practices

When using this template, please follow these security best practices:

### 1. Dependencies

- Regularly update dependencies: `bun update` or `npm update`
- Audit dependencies: `bun audit` or `npm audit`
- Review dependency changes before updating

### 2. Environment Variables

- Never commit `.env` files to version control
- Use environment variables for sensitive data
- Rotate secrets regularly

### 3. Authentication

- Implement proper authentication mechanisms
- Use secure session management
- Enable HTTPS in production

### 4. Input Validation

- Validate all user inputs
- Sanitize data before rendering
- Use parameterized queries for databases

### 5. Content Security Policy

Add CSP headers to your deployment:

```js
// Example for Vercel (vercel.json)
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ]
}
```

### 6. Regular Security Audits

- Run `npm audit` or `bun audit` regularly
- Keep Node.js and Bun updated
- Monitor security advisories for dependencies

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the problem and determine affected versions
2. Audit code to find any similar problems
3. Prepare fixes for all supported versions
4. Release new security fix versions as soon as possible

## Comments on this Policy

If you have suggestions on how this process could be improved, please submit a pull request or open an issue to discuss.

## Security Hall of Fame

We would like to thank the following individuals for responsibly disclosing security issues:

- (No reports yet)

---

Last updated: January 2025
