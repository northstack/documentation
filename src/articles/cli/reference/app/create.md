---
title: 'NorthStack CLI Command: app:create'
related: ['/cli/reference/app/deploy/', '/cli/reference/app/fetch/', '/cli/reference/app/list/']
description: 'Creates a new NorthStack app.'
---

# app:create

Creates a new NorthStack app.

## Usage

`northstack app:create [options] [--] <name> <primaryDomain>`

## Arguments

-   **name**  
    The name of the app to create.
-   **primaryDomain**  
    The primary domain to associate with the new app.
-   **stack**  
    Application stack type (one of: [wordpress, static, jekyll, gatsby]).

## Options

-   **--frameworkVersion=FRAMEWORKVERSION**  
    Framework version (if not static app)
-   **--frameworkConfig=FRAMEWORKCONFIG**  
    Framework config object
-   **--cluster=CLUSTER**  
    Deployment location [default: "dev-us-east-1"]
-   **--orgId=ORGID**  
    Only needed if you have access to multiple organizations
-   **--useDefaultLocation=USEDEFAULTLOCATION**  
    Only needed if you have access to multiple organizations
-   **--appSlug=APPSLUG**
    Name to use for the app's local directory and local reference
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
