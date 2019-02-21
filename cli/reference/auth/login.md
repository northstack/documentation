# auth:login

Logs into NorthStack and saves the access token.

Additional options can be passed to just show the access token instead of saving it.

## Usage
`northstack auth:login [options] [--] [<username>]`

## Arguments
* **username**

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