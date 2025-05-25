import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';

describe('CLI', () => {
  it('should display help', () => {
    const output = execSync('tsx src/cli.ts --help', { encoding: 'utf8' });
    expect(output).toContain('{{name}}');
    expect(output).toContain('{{description}}');
    expect(output).toContain('Examples:');
    expect(output).toContain('$ {{name}} hello');
  });

  it('should display version', () => {
    const output = execSync('tsx src/cli.ts --version', { encoding: 'utf8' });
    expect(output).toContain('0.1.0');
  });
});