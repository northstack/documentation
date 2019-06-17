---
title: "Gatsby Getting Started Guide"
description: "In this article, we'll show you how to create, build, and deploy a static app using Gatsby on NorthStack."
related: ["/getting-started/", "/frameworks/gatsby/installing-gatsby/", "/frameworks/gatsby/"]
---

# Getting Started with Gatsby

In this article, we'll show you how to create, build, and deploy a static app using Gatsby on NorthStack.

## Requirements

* A NorthStack account
* The [NorthStack CLI](/cli/)
* The [Gatsby CLI](/gatsby/installing-gatsby/)

## Creating Your Gatsby App

1. Begin by opening up a new terminal window.
2. Next, create a new NorthStack app with the following command:

    ```shell
    northstack app:create GatsbyExample example.com static
    ```

3. Once your app is created, jump over to your app's main directory like this:

    ```shell
    cd ~/northstack/GatsbyExample
    ```
4. Since we'll be creating a new app directory using Gatsby, go ahead and delete the existing directory:
   
    ```shell
    rm -rf app
    ```

5. Finally, using the Gatsby CLI, create a new Gatsby app:
   
    ```shell
    gatsby new app
    ```

Your Gatsby app is now created inside the `app` directory. Your app is now ready to be built and deployed!

## Building Your Gatsby App

If you followed along with the previous section, you should now have a new Gatsby app that's ready to be built. To build your new Gatsby app, perform the following steps:

1. First, switch to the app directory like this:
   
    ```shell
    cd app
    ```

2. Then initiate the build process with the Gatsby CLI:
   
    ```shell
    gatsby build
    ```

Upon initiating the build process, the Gatsby CLI will generate your static files inside the `public` directory. Once the build has completed, you're ready to deploy your app to NorthStack!

## Deploying Your Gatsby App

Deploying a NorthStack app is incredibly easy and is meant to work well into existing workflows. Simply deploy it to your development environment using the following command:

```shell
northstack app:deploy "My Deploy Message" GatsbyExample dev
```

After issuing the `app:deploy` command, the NorthStack CLI will package your app and deploy it. When the deployment has finished and you've confirmed that everything is how you want it, go ahead and deploy it to production like this:

```shell
northstack app:deploy "My Deploy Message" GatsbyExample prod
```

Your Gatsby app is now created and deployed using NorthStack! Go forth and build something awesome!