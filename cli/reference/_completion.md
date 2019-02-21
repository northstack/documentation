# _completion

## Usage
`northstack _completion [options]`

## Options
* **-g, --generate-hook**
  Generate BASH code that sets up completion for this application.
* **-p, --program=PROGRAM**
  Program name that should trigger completion (defaults to the absolute application path).
* **-m, --multiple**
  Generated hook can be used for multiple applications.
* **--shell-type[=SHELL-TYPE]**
  Set the shell type (zsh or bash). Otherwise this is determined automatically.