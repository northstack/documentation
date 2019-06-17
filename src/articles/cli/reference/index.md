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

* [_completion](/cli/reference/_completion.md)
* [help](/cli/reference/help.md)
* [list](/cli/reference/list.md)
* [signup](/cli/reference/signup.md)
* app
  * [app:create](/cli/reference/app/create.md)
  * [app:debug:launch-worker](/cli/reference/app/debug/launch-worker.md)
  * [app:deploy](/cli/reference/app/deploy.md)
  * [app:info](/cli/reference/app/info.md)
  * [app:list](/cli/reference/app/list.md)
  * [app:localdev:logs](/cli/reference/app/localdev/logs.md)
  * [app:localdev:run](/cli/reference/app/localdev/run.md)
  * [app:localdev:start](/cli/reference/app/localdev/start.md)
  * [app:localdev:stop](/cli/reference/app/localdev/stop.md)
  * [app:logs](/cli/reference/app/logs.md)
* auth
  * [auth:client-login](/cli/reference/auth/client-login.md)
  * [auth:enable-2fa](/cli/reference/auth/enable-2fa.md)
  * [auth:login](/cli/reference/auth/login.md)
  * [auth:logout](/cli/reference/auth/logout.md)
  * [auth:whoami](/cli/reference/auth/whoami.md)
* org
  * [org:default](/cli/reference/org/default.md)
  * [org:info](/cli/reference/org/info.md)
  * [org:list](/cli/reference/org/list.md)
  * [org:user:list](/cli/reference/org/user/list.md)
* secrets
  * [secrets:list](/cli/reference/secrets/list.md)
  * [secrets:remove](/cli/reference/secrets/remove.md)
  * [secrets:set](/cli/reference/secrets/set.md)
* signup
  * [signup:reverify](/cli/reference/signup/reverify.md)
  * [signup:verify](/cli/reference/signup/verify.md)

## Options

* -h, --help
* -q, --quiet
* -V, --version
* --ansi
* --no-ansi
* -n, --no-interaction
* --no-time-limit
* -v|vv|vvv, --verbose