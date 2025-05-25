# {{name}}

{{description}}

## Prerequisites

- Python 3.8 or higher
- pip

## Installation

```bash
pip install -e ".[dev]"
```

## Development

```bash
pnpm dev
# or
python -m {{name}}.cli
```

## Usage

```bash
{{name}} hello [NAME]
{{name}} hello --uppercase [NAME]
{{name}} --version
{{name}} --help
```

## Testing

```bash
pnpm test
# or
pytest
```

## Linting

```bash
pnpm lint
# or
ruff check .
```

## Formatting

```bash
pnpm format
# or
ruff format .
```