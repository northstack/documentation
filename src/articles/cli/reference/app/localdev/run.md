---
title: "NorthStack CLI Command: app:localdev:run"
related: ["/cli/"]
description: "Runs a docker-compose command."
---

# app:localdev:run

Runs a docker-compose command.

## Usage
`northstack app:localdev:run [options] [--] [<run>]`

## Arguments
* **run**
  Command to run [default: ["help"]]

## Options
* **-e, --env=ENV**  
  Environment (prod, test, or dev) [default: "prod"]
* **-h, --help**  
  Display this help message
* **-q, --quiet**  
  Do not output any message
* **-V, --version**  
  Display this application version
* **--ansi**  
  Force ANSI output
* **--no-ansi**  
  Disable ANSI output
* **-n, --no-interaction**  
  Do not ask any interactive question
* **--no-time-limit**  
  Prevent the command from ending at the regular time limit
* **-v|vv|vvv, --verbose**  
  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug)