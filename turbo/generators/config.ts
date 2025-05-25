import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // Generator for creating new CLI tools
  plop.setGenerator('cli-tool', {
    description: 'Create a new CLI tool',
    prompts: [
      {
        type: 'list',
        name: 'language',
        message: 'Which language would you like to use?',
        choices: ['typescript', 'go', 'rust', 'python'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your CLI tool?',
        validate: (input: string) => {
          if (!input) {
            return 'CLI tool name is required';
          }
          // Validate name format (lowercase, hyphens allowed)
          if (!/^[a-z][a-z0-9-]*$/.test(input)) {
            return 'Name must start with lowercase letter and contain only lowercase letters, numbers, and hyphens';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your CLI tool:',
        default: 'A CLI tool built with Turborepo',
      },
    ],
    actions: (data) => {
      const actions: PlopTypes.ActionType[] = [];

      if (!data) return actions;

      const { language, name, description } = data;

      switch (language) {
        case 'typescript':
          actions.push(
            {
              type: 'addMany',
              destination: `tools/typescript/{{name}}`,
              base: 'templates/typescript',
              templateFiles: 'templates/typescript/**/*',
              data: { name, description },
            },
            {
              type: 'modify',
              path: `tools/typescript/{{name}}/package.json`,
              transform: (content: string) => {
                const pkg = JSON.parse(content);
                pkg.name = `@cli-tools/${name}`;
                return JSON.stringify(pkg, null, 2);
              },
            }
          );
          break;

        case 'go':
          actions.push(
            {
              type: 'addMany',
              destination: `tools/go/{{name}}`,
              base: 'templates/go',
              templateFiles: 'templates/go/**/*',
              data: { name, description },
            },
            {
              type: 'modify',
              path: `tools/go/{{name}}/go.mod`,
              transform: (content: string) => {
                return content.replace('{{module}}', `github.com/cli-tools/${name}`);
              },
            }
          );
          break;

        case 'rust':
          actions.push(
            {
              type: 'addMany',
              destination: `tools/rust/{{name}}`,
              base: 'templates/rust',
              templateFiles: 'templates/rust/**/*',
              data: { name, description },
            }
          );
          break;

        case 'python':
          actions.push(
            {
              type: 'addMany',
              destination: `tools/python/{{name}}`,
              base: 'templates/python',
              templateFiles: 'templates/python/**/*',
              data: { name, description },
            }
          );
          break;
      }

      // Common action for all languages
      actions.push({
        type: 'append',
        path: '.gitignore',
        pattern: /# Build outputs/,
        template: '',
        skip: () => 'Skipping .gitignore update',
      });

      // Add a custom action to display next steps and run install
      actions.push(async (answers) => {
        console.log('\n✅ CLI tool created successfully!\n');
        console.log('📦 Installing dependencies...');
        
        // Run pnpm install
        const { execSync } = require('child_process');
        try {
          execSync('pnpm install', { 
            stdio: 'inherit',
            cwd: process.cwd()
          });
          console.log('\n✨ Dependencies installed successfully!\n');
          console.log('🚀 Next steps:');
          console.log(`   1. Navigate to: cd tools/${language}/${name}`);
          console.log(`   2. Try it out: pnpm dev --help`);
        } catch (error) {
          console.log('\n⚠️  Failed to install dependencies automatically.');
          console.log('\n📦 Next steps:');
          console.log(`   1. Run: pnpm install`);
          console.log(`   2. Navigate to: cd tools/${language}/${name}`);
          console.log(`   3. Try it out: pnpm dev --help`);
        }
        
        console.log('\n💡 Tip: Check the README.md in your new tool for more commands.\n');
        return 'Post-generation completed';
      });

      return actions;
    },
  });
}