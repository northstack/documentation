---
title: "NorthStack CLI Command: app:logs"
related: ["/cli/"]
description: "Displays the logs for a NorthStack app."
---

# app:logs

Displays the logs for a NorthStack app.

## Usage
`northstack app:logs [options] [--] <name> <environment> <topic>`

## Arguments
* **name**  
  App name
* **environment**  
  Environment (prod, test, or dev)
* **topic**  
  Log type (access, error, build)

## Options
* **-t, --topicOverride=TOPICOVERRIDE**  
  Override Topic (You should know what you are doing if you are using this)
* **--json**  
  Output raw json
* **--authToken=AUTHTOKEN**  
  Access Token
* **--authClientId=AUTHCLIENTID**  
  OAuth Client ID [default: 2]
* **--authClientSecret=AUTHCLIENTSECRET**  
  Client Secret
* **--authUsername=AUTHUSERNAME**  
  Username
* **--authPassword=AUTHPASSWORD**  
  Password
* **--authMfa=AUTHMFA**  
  MFA Code
* **--authScope=AUTHSCOPE**  
  Scopes (multiple values allowed)
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