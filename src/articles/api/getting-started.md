---
title: 'NorthStack API Getting Started Guide'
path: '/api/getting-started/'
related: ['/api/']
description: "In this article, you'll learn how to get started with the NorthStack API."
---

# Getting Started with the NorthStack API

In this article, we'll show you how to get started with the NorthStack API.

## Requirements

To get started with the NorthStack API, you'll need the following:

-   An approved NorthStack account.
-   An approved NorthStack client ID.

## Step 1: Gain Authorization

Authorization is done via 3-legged OAuth2. The process is as follows:

1. Make a `GET` request to the authorization endpoint at `https://api.northstack.com/auth/authorize` with your `client_id` query parameter.

    **Note:** You do not need to include the optional `redirect_uri` parameter. This is defined at when the client is registered (this may change in the future).

2. The client will then be prompted to sign in and authorize their account.
3. Once signed in and authorized, the authorization code will be provided within a query parameter attached to the URL defined in the `redirect_uri`.
4. The authorization code can then be exchanged for an access token by sending a `POST` request to `https://api.northstack.com/auth/REPLACETHIS`.

## Step 2: Create a Stack

After authorization has been granted, you can now create a stack that defines your application's properties.

### Request

To create a stack, send a `POST` request to the stack creation endpoint at `https://api.northstack.com/infra/stacks` with the following information:

-   **Headers**
    -   `Authorization`: Your access token.
-   **Request Body**
    -   `label`: A label to assign to your stack.
    -   `orgId`: The organization ID to create the stack on.
    -   `type`: The type of stack to create. _(Examples: `WEBSITE`, `WORDPRESS`, `CUSTOM`)_

#### Example

```shell
// Example Placeholder
```

### Response

After creating a stack, you will receive one of the following response codes:

-   **201**: The stack has been successfully created.
-   **401**: The request requires re-authentication.
-   **403**: You don't have access to make this changes.
-   **404**: Not found.
-   **422**: There was an error validating your configuration. This response type will contain `status` and `message` parameters with more information.

#### Example

```json
{
	"@type": "Pagely.Model.Stacks.Stack",
	"id": "string",
	"label": "string",
	"type": "string",
	"orgId": "string",
	"active": true,
	"created": "string",
	"updated": "string",
	"deleted": true,
	"resources": []
}
```

## Step 3: Create an Environment

Each stack can have multiple environments, such as production, development, and test environments. Here's how to use the NorthStack API to create a new environment.

### Request

To create an environment, send a `POST` request to the endpoint at `https://api.northstack.com/infra/stacks/{stackId}/environments` with the following information:

-   **Path Parameters**
    -   `stackId`: Your previously created stack ID.
-   **Headers**
    -   `Authorization`: Your access token.
-   **Request Body**
    -   `label`: The label to assign to your environment.
    -   `region`: The region your environment will be located in. Examples are:
        -   `us-east-1`
        -   `us-east-2`
        -   `us-west-1`
        -   `us-west-2`
        -   `sa-east-1`
        -   `eu-west-1`
        -   `eu-west-2`
        -   `eu-west-3`
        -   `eu-north-1`
        -   `eu-central-1`
        -   `ca-central-1`
        -   `ap-southeast-1`
        -   `ap-southeast-2`
        -   `ap-south-1`
        -   `ap-northeast-1`
        -   `ap-northeast-2`
    -   `mode`: The mode that this environment will run in. Examples are:
        -   `DEV`
        -   `PROD`
    -   `resources`:

### Response

After creating an evnironment, a response will be sent containing one of the following response codes:

-   **200**: The environment has been successfully created.
-   **401**: The request requires re-authentication.
-   **403**: You don't have access to make this changes.
-   **404**: Not found.
-   **422**: There was an error validating your configuration. This response type will contain `status` and `message` parameters with more information.

## Step 4: Create an App

Now that a stack and environment are defined, apps can be created within that environment.

### Request

To create a new app, send a `POST` request to the endpoint at `https://api.northstack.com/infra/stacks/{stackId}/apps` with the following information:

-   **Path Parameters**
    -   `stackId`: Your previously created stack ID.
-   **Headers**
    -   `Authorization`: Your access token.
-   **Request Body**
    -   `label`: The label to assign to your environment.
    -   `type`: The type of app that will be created. Available options are:
        -   `WORDPRESS`
        -   `STATIC`
        -   `JEKYLL`
        -   `GATSBY`
        -   `NODEJS`
        -   `PHP`

### Response

-   **200**: The app has been successfully created.
-   **401**: The request requires re-authentication.
-   **403**: You don't have access to make this changes.
-   **404**: Not found.
-   **422**: There was an error validating your configuration. This response type will contain `status` and `message` parameters with more information.

## Step 5: Create a Deployment

Once your app has been created, you can create a new deployment to deploy an app to an environment.

### Request

To create a new deployment, send a `GET` request to the endpoint at `https://api.northstack.com/infra/environments/{envId}/deployments` with the following information:

-   **Path Parameters**
    -   `envId`: The environment that you will be deploying to.
-   **Headers**
    -   `Authorization`: Your access token.
-   **Query Parameters**
    -   `includeApps`: The label to assign to your environment.

### Response

-   **200**: The deployment has been successfully created.
-   **401**: The request requires re-authentication.
-   **403**: You don't have access to make this changes.
-   **422**: There was an error validating your configuration. This response type will contain `status` and `message` parameters with more information.
