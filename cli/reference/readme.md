# NorthStack CLI Reference

The NorthStack CLI is a versitile tool that allows you to easily create and deploy apps on NorthStack.

## Usage

`northstack [command] [options] [arguments]`

## Commands

* _completion
* help
* list
* signup
* app
  * app:create
  * app:debug:launch-worker
  * app:deploy
  * app:info
  * app:list
  * app:localdev:logs
  * app:localdev:run
  * app:localdev:start
  * app:localdev:stop
  * app:logs
* auth
  * auth:client-login
  * auth:enable-2fa
  * auth:login
  * auth:logout
  * auth:whoami
* org
  * org:default
  * org:info
  * org:list 
  * org:user:list
* secrets
  * secrets:list
  * secrets:remove
  * secrets:set
* signup
  * signup:reverify
  * signup:verify

## Options

* -h, --help
* -q, --quiet
* -V, --version
* --ansi
* --no-ansi
* -n, --no-interaction
* --no-time-limit
* -v|vv|vvv, --verbose