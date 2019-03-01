# Installing the NorthStack CLI on MacOS

## Requirements

The NorthStack CLI requires a few dependencies to run. In most development environments, these are already installed, but if you don't already have a required dependency, we'll show you how to install it as well.

* Git
* Docker (Latest Stable)
* PHP (7.2+)

### Git

The `git` command is already present in MacOS, but might need additional installation. To check for Git on your system, open a Terminal window and enter the following:

```shell
git --version
```

If it shows the version, Git is ready to use. If not, you'll be prompted to continue with installation.

### Docker

To install Docker on your Mac, you can follow their instructions here:
[Docker for Mac Installation Guide](https://docs.docker.com/docker-for-mac/install/)

### PHP

PHP is easiest installed via Homebrew. To install Homebrew, open a Terminal window and run the following:
```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Once homebrew is installed, run the following to install PHP:
```shell
brew install php
```

Once installation is complete, you can check your installation by running the following:
```shell
php -v
```

## Installing the NorthStack CLI

Now that you have the requirements satisfied, it's time to get started with installing the NorthStack CLI. Here's how to do it:

1. Open a new Terminal window.
2. Next, clone the NorthStack CLI using Git:
   ```shell
   git clone https://github.com/northstack/northstack-client.git
   ```
3. Once the client has been downloaded, switch the the directory that you cloned to:
   ```shell
   cd northstack-client
   ```
4. Finally, run the installation:
   ```shell
   ./bin/install.sh
   ```

You're all set! The NorthStack CLI is now installed on your Mac!

## Further Reading

Now that you have the NorthStack CLI installed, you're ready to start using it. There's articles will get you started:

* [NorthStack Getting Started Guide](/getting-started.md)
* [NorthStack CLI Reference](/cli/reference/)
* [WordPress Getting Started Guide](/wordpress/getting-started.md)