use clap::{Parser, Subcommand};
use colored::*;

#[derive(Parser)]
#[command(name = "{{name}}")]
#[command(about = "{{description}}")]
#[command(version = "0.1.0")]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Say hello
    Hello {
        /// Name to greet
        #[arg(default_value = "world")]
        name: String,

        /// Convert to uppercase
        #[arg(short, long)]
        uppercase: bool,
    },
}

fn main() {
    let cli = Cli::parse();

    match cli.command {
        Commands::Hello { name, uppercase } => {
            let message = format!("Hello, {}!", name);
            let output = if uppercase {
                message.to_uppercase()
            } else {
                message
            };
            println!("{}", output.blue());
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_hello_message() {
        let message = format!("Hello, {}!", "Rust");
        assert_eq!(message, "Hello, Rust!");
    }

    #[test]
    fn test_uppercase() {
        let message = "Hello, world!";
        assert_eq!(message.to_uppercase(), "HELLO, WORLD!");
    }
}