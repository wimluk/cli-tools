package main

import (
	"bytes"
	"testing"

	"github.com/spf13/cobra"
)

func TestHelloCommand(t *testing.T) {
	tests := []struct {
		name     string
		args     []string
		expected string
	}{
		{
			name:     "default name",
			args:     []string{"hello"},
			expected: "Hello, world!",
		},
		{
			name:     "custom name",
			args:     []string{"hello", "Go"},
			expected: "Hello, Go!",
		},
		{
			name:     "uppercase flag",
			args:     []string{"hello", "--uppercase"},
			expected: "HELLO, WORLD!",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cmd := &cobra.Command{}
			buf := new(bytes.Buffer)
			cmd.SetOut(buf)
			cmd.SetErr(buf)
			cmd.SetArgs(tt.args)

			// Note: This is a simplified test structure
			// In a real implementation, you'd test the actual command execution
			// This demonstrates the testing pattern
		})
	}
}