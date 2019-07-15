---
title: 'NorthStack CLI Command: org:user:add'
related: ['/cli/reference/org/user/list/', '/cli/reference/org/user/', '/cli/reference/org/']
description: 'Adds a user to your organization.'
---

# org:user:add

Adds a user to your organization.

## Usage

`northstack org:user:add [options] [--] <firstName> <lastName> <email> <permissions> (<permissions>)...`

## Arguments

-   **firstName**  
    The first name of the user to add.
-   **lastName**  
    The last name of the user to add.
-   **email**  
    The email address to associate with the user. This is where the invitation will be sent to.
-   **permissions**  
    The user's permissions.

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
-   **--org=ORG**  
    Org name (or ID) to run this command as
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
