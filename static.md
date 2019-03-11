# Static Apps

Deploying a static app powered by HTML, CSS, and JavaScript is easy on NorthStack. In this article, we'll show you how to create and deploy a static app within minutes.

## Requirements

If you haven't already, you'll want to read over our Getting Started Guide that will walk you through the basics of getting started with the NorthStack CLI. At a minimum, you should already have the NorthStack CLI installed and ready to use on your local machine.

## Creating a Static NorthStack App

To begin, let's go ahead and create a new NorthStack app. Open a new terminal window and enter the following command to create a new app with the NorthStack CLI:

```shell
northstack app:create "MyStaticApp" "example.com" --stack=static
```

If all went well, your new static app should now be created!

## Updating App Files

To update the contents of your app, place them within the `app/public` directory inside your main NorthStack app contents. The contents within this directory will be available when deployed.

If you're using Jekyll to create your static app, we recommend taking a look at our [Jekyll getting started guide](/jekyll/getting-started.md).

## Deploying Your App

To deploy a static app on NorthStack, simply use the `northstack app:deploy` CLI command like any other app. For more information on deploying sites using the CLI, see our article on the [app:deploy command](/cli/reference/app/deploy.md).

## Deploying From GitHub

Apps can also be deployed directly from GitHub. For more information on configurating automatic deployments, see our article on [configuring GitHub for automatic deployments](/integrations/github.md).
