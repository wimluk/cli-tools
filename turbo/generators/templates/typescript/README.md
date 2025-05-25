# {{name}}

{{description}}

## Quick Start

```bash
# Install dependencies (if not already done)
pnpm install

# Run in development mode
pnpm dev --help

# Try the hello command
pnpm dev hello
pnpm dev hello "Your Name"
pnpm dev hello "Your Name" --uppercase
```

## Development

```bash
# Run the CLI in development
pnpm dev [command] [options]

# Watch mode - auto-restarts on file changes
pnpm dev:watch

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Type checking
pnpm check-types

# Linting
pnpm lint

# Build for production
pnpm build
```

## Usage (After Building)

```bash
# Build the CLI
pnpm build

# Run the built version
node dist/cli.js hello [name]

# Or if installed globally
{{name}} hello [name]
```

## Available Commands

- `hello [name]` - Say hello to someone (defaults to "world")
  - Options:
    - `-u, --uppercase` - Convert output to uppercase

## Project Structure

```
{{name}}/
├── src/
│   ├── cli.ts       # Main CLI entry point
│   └── cli.test.ts  # Tests
├── dist/            # Built output (generated)
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

## Adding New Commands

1. Edit `src/cli.ts`
2. Add your command using Commander.js syntax
3. Run `pnpm dev` to test
4. Add tests in `src/cli.test.ts`
5. Run `pnpm test` to verify