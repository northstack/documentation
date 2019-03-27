# Understanding Version Constraints

When doing things like changing your WordPress version in NorthStack, you might notice how the versioning is defined. In this article, we'll give you a quick rundown of how versioning works.

## Exact Version

If you want to define a specific version, you would do so by setting that version number without any symbols.

For example, if you wanted to strictly only use WordPress version 4.8, you would simply set the version string as `4.8`.

The downside of this approach is that any minor versions such as 4.8.1 wouldn't be applied unless you manually changed the version constraint.

As minor updates usually include things like security updates, we generally recommend to use a caret version range, as defined in the Minor Versions section of this article.

## Minor Versions

Most experts would agree that allowing minor version updates is usually the best route to go. This is what we call a caret version range.

By default, NorthStack will use a caret version range for things like WordPress versions. This is defined by a caret symbol (`^`) before the version number.

For example, if you want to use WordPress version 4.8, but also want to automatically update to minor versions such as 4.8.1, your version string would look like `^4.8`.

Of course, if you wanted to update to a major WordPress version such as WordPress 5.0, you would need to adjust your version string to `^5.0`.