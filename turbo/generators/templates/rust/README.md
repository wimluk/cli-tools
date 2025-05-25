# {{name}}

{{description}}

## Prerequisites

- Rust 1.70 or higher

## Development

```bash
pnpm dev
# or
cargo run
```

## Building

```bash
pnpm build
# or
cargo build --release
```

The binary will be available at `target/release/{{name}}`

## Usage

```bash
{{name}} hello [NAME]
{{name}} hello --uppercase [NAME]
{{name}} --help
```

## Testing

```bash
pnpm test
# or
cargo test
```

## Linting

```bash
pnpm lint
# or
cargo clippy -- -D warnings
```