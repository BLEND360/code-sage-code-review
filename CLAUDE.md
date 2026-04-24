# CLAUDE.md

This file provides context for the automated AI code reviewer about project-specific conventions and standards.

## Project Vision
Automate first-pass code reviews for the CodeSage project to catch bugs, style issues, and security vulnerabilities early.

## Code Standards & Conventions
- **Naming:** Follow standard naming conventions (PascalCase for classes, camelCase for variables/functions).
- **Consistency:** Ensure code is idiomatic to the language used (e.g., Python, TypeScript).
- **Documentation:** Public APIs and complex logic should be documented with clear comments.
- **Testing:** New features and bug fixes must include unit tests.

## AI Reviewer Guidelines
When reviewing pull requests, focus on:
1. **Security:** Check for hardcoded secrets, injection vulnerabilities, and improper access controls.
2. **Logic Bugs:** Identify potential edge cases and logical errors.
3. **Style:** Flag deviations from established project style.
4. **Complexity:** Recommend refactoring for overly complex or deeply nested code.
5. **Test Coverage:** Ensure new code is properly tested.

## Review Tone
- Advisory and helpful.
- Provide clear explanations and suggested fixes where possible.
- Non-blocking by default.
