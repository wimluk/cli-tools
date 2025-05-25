# Go CLI Tools - CLAUDE.md

This file provides guidance to Claude Code when working with Go CLI tools in this directory.

## Conventions

### Project Structure
- Each tool has its own `go.mod` and `package.json` (for Turborepo)
- Main entry point: `cmd/{toolname}/main.go`
- Binary output: `bin/{toolname}`
- Tests alongside source: `*_test.go`

### Dependencies
- **Cobra**: CLI framework (preferred over flag package)
- **fatih/color**: Terminal colors
- Minimal dependencies preferred

### Common Commands
```bash
pnpm dev      # Run in development mode
pnpm build    # Build binary to bin/
pnpm test     # Run tests
pnpm lint     # golangci-lint
```

### Code Style
- Standard Go formatting (gofmt)
- Error handling: return early
- Table-driven tests
- Descriptive variable names
- Package-level documentation

### Testing
- Use standard `testing` package
- Table-driven test pattern
- Test files next to source files
- Focus on behavior, not implementation

### Build Configuration
- Static binaries when possible
- Cross-compilation ready
- Version info embedded in binary