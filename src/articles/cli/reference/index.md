---
title: "NorthStack CLI Command Reference"
related: ["/cli/macos/", "/cli/"]
description: "The NorthStack CLI is a versitile tool that allows you to easily create and deploy apps on NorthStack."
type: "archive"
---

# NorthStack CLI Reference

The NorthStack CLI is a versitile tool that allows you to easily create and deploy apps on NorthStack.

## Usage

`northstack [command] [options] [arguments]`

## Commands

* [help](/cli/reference/help/)
* [list](/cli/reference/list/)
* [signup](/cli/reference/signup/)
* app
  * [app:create](/cli/reference/app/create/)
  * [app:debug:launch-worker](/cli/reference/app/debug/launch-worker/)
  * [app:deploy](/cli/reference/app/deploy/)
  * [app:fetch](/cli/reference/app/fetch/)
  * [app:info](/cli/reference/app/info/)
  * [app:list](/cli/reference/app/list/)
  * [app:localdev:logs](/cli/reference/app/localdev/logs/)
  * [app:localdev:run](/cli/reference/app/localdev/run/)
  * [app:localdev:start](/cli/reference/app/localdev/start/)
  * [app:localdev:stop](/cli/reference/app/localdev/stop/)
  * [app:logs](/cli/reference/app/logs/)
* auth
  * [auth:client-login](/cli/reference/auth/client-login/)
  * [auth:enable-2fa](/cli/reference/auth/enable-2fa/)
  * [auth:login](/cli/reference/auth/login/)
  * [auth:logout](/cli/reference/auth/logout/)
  * [auth:whoami](/cli/reference/auth/whoami/)
* org
  * [org:default](/cli/reference/org/default/)
  * [org:info](/cli/reference/org/info/)
  * [org:list](/cli/reference/org/list/)
  * [org:user:list](/cli/reference/org/user/list/)
* secrets
  * [secrets:list](/cli/reference/secrets/list/)
  * [secrets:remove](/cli/reference/secrets/remove/)
  * [secrets:set](/cli/reference/secrets/set/)
* signup
  * [signup:reverify](/cli/reference/signup/reverify/)
  * [signup:verify](/cli/reference/signup/verify/)

## Options

* -h, --help
* -q, --quiet
* -V, --version
* --ansi
* --no-ansi
* -n, --no-interaction
* --no-time-limit
* -v|vv|vvv, --verbose