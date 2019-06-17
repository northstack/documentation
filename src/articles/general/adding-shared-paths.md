---
title: "Adding Share Paths to WordPress Apps"
description: "Here's how to share paths between WordPress apps."
---

# Adding Share Paths to WordPress Apps

Synchronizing content such as uploads and cache across multiple environments can sometimes become quite frustrating, especially if you have a significant amount of files. We know your pain, which is why NorthStack allows you to set individual directories to be shared across all of your app's environments! Here's how to do it:

1. Begin by opening your NorthStack app's main directory on your local machine.
2. Since we'll be updating the app's configuration, open up the **config** subdirectory.
3. You should now see a **config.json** file. Upon opening it up in your favorite text editor, you should see something like this:
   ```json
   {
       "app-type": "wordpress",
       "layout": "standard",
       "shared-paths": [
           "wp-content\/uploads",
           "wp-content\/cache"
        ]
   }
   ```
4. See that **shared-paths** section? That's where you'll add any paths that you want to share across all environments. For example, if you wanted to add another direcotory, it would look something like this:
   ```json
   "shared-paths": [
        "wp-content\/uploads",
        "wp-content\/cache",
        "wp-content\/my-custom-dir"
    ]
   ```
   **Note**: Don't forget to escape any required symbols with a backslash!

Once you're done adding your paths, just deploy your app!