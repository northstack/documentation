# Recovering Your WordPress Admin Credentials

Did you just make a new WordPress app on NorthStack and already forgot your admin credentials? We get it. In this article, we'll show you how to get your WordPress admin credentials.

1. Begin by locating your NorthStack app's main directory on your local machine.
2. Next, locate the directory for the environment that you want to get the credentials for and jump into it.
3. Once inside that environment's subdirectory, you should see a **build.json** file. Go ahead and open it up with your favorite text editor. It should look something like this:
   ```json
   {
       "wordpress-install": {
           "url": "ns-xxxxxxxxxxxxxxxx.dev-us-east-1-northstack.com",
           "title": "WordPressExample",
           "admin_user": "user@example.com",
           "admin_pass": "MySuperStrongPassword",
           "admin_email": "user@example.com",
           "multisite": false,
           "subdomains": false
       }
   }
   ```
4. See the fields labeled **admin_user** and **admin_pass**? That's your username and password for your WordPress admin user!