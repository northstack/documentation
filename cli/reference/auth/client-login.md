# auth:client-login

Logs into NorthStack using a client ID and secret, then saves the access token.

Additional options can be provided to show the access token instead of saving it.

## Uage
`northstack auth:client-login [options] [--] <clientId> <clientSecret>`

## Arguments
* **clientId**
* **clientSecret**

## Options
* **--scope=SCOPE**  
  Scope keys (multiple values allowed)
* **-s, --show**  
  Just show the token, do not save it!
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