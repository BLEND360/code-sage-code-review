# CodeSage: Automated Code Review

## Goal
Set up automated code review on pull requests using Claude Code (or GitHub Copilot — whichever is more cost-effective and capable).

## Why this matters
- **Efficiency:** Code review is a bottleneck — automated first-pass review can catch issues before a human reviewer even looks at the PR.
- **Consistency:** Consistent quality feedback on every PR, especially as AI-generated code volume increases (see issue #16).
- **Focus:** Frees up senior engineers to focus on architectural and design-level feedback rather than catching style issues and bugs.

## Organizational Stakeholders & User Groups

Implementing an enterprise-level automated code review system involves multiple departments beyond individual developers. This project will serve the following groups:

### 👥 1. Primary Users (Direct Beneficiaries)
*   **Engineering Teams:** Receive automated first-pass reviews on every PR, improving code quality and reducing review cycles.
*   **Junior & Mid-level Engineers:** Benefit from consistent, real-time feedback and guidance, accelerating learning and reducing dependency on senior reviewers.
*   **AI-assisted Developers:** Engineers using tools like GitHub Copilot or Cursor who require validation of AI-generated code for correctness, security, and maintainability.

### 🧑‍🔧 2. Ownership & Governance Groups
*   **Tech Leads & Architects:** Define coding standards, review guidelines, and maintain `CLAUDE.md` to ensure the AI enforces project-specific best practices.
*   **Platform / Developer Experience (DevEx) Team:** Own integration with CI/CD, manage configurations, monitor performance, and optimize signal-to-noise ratio.
*   **Application Security (AppSec) Team:** Define security policies and ensure detection of vulnerabilities (e.g., OWASP Top 10) before code reaches production.
*   **QA / Testing Teams:** Leverage AI feedback to identify missing test coverage and potential edge cases earlier in the development cycle.

### 🛡️ 3. Compliance & Risk Stakeholders
*   **Compliance & Audit Teams:** Utilize automated review logs and reports to support regulatory requirements such as SOC 2, HIPAA, and internal audit standards.

### 📊 4. Strategic & Decision Makers
*   **Engineering Leadership (CTOs, VPs, Directors):** Focus on organizational outcomes such as developer productivity, code quality, technical debt reduction, and time-to-merge.
*   **Product & Delivery Teams:** Benefit from faster release cycles and reduced production defects.
*   **Procurement & Finance:** Evaluate cost efficiency across tools (e.g., Claude vs Copilot) and manage budget allocation.

## What needs to happen

### 1. Evaluate options
- Compare Claude Code (via GitHub Actions or CI integration) vs GitHub Copilot code review.
- Evaluate on: cost per PR, quality of feedback, ease of setup, support for our tech stacks.
- Pick one and get budget approval.

### 2. Set up the integration
- Configure the chosen tool to run on every PR to key repos.
- Define what the reviewer should check: bugs, security issues, style violations, test coverage, complexity.
- Set up as a non-blocking review (advisory comments, not a required check) to start.
- Create a `CLAUDE.md` or config that gives the reviewer context about project conventions.

### 3. Roll out and iterate
- Pilot on 2-3 repos and gather feedback from the team.
- Tune the review prompts based on signal-to-noise ratio (reduce false positives).
- Expand to all active repos once quality is validated.
- Track metrics: issues caught, developer satisfaction, time saved.

## Definition of Done
- Automated code review running on all active repos.
- Team feedback is positive (helpful, not noisy).
- Documented setup guide so other teams can adopt it.
