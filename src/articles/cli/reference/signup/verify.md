---
title: 'NorthStack CLI Command: signup:verify'
related: ['/cli/']
description: 'Verifies a NorthStack signup phone verification text message.'
---

# signup:verify

Verifies a NorthStack signup phone verification text message.

## Usage

`northstack signup:verify [options] [--] <code>`

## Arguments

-   **code**  
    Code sent via text message

## Options

-   **--orgId=ORGID**  
    Org ID (if you have access to multiple orgs)
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
