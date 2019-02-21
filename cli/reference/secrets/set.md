# secrets:set

## Usage
`northstack secrets:set [options] [--] <key> <value> [<environment>]`

## Arguments
* **key**
* **value**
* **environment**
  Environment [default: "dev"]

## Options
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