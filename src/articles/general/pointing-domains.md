---
title: "Pointing Domains"
description: "When you deploy your app, NorthStack provides a separate hostname for each of your environments, but most of the time, you'll want to point a domain to your app. Here's how to point your domain to your NorthStack app."
related: ["/general/changing-domains/", "/general/"]
---

# Pointing Domains

When you deploy your app, NorthStack provides a separate hostname for each of your environments, but most of the time, you'll want to point a domain to your app. Here's how to point your domain to your NorthStack app.

## Getting Your Hostname

To point your domain to your NorthStack app, you'll need to get your app's hostname. To do so, do the following using the NorthStack CLI's app:info command:

1. Open a terminal window.
2. Inside the terminal, enter the following command and modify it to match the name and environment for your app:
   ```shell
   northstack app:info MyExampleSite prod
   ```
3. Locate the value of the **Internal URL** field. It should look something like:
   ```shell
   ns-xxxxxxxxxxxxxxxxxxxxxxxx.dev-us-east-1-northstack.com
   ```

You how have your app's hostname that you will use for your CNAME record at your DNS provider.

## Pointing DNS Records

The specifics for pointing a CNAME record to your NorthStack app will vary depending on how you're managing your DNS records, but the process will look something like this:

1. Get your CNAME record using the NorthStack CLI as shown in the previous section in this article.
2. Create a new CNAME record that you want to point to your NorthStack app. If you want to point the root of your domain to the app, create the CNAME record for "www".
3. If want to point the root of the domain (example.com instead of www.example.com), you'll need to create a record at the domain root (usually labeled "@" or "example.com") that points to your CNAME record that you created in step 2.
   
   The record type will vary based on your DNS host, but it will usually be labeled as an *alias* or *redirect* record.

If all went well, your DNS records are now pointed to your NorthStack app. Be sure to allow up to 48 hours for propagation (although it's usually much shorter).
