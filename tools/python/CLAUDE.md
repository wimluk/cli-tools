# Python CLI Tools - CLAUDE.md

This file provides guidance to Claude Code when working with Python CLI tools in this directory.

## Conventions

### Project Structure
- Each tool is a Python package with `pyproject.toml` and `package.json` (for Turborepo)
- Package structure: `{toolname}/` with `__init__.py`, `cli.py`, `__main__.py`
- Entry point: `{toolname}/cli.py`
- Tests in `tests/` directory

### Dependencies
- **Click**: CLI framework (preferred over argparse)
- **Colorama**: Cross-platform terminal colors
- **Ruff**: Linting and formatting
- **Pytest**: Testing framework

### Common Commands
```bash
pnpm dev      # python -m {toolname}.cli
pnpm test     # pytest
pnpm lint     # ruff check .
pnpm format   # ruff format .
```

### Code Style
- Follow PEP 8 via Ruff
- Type hints where beneficial
- Docstrings for public functions
- f-strings for formatting
- Context managers for resources

### Testing
- Pytest with Click's CliRunner
- Test files: `test_*.py`
- Focus on CLI behavior
- Use fixtures for setup

### Packaging
- Modern `pyproject.toml` configuration
- Entry points defined for CLI commands
- Support Python 3.8+
- Include py.typed for type checking