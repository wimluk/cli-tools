# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a multi-language CLI tools monorepo using:
- **Languages**: TypeScript, Go, Rust, and Python
- **Build System**: Turborepo (v2.5.3)
- **Package Manager**: pnpm (v9.0.0)
- **Node Version**: >=18
- **Python Version**: >=3.8

## Common Commands

```bash
# Development
pnpm dev          # Run tools in development mode
pnpm install      # Install dependencies

# Building
pnpm build        # Build all tools
pnpm build:ts     # Build TypeScript tools only
pnpm build:go     # Build Go tools only
pnpm build:rust   # Build Rust tools only
pnpm build:python # Build Python tools only

# Code Quality
pnpm lint         # Lint all code
pnpm lint:ts      # Lint TypeScript code
pnpm lint:go      # Lint Go code
pnpm lint:rust    # Lint Rust code
pnpm lint:python  # Lint Python code
pnpm format       # Format code with Prettier
pnpm check-types  # TypeScript type checking
pnpm test         # Run all tests

# Maintenance
pnpm clean        # Clean build artifacts

# Package Management
pnpm add <package> --filter=<tool-name>  # Add dependency to specific tool
```

## Architecture

### Directory Structure
```
cli-tools/
├── packages/              # Shared packages (TypeScript only)
│   ├── eslint-config/    # Shared ESLint configurations
│   ├── typescript-config/# Shared TypeScript configurations
│   └── ui/               # Shared UI components
├── tools/                # CLI tools by language
│   ├── typescript/       # TypeScript CLI tools
│   ├── go/              # Go CLI tools
│   ├── rust/            # Rust CLI tools
│   └── python/          # Python CLI tools
├── turbo.json           # Turborepo pipeline configuration
└── pnpm-workspace.yaml  # Workspace configuration
```

### Language-Specific Conventions

#### TypeScript Tools
- Located in `tools/typescript/`
- Build output: `dist/`
- Use shared packages from `@repo/*`
- Package.json scripts: `build`, `lint`, `test`, `dev`

#### Go Tools
- Located in `tools/go/`
- Build output: `bin/`
- Each tool has its own `go.mod`
- Package.json wraps Go commands for Turborepo integration

#### Rust Tools
- Located in `tools/rust/`
- Build output: `target/`
- Each tool has its own `Cargo.toml`
- Package.json wraps Cargo commands for Turborepo integration

#### Python Tools
- Located in `tools/python/`
- Build output: `dist/`
- Each tool has its own `pyproject.toml`
- Package.json wraps Python commands for Turborepo integration
- Uses Click for CLI framework, pytest for testing

### Creating New Tools

#### Using Turbo Generator (Recommended)
```bash
pnpm turbo gen cli-tool
```

The generator will:
- Prompt for language choice (TypeScript, Go, Rust, or Python)
- Ask for tool name and description
- Create complete tool structure with build configs, sample CLI, and tests

#### Manual Creation
1. **TypeScript**: Create directory in `tools/typescript/`, run `pnpm init`, add TypeScript deps
2. **Go**: Create directory in `tools/go/`, run `go mod init`, create package.json wrapper
3. **Rust**: Create directory in `tools/rust/`, run `cargo init`, create package.json wrapper
4. **Python**: Create directory in `tools/python/`, create `pyproject.toml`, create package.json wrapper

### Turborepo Pipeline

The `turbo.json` defines language-specific tasks:
- `build`, `build:ts`, `build:go`, `build:rust`, `build:python`
- `lint`, `lint:ts`, `lint:go`, `lint:rust`, `lint:python`
- `test` (runs across all languages)
- `clean` (no cache)

Output directories are configured per language for proper caching.