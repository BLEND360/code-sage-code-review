# Organization Starter Workflow Setup

This folder contains files for creating a `.github` repo in your GitHub organization. This enables a "marketplace-like" experience where teams can add AI Code Review with 2 clicks.

---

## What This Does

After setup, **every repo** in your org will see this when they go to **Actions → New workflow**:

```
🤖 AI Code Review by BLEND360
Automated PR reviews using OpenAI or Claude. Catches bugs, security...
                                                    [Configure] ←
```

Clicking **Configure** auto-creates the workflow file — team just commits it.

---

## Setup Steps

### 1. Create the `.github` Repo

Go to your org: https://github.com/organizations/BLEND360/repositories/new

- **Name**: `.github` (exact name, with the dot)
- **Visibility**: **Public** or **Internal** (not Private)
- **Description**: "Organization-level defaults and workflow templates"
- Initialize with README: ✅ Yes

Click **Create repository**.

---

### 2. Add the Workflow Template Files

In the new `.github` repo, create this structure:

```
.github/                              ← Your new org repo
└── workflow-templates/               ← Create this folder
    ├── ai-code-review.yml           ← Copy from org-setup/
    └── ai-code-review.properties.json  ← Copy from org-setup/
```

**Option A — Via GitHub Web UI:**
1. In the `.github` repo, click **Add file → Create new file**
2. Filename: `workflow-templates/ai-code-review.yml`
   - (GitHub auto-creates the folder when you type the slash)
3. Paste contents from `org-setup/workflow-templates/ai-code-review.yml`
4. Commit
5. Repeat for `ai-code-review.properties.json`

**Option B — Via Git CLI:**
```bash
# Clone the .github repo
git clone https://github.com/BLEND360/.github.git
cd .github

# Copy the files
mkdir -p workflow-templates
cp /path/to/CodeSage/org-setup/workflow-templates/* workflow-templates/

# Push
git add workflow-templates/
git commit -m "Add AI Code Review starter workflow"
git push
```

---

### 3. Verify It Works

Go to **any repo** in your org:
1. Click **Actions** tab
2. Click **New workflow**
3. Scroll down — you should see "AI Code Review by BLEND360" in the list
4. Click **Configure** to test

---

## Files in This Folder

| File | Purpose |
|------|---------|
| `ai-code-review.yml` | The actual workflow teams get |
| `ai-code-review.properties.json` | Metadata (name, icon, description) |
| `README.md` | This file (instructions) |

---

## Customization

### Change the Icon
Edit `ai-code-review.properties.json` → `"iconName"`:
- Options: `code-review`, `workflow`, `github-action`, `shield`, `check-circle`
- See: https://github.com/primer/octicons

### Change When It Appears
Edit `filePatterns` to only show for certain file types:
```json
"filePatterns": [
  "**/*.py"  // Only shows for Python repos
]
```

### Add More Templates
Create additional `workflow-templates/*.yml` files in the `.github` repo. Each gets its own button in the Actions UI.

---

## Rollout Strategy

1. **Soft launch**: Share the `.github` repo link with 2-3 friendly teams for testing
2. **Announce**: Once verified, announce to all teams via Slack/email
3. **Make default**: Later, ask GitHub admin to add org-level secrets so it works instantly

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Template doesn't appear | Ensure `.github` repo is Public or Internal (not Private) |
| "Workflow not found" error | Check the `uses:` line references `@main` branch |
| Still manual? | Teams still need to add secrets — ask org admin for org-level secrets |

---

## Next Steps

After setup:
1. Test it yourself in a test repo
2. Document where teams find API keys
3. Share announcement with teams (see main SETUP.md)
