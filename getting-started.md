# Getting Started with NorthStack

NorthStack was built as a solution for developers to build and deploy serverless applications with ease. Due to NorthStack's developer focus, we've built it from the ground up to seamlessly integrate with your current development workflow.

As you'll see in this article, getting started with NorthStack is a breeze.

## Requirements

* Git
* Docker (Latest Stable)
* PHP (7.2+)
* A NorthStack Account

## Installing the NorthStack CLI

Thanks to the NorthStack CLI, you'll be able to get more done without ever leaving your terminal. Here's how to install the NorthStack CLI:

1. Begin by opening a terminal window.
2. Next, clone the NorthStack CLI with Git:

    ```shell
    git clone https://github.com/northstack/northstack-client.git
    ```

3. Access the directory that you just cloned:
   
    ```shell
    cd northstack-client
    ```

4. Run the NorthStack CLI installer:
   
    ```shell
    ./bin/install.sh
    ```

Once the installation is complete, test the `northstack` command by running `northstack help`.

## Authenticating the NorthStack CLI

To authenticate the NorthStack CLI with your account, use the following command:

```shell
northstack login
```

## Creating a NorthStack App

When building NorthStack, we wanted to make it as easy as possible to create an app with multiple environments for production, development, and testing. To create a new app, use the following command:

```shell
northstack app:create "MyAppName" "myappname.com"
```

The NorthStack CLI will then prompt you for additional details about your app. Once complete, you'll be provided with additional details about your newly created app.

## Deploying a NorthStack App

Deploying a NorthStack app is just as simple as creating one. To deploy your NorthStack app, use the `northstack app:deploy` command like this:

```shell
northstack app:deploy "My Deploy Message" MyAppName dev
```

As you see from the example above, just replace *MyAppName* with the name of the app that you want to deploy, and *dev* with the environment that you want to deploy to. It's as simple as that!

Once the build and deployment is complete, your app is live!