---
title: "Recovering Your WordPress Admin Credentials"
description: "Did you just make a new WordPress app on NorthStack and already forgot your admin credentials? We get it. In this article, we'll show you how to get your WordPress admin credentials."
related: ["/frameworks/wordpress/getting-started/", "/frameworks/wordpress/"]
---

# Recovering Your WordPress Admin Credentials

Did you just make a new WordPress app on NorthStack and already forgot your admin credentials? We get it. In this article, we'll show you how to get your WordPress admin credentials.

## Recovering Initial Admin Passwords

If you didn't set a password when you created your WordPress app on NorthStack, a password will automatically be created for you and stored within an app secret. To view the contents any stored secrets for your app, you can use the secrets:list command like this:

```shell
northstack secrets:list MyAppName --show
```

The password used when initially creating the app will be stored inside the `wp_initial_admin_pass` key.

### Example Output

```
 ----------------------- ---------------------------------- --------------------------- ---------
  Key                     Value                              Created                     Updated
 ----------------------- ---------------------------------- --------------------------- ---------
  wp_initial_admin_pass   i23f6ihi23gu456i6vjh235yhf56723g   2019-08-05T20:09:12+00:00
 ----------------------- ---------------------------------- --------------------------- ---------
 ```