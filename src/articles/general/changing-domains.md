---
title: "Changing Domains"
description: "Want to change the domain that your NorthStack app is using? Prefer a fancier subdomain for your development sites? In this article, we'll show you how to change your domain details inside your NorthStack app."
related: ["/genera/pointing-domains/", "/general/", "/general/support/"]
---

# Changing Domains on a NorthStack App

Want to change the domain that your NorthStack app is using? Prefer a fancier subdomain for your development sites? In this article, we'll show you how to change your domain details inside your NorthStack app.

1. Begin by opening the main directory for your NorthStack app on your local machine.
2. Next, you'll see a another directory labeled **config**. Jump on into it.
3. Inside your *config* directory, you'll see subdirectories for each environment (dev, prod, and test). Go ahead and enter the directory for the environment that you want to change the domain on.
4. You should now see a **domains.json** file that you can open up with your favorite text editor. It should look something like this:
   ```json
   ["ns-xxxxxxx.dev-us-east-1-northstack.com"]
   ```
5. To change it to another domain, simply edit add your domain like this:
   ```json
   ["example.com", "ns-xxxxxxx.dev-us-east-1-northstack.com"]
   ```
6. Once edited, save your changes and deploy your app! If you haven't pointed the domain to your app yet and need more information on doing so, take a look at our article on [pointing domains to NorthStack apps](/general/pointing-domains/).