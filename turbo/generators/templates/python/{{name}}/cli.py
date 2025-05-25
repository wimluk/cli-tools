#!/usr/bin/env python3
"""CLI for {{name}}."""

import click
from colorama import Fore, Style, init

# Initialize colorama for cross-platform colored output
init(autoreset=True)

__version__ = "0.1.0"


@click.group()
@click.version_option(version=__version__)
def cli():
    """{{description}}"""
    pass


@cli.command()
@click.argument("name", default="world")
@click.option("-u", "--uppercase", is_flag=True, help="Convert to uppercase")
def hello(name, uppercase):
    """Say hello."""
    message = f"Hello, {name}!"
    if uppercase:
        message = message.upper()
    
    click.echo(f"{Fore.BLUE}{message}{Style.RESET_ALL}")


def main():
    """Entry point for the CLI."""
    cli()


if __name__ == "__main__":
    main()