# CodeSage Setup Guide

Add AI-powered code reviews to your repo in 3 steps.

---

## Step 1: Add the Workflow

Copy [`templates/ai-review-starter.yml`](templates/ai-review-starter.yml) to your repo:

```
your-repo/
└── .github/
    └── workflows/
        └── ai-review.yml   ← paste it here
```

Or use this one-liner in your repo:

```bash
mkdir -p .github/workflows && curl -o .github/workflows/ai-review.yml \
  https://raw.githubusercontent.com/BLEND360/code-sage-code-review/main/templates/ai-review-starter.yml
```

---

## Step 2: Add API Keys

Go to your repo: **Settings → Secrets and variables → Actions → New repository secret**

| Secret Name | Required | Get it from |
|-------------|----------|-------------|
| `OPENAI_API_KEY` | If using OpenAI | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| `ANTHROPIC_API_KEY` | If using Claude | [console.anthropic.com](https://console.anthropic.com/) |

> **Org-wide secrets**: Ask your org admin to add these at the org level so all repos can use them.

---

## Step 3: (Optional) Customize Review Rules

Create `.github/review-guidelines.md` in your repo with your team's rules.

See [`templates/review-guidelines.md`](templates/review-guidelines.md) for an example.

If you don't add this file, the reviewer uses sensible defaults.

---

## Configuration Options

Edit your `.github/workflows/ai-review.yml`:

```yaml
with:
  # Choose provider: 'openai' (default) or 'claude'
  ai_provider: 'openai'

  # Path to your team's review guidelines
  review_guidelines_path: '.github/review-guidelines.md'

  # Fallback to other provider if primary fails (default: true)
  enable_fallback: true
```

---

## Test It

1. Create a branch with any code change
2. Open a Pull Request
3. Wait ~30 seconds
4. See the 🤖 AI Code Review comment appear!

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| No comment appears | Check Actions tab for errors |
| 403 error | Add `pull-requests: write` permission (already in template) |
| API error | Verify your secret name matches exactly |
| Wrong provider | Check `ai_provider` in your workflow |

---

## Questions?

Open an issue at [BLEND360/code-sage-code-review](https://github.com/BLEND360/code-sage-code-review/issues)
