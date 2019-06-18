---
title: "Enabling Anonymous Comments via the WordPress REST API"
description: "Here's how to configure the REST API to get and create comments without authentication."
related: ["/frameworks/wordpress/", "/getting-started/"]
---

# Enabling Anonymous Comments via the WordPress REST API

The WordPress REST API contains full functionality to create, update, and get comments that are left on a post, but by default, they're restricted to authenticated users only. If you need to allow comment submission to the comment endpoint, you just need to allow unauthenticated users via a simple hook.

[[warning | Potential Security Risk]]
| By using this hook alone, you're opening yourself up to some serious comment spam. Normally, WordPress uses things like nonces to make sure that the submitter is at least on the site and using the comment form. Enabling the anonymous submissions without doing additional checks will allow any POST requests, from anywhere, to submit a comment. You have been warned.

## The Code

```php
add_filter( 'rest_allow_anonymous_comments', '__return_true' );
```

That's it. Just return true from the `rest_allow_anonymous_comments` filter and you're all set.