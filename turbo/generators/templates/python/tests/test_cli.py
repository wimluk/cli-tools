"""Tests for {{name}} CLI."""

from click.testing import CliRunner
from {{name}}.cli import cli


def test_version():
    """Test version output."""
    runner = CliRunner()
    result = runner.invoke(cli, ["--version"])
    assert result.exit_code == 0
    assert "0.1.0" in result.output


def test_hello_default():
    """Test hello command with default name."""
    runner = CliRunner()
    result = runner.invoke(cli, ["hello"])
    assert result.exit_code == 0
    assert "Hello, world!" in result.output


def test_hello_custom_name():
    """Test hello command with custom name."""
    runner = CliRunner()
    result = runner.invoke(cli, ["hello", "Python"])
    assert result.exit_code == 0
    assert "Hello, Python!" in result.output


def test_hello_uppercase():
    """Test hello command with uppercase flag."""
    runner = CliRunner()
    result = runner.invoke(cli, ["hello", "--uppercase"])
    assert result.exit_code == 0
    assert "HELLO, WORLD!" in result.output