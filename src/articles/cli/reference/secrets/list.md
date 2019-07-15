---
title: 'NorthStack CLI Command: secrets:list'
related: ['/cli/']
description: 'Lists app secrets.'
---

# secrets:list

Lists app secrets.

## Usage

`secrets:list [options] [--] <name> [<environment>]`

## Arguments

-   **name**  
    The app name
-   **environment**  
    Environment [default: "dev"]

## Options

-   **--show**  
    Show Secret Values
-   **--authToken=AUTHTOKEN**  
    Access Token
-   **--authClientId=AUTHCLIENTID**  
    OAuth Client ID [default: 2]
-   **--authClientSecret=AUTHCLIENTSECRET**  
    Client Secret
-   **--authUsername=AUTHUSERNAME**  
    Username
-   **--authPassword=AUTHPASSWORD**  
    Password
-   **--authMfa=AUTHMFA**  
    MFA Code
-   **--authScope=AUTHSCOPE**  
    Scopes (multiple values allowed)
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
