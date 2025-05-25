# {{name}}

{{description}}

## Prerequisites

- Go 1.21 or higher

## Installation

```bash
go mod download
```

## Development

```bash
pnpm dev
# or
go run ./cmd/{{name}}
```

## Building

```bash
pnpm build
# or
go build -o bin/{{name}} ./cmd/{{name}}
```

## Usage

```bash
{{name}} hello [name]
{{name}} version
```

## Testing

```bash
pnpm test
# or
go test ./...
```