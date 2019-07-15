---
title: 'NorthStack CLI Command: signup:reverify'
related: ['/cli/']
description: 'Displays configuration settings for your NorthStack environment.'
---

# settings:info

"Displays configuration settings for your NorthStack environment.

## Usage

`northstack settings:info`

## Options

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
    Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug)

## Example Output

```
---------------- ----------------------------------------------------------------------------------
  Key              Value
 ---------------- ----------------------------------------------------------------------------------
  local_apps_dir   '/Users/example/northstack/apps'
  local_apps_map   array (
                     'ExampleSite' =>
                     array (
                       'id' => 'dsfFDSfsdFDfdFDfdfdf',
                       'orgId' => 'asdfFhfgHGFhDFGdfg',
                       'stack' => 'STATIC',
                       'localPath' => '/Users/example/northstack/apps/ExampleSite',
                     ),
                   )
 ---------------- ----------------------------------------------------------------------------------
```
