---
title: 'NorthStack CLI Command: stats:get'
related: ['/cli/']
description: 'Gets stats for a NorthStack app.'
---

# stats:get

Gets stats for a NorthStack app.

## Usage

`stats:get [options] [--] <type>`

## Arguments

-   **type**  
    The type of stats to get. [access, worker]

## Options

-   **--from=FROM**  
    From date, any format recognizable by strtotime [default: "-1 hour"]
-   **--to=TO**  
    To date, any format recognizable by strtotime [default: "now"]
-   **--window=WINDOW**  
    Aggregate data into this interval (minutes) [default: "1"]
-   **--field-set=FIELD-SET**  
    all, percentile, basic [default: "basic"]
-   **--orgId=ORGID**  
    Org ID
-   **--appId=APPID**  
    App id (multiple values allowed)
-   **--httpCode=HTTPCODE**  
    HTTP codes (200,404,etc) (multiple values allowed)
-   **--method=METHOD**  
    HTTP method, (GET, POST,etc) (multiple values allowed)
-   **--cacheStatus=CACHESTATUS**  
    Cache Status, (HIT, MISS, BYPASS) (multiple values allowed)
-   **--scheme=SCHEME**  
    HTTP scheme, (http, https) (multiple values allowed)
-   **--host=HOST**  
    hostname, (example.com, www.example.com) (multiple values allowed)
-   **--contentType=CONTENTTYPE**  
    Content Type, (assets,content) (multiple values allowed)
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
