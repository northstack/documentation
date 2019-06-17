---
title: "NorthStack CLI Commands: _completion"
related: ["/cli/macos/", "/cli/reference/"]
description: "Enables the NorthStack auto-completion bash hook."
---

# _completion

Enables the NorthStack auto-completion bash hook.

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