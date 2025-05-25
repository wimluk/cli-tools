#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('{{name}}')
  .description('{{description}}')
  .version('0.1.0');

program
  .command('hello [name]')
  .description('Say hello')
  .option('-u, --uppercase', 'Convert to uppercase')
  .action((name = 'world', options) => {
    const message = `Hello, ${name}!`;
    console.log(
      chalk.blue(options.uppercase ? message.toUpperCase() : message)
    );
  });

program.parse();