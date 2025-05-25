# Rust CLI Tools - CLAUDE.md

This file provides guidance to Claude Code when working with Rust CLI tools in this directory.

## Conventions

### Project Structure
- Each tool has its own `Cargo.toml` and `package.json` (for Turborepo)
- Main entry point: `src/main.rs`
- Binary output: `target/release/{toolname}`
- Unit tests in same file with `#[cfg(test)]`

### Dependencies
- **Clap**: CLI framework with derive macros
- **colored**: Terminal colors
- Minimal dependencies, prefer std library

### Common Commands
```bash
pnpm dev      # cargo run
pnpm build    # cargo build --release
pnpm test     # cargo test
pnpm lint     # cargo clippy
```

### Code Style
- Use `rustfmt` defaults
- Prefer `Result` over `panic!`
- Use `?` operator for error propagation
- Derive macros over manual implementations
- Document public APIs

### Testing
- Unit tests at bottom of source files
- Use `#[cfg(test)]` module
- Test edge cases and errors
- Keep tests simple and focused

### Performance
- Release builds for production
- Consider binary size (strip symbols)
- Profile before optimizing
- Prefer zero-copy operations