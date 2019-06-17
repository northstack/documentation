---
title: "WordPress Getting Started Guide"
description: "The WordPress project brags about how easy it is to install. While it is indeed incredibly quick and easy to install, did you know that it's even faster and easier on NorthStack? Here's now to create a new WordPress installation on NorthStack."
related: ["/frameworks/wordpress/", "/getting-started/"]
---

# Getting Started with WordPress on NorthStack

## Creating Your WordPress App

The WordPress project brags about how easy it is to install. While it is indeed incredibly quick and easy to install, did you know that it's even faster and easier on NorthStack? Here's now to create a new WordPress installation on NorthStack.

1. Access your terminal where you have the NorthStack CLI installed. If you haven't yet installed the NorthStack CLI, take a look at our guide on [getting started with NorthStack](/getting-started/) for more information. 
2. Within your terminal, enter the following command:
    ```shell
    northstack app:create "MyAppName" "myappname.com" wordpress
    ```
3. The NorthStack CLI will now prompt you for additional information such as the site title, administrator user, and password.

Once you've entered all of the required information, your app is created and ready to go!

## Deploying Your WordPress App

Now that you've created a WordPress app on NorthStack, it's time to deploy it. Deploying a NorthStack app is as simple as entering in the following command:

```shell
northstack app:deploy "My Release Title" "MyAppName" dev
```

The NorthStack CLI will now build your WordPress app and deploy it the environment you defined (in the example above, your development environment). Your WordPress app is now deployed!

## Additional Resources

Now that you know how to create and deploy a WordPress app on NorthStack, here are a few additional resources that you might find useful:

* [Pointing Domains to a NorthStack App](/general/pointing-domains/)