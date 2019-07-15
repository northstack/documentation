---
title: 'NorthStack CLI Command: app:localdev:build'
related:
    [
        '/cli/reference/app/localdev/start/',
        '/cli/reference/app/localdev/run/',
        '/cli/reference/app/localdev/stop/',
        '/cli/reference/app/localdev/',
    ]
description: "Runs a NorthStack app's build scripts for local development."
---

# app:localdev:start

Runs a NorthStack app's build scripts for local development.

## Usage

`app:localdev:build [options] [--] <name>`

## Arguments

-   **name**
    The local app directory's name.

## Options

-   **-e, --env=ENV**  
    Environment (prod, test, or dev) [default: "prod"]
-   **-h, --help**  
    Display this help message
-   **-q, --quiet**  
    Do not output any message
-   **-V, --version**  
    Display this application version
-   **--ansi**  
    Force ANSI output
-   **--no-ansi**  
    Disable ANSI output
-   **-n, --no-interaction**  
    Do not ask any interactive question
-   **-v|vv|vvv, --verbose**  
    Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
