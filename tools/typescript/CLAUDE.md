# TypeScript CLI Tools - CLAUDE.md

This file provides guidance to Claude Code when working with TypeScript CLI tools in this directory.

## Conventions

### Project Structure
- Each tool is a standalone package with its own `package.json`
- Source files in `src/`, build output in `dist/`
- Main CLI entry point: `src/cli.ts`
- Tests alongside source files: `src/cli.test.ts`

### Dependencies
- **Commander.js**: CLI framework (preferred over yargs/minimist)
- **Chalk**: Terminal colors (ESM version)
- **Vitest**: Testing framework
- **tsx**: Development runner

### Common Commands
```bash
pnpm dev         # Run in development mode
pnpm build       # Build to dist/
pnpm test        # Run tests
pnpm lint        # ESLint check
pnpm check-types # TypeScript type checking
```

### Code Style
- Use ESM imports
- Async/await over callbacks
- Functional style where appropriate
- Descriptive variable names
- No semicolons (Prettier default)

### Testing
- Integration tests using Vitest
- Test actual CLI behavior with `execSync`
- Keep tests simple and focused

### Binary Configuration
- Shebang: `#!/usr/bin/env node`
- Binary name matches package name
- Executable permissions handled by npm/pnpm