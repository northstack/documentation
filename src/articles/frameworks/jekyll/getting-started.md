---
title: "Jekyll Getting Started Guide"
description: "In this article, we'll show you how to create and deploy a new Jekyll app on NorthStack."
related: ["/frameworks/jekyll/installing-jekyll/", "/getting-started/", "/frameworks/jekyll/"]
---

# Getting Started with Jekyll

Jekyll is a great way to create static sites on NorthStack. Instead of using databases and dynamic code that renders server-side, Jekyll allows you to generate static files for your entire site. In this article, we'll show you how to create and deploy a new Jekyll app on NorthStack.

## Requirements
* [NorthStack CLI](/cli/)
* [Jekyll](/frameworks/jekyll/installing-jekyll/)

## Creating a New Jekyll App

Creating a new Jekyll app is easy with NorthStack. In this section, we'll show you how to create a new app on NorthStack and configure Jekyll.

1. Begin by opening a new Terminal window.
2. Next, create a new static app in NorthStack by running the following NorthStack CLI command:
   
   ```shell
   northstack app:create JekyllExample example.com jekyll
   ```

3. Now that your app is created, access the location of your newly created NorthStack app:
   
   ```shell
   cd JekyllExample
   ```

4. From inside your app, run the following to create a new Jekyll app within the *app* directory:
   
   ```shell
   jekyll new app --force
   ```

## Building Your Jekyll App

If you followed along in the previous section, you should now have a new NorthStack app with a Jekyll configuration installed inside the *app* directory. Here's how to build it:

While inside your NorthStack app, run the following command:

```shell
jekyll build -s ./app -d ./app/public
```

## Deploying Your Jekyll App

Deploying a Jekyll app is the same as deploying any other app on NorthStack. To deploy your Jekyll app, run the following command:

```shell
northstack app:deploy "My Deploy Message" JekyllExample dev
```

Your Jekyll app has now been deployed!