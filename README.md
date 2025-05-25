# CLI Tools Monorepo

A multi-language monorepo for building CLI tools using TypeScript, Go, Rust, and Python, powered by Turborepo.

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0
- Go >= 1.21 (for Go tools)
- Rust >= 1.70 (for Rust tools)
- Python >= 3.8 (for Python tools)

### Installation

```bash
# Install dependencies
pnpm install

# Build all tools
pnpm build

# Run tests
pnpm test
```

## 📁 Project Structure

```
cli-tools/
├── packages/           # Shared packages
│   ├── eslint-config/ # Shared ESLint configurations
│   ├── typescript-config/ # Shared TypeScript configurations
│   └── ui/            # Shared UI components (if needed)
├── tools/             # CLI tools organized by language
│   ├── typescript/    # TypeScript CLI tools
│   ├── go/           # Go CLI tools
│   ├── rust/         # Rust CLI tools
│   └── python/       # Python CLI tools
├── turbo.json        # Turborepo configuration
└── package.json      # Root package configuration
```

## 🛠️ Available Commands

### Building

```bash
# Build all tools
pnpm build

# Build TypeScript tools only
pnpm build:ts

# Build Go tools only
pnpm build:go

# Build Rust tools only
pnpm build:rust

# Build Python tools only
pnpm build:python
```

### Linting

```bash
# Lint all code
pnpm lint

# Lint TypeScript code only
pnpm lint:ts

# Lint Go code only
pnpm lint:go

# Lint Rust code only
pnpm lint:rust

# Lint Python code only
pnpm lint:python
```

### Development

```bash
# Run in development mode
pnpm dev

# Format code
pnpm format

# Type checking
pnpm check-types

# Clean build artifacts
pnpm clean
```

## 🔧 Creating a New CLI Tool

### Using Turbo Generator (Recommended)

The easiest way to create a new CLI tool is using the built-in Turbo generator:

```bash
pnpm turbo gen cli-tool
```

You'll be prompted to:
1. Choose a language (TypeScript, Go, Rust, or Python)
2. Enter the tool name
3. Provide a description

The generator will create a fully configured CLI tool with:
- Proper package structure
- Build configuration
- Sample CLI implementation
- Testing setup
- README documentation

### Manual Creation

#### TypeScript Tool

1. Create a new directory in `tools/typescript/`
2. Initialize with `pnpm init`
3. Add TypeScript dependencies
4. Configure build scripts

#### Go Tool

1. Create a new directory in `tools/go/`
2. Initialize with `go mod init`
3. Add build configuration to package.json

#### Rust Tool

1. Create a new directory in `tools/rust/`
2. Initialize with `cargo init`
3. Add build configuration to package.json

#### Python Tool

1. Create a new directory in `tools/python/`
2. Create `pyproject.toml` for package configuration
3. Add package.json for Turborepo integration

## 🏗️ Architecture

This monorepo uses Turborepo to manage builds across multiple languages:

- **TypeScript tools**: Built with tsc/esbuild, output to `dist/`
- **Go tools**: Built with go build, output to `bin/`
- **Rust tools**: Built with cargo, output to `target/`
- **Python tools**: Use pip/setuptools, output to `dist/`

Shared packages in the `packages/` directory can be used across TypeScript tools.

## 🚀 Remote Caching

Turborepo can use a technique known as Remote Caching to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
npx turbo login
npx turbo link
```

## 📝 License

This project is licensed under the MIT License.