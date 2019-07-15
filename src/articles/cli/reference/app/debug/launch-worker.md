---
title: 'NorthStack CLI Command: app:debug:launch-worker'
related: ['/cli/']
description: 'Launches an additional NorthStack worker.'
---

# app:debug:launch-worker

Launches an additional NorthStack worker.

NorthStack will launch additional workers for you as needed. This command can be used for debugging, or to prime additional capacity.

Note that unused capacity will shut off after the inactivity period.

## Usage

`northstack app:debug:launch-worker [options] [--] <name> <environment>`

## Arguments

-   **name**  
    App name
-   **environment**  
    Environment (prod, test, or dev)

## Options

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
    Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
