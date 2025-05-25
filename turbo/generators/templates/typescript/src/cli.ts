#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('{{name}}')
  .description('{{description}}')
  .version('0.1.0')
  .addHelpText('after', `
Examples:
  $ {{name}} hello              # Says "Hello, world!"
  $ {{name}} hello Alice        # Says "Hello, Alice!"
  $ {{name}} hello Bob -u       # Says "HELLO, BOB!" (uppercase)
  $ {{name}} hello --uppercase  # Says "HELLO, WORLD!"
`);

program
  .command('hello [name]', { isDefault: true })
  .description('Say hello to someone (default: world)')
  .option('-u, --uppercase', 'Display the greeting in uppercase letters')
  .addHelpText('after', `
Examples:
  $ {{name}} hello              # Greets the world
  $ {{name}} hello Alice        # Greets Alice
  $ {{name}} hello Bob -u       # Greets Bob in uppercase
`)
  .action((name = 'world', options) => {
    const message = `Hello, ${name}!`;
    console.log(
      chalk.blue(options.uppercase ? message.toUpperCase() : message)
    );
  });

program.parse();