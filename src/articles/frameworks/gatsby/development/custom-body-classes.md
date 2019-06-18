---
title: "Adding Custom Body Classes in Gatsby"
description: "Need to add a custom class name to the body tag in a Gatsby or React site? Here's how to do it."
related: ["/frameworks/gatsby/developers/", "/frameworks/gatsby/getting-started/", "/frameworks/gatsby/"]
---

# Adding Custom Body Classes in Gatsby

When we re-created WordPress themes in Gatsby, we needed a way to use the existing theme stylesheets. Unfortunately, Twenty Nineteen makes use of class definitions on the `<body>` tag and due to how Gatsby works, there isn’t a simple built-in method to dynamically change the body classes.

So how did we do it? Let’s take a look.

## Using react-body-classname to Change Body Classes with React

1. First, install the `react-body-classname` package via NPM:

    ```shell
    npm i react-body-classname
    ```

2. Next, include it in your page template and call it inside your `render()` function like so:

    ```javascript
    import React, {Component} from 'react';
    import {graphql} from 'gatsby';
    import BodyClassName from 'react-body-classname';

    class ExamplePageTemplate extends Component {
        render() {
            return (
                <BodyClassName className="my-class another-class" />
            );
        }
    }

    export default ExamplePageTemplate;
    ```

That’s it! As long as the `react-body-classname` component is being called on render, it’ll add whatever classes you want to the document body.