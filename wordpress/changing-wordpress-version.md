# Changing the WordPress Version of a NorthStack App

Need to update your NorthStack app to the next major WordPress version? Here's how to do it.

1. Begin by locating the local directory for your NorthStack app.
2. Next, find the **build.json** file and open it up in your favorite editor. It should look something like this:
   ```json
   {
       "image": {
           "name": "wordpress-php",
           "version": "4.8"
        },
        "build-type": "builder",
        "wordpress-version": "^4.8"
   }
   ```
3. See that line that says **wordpress-version**? That's the one you'll be changing. For example, if you want to change it to use WordPress 5.0, you'd change this line to:
   ```
   "wordpress-version": "^5.0"
   ```

From here, all you have to do is deploy your app! Of course, always be sure to deploy to your development environment first, just to make sure you don't have any conflicts with the updated version.