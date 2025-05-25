package main

import (
	"fmt"
	"os"
	"strings"

	"github.com/fatih/color"
	"github.com/spf13/cobra"
)

var version = "0.1.0"

func main() {
	var uppercase bool

	rootCmd := &cobra.Command{
		Use:     "{{name}}",
		Short:   "{{description}}",
		Version: version,
	}

	helloCmd := &cobra.Command{
		Use:   "hello [name]",
		Short: "Say hello",
		Args:  cobra.MaximumNArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			name := "world"
			if len(args) > 0 {
				name = args[0]
			}

			message := fmt.Sprintf("Hello, %s!", name)
			if uppercase {
				message = strings.ToUpper(message)
			}

			color.Blue(message)
		},
	}

	helloCmd.Flags().BoolVarP(&uppercase, "uppercase", "u", false, "Convert to uppercase")
	rootCmd.AddCommand(helloCmd)

	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}