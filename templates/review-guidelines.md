## Code Review Guidelines

<!-- Customize these rules for your team! The AI reviewer will check PRs against them. -->

### General
- Follow ESLint and Prettier rules
- Avoid console.log in production code
- No hardcoded secrets or API keys

### Error Handling
- All API calls must have error handling (try/catch)
- Validate inputs before processing
- Use async/await instead of raw promises

### Code Quality
- Avoid duplicate logic — extract to functions
- Ensure proper null/undefined checks
- Keep functions under 50 lines
- Use meaningful variable names

### Security
- Sanitize user inputs
- Use parameterized queries for databases
- No sensitive data in logs

### Testing
- New features must include unit tests
- Bug fixes should add regression tests
