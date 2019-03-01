# GitHub Integration

## Configuring Deployments

If you're using GitHub for maintaining changes to your site, you can speed up your workflow by deploying directory from a GitHub repository. Here's how to set it up:

1. Start by going to the [NorthStack app on the GitHub Marketplace](https://github.com/apps/northstack-release).
2. To start the installation, click the green **Install** button.
   ![NorthStack GitHub App](/_assets/images/github-integration/northstack-app.png)
3. If you're a member of an organization, you'll need to determine which account will be integrated with your NorthStack account. Click on the account that has access to the repository that you will be deploying from.
   ![NorthStack GitHub Account Selection](/_assets/images/github-integration/account-selection.png)
4. You'll now be presented with a page that will allow you to configure what permissions to give to NorthStack. As a general security practice, it's always best to only provide the permissions you need. In this case, that means only providing access to the GitHub repository that you will be using.
    To do this, select the **Only select repositories** option, then click on the repositories that you want to deploy from.
    ![NorthStack GitHub Permissions](/_assets/images/github-integration/permissions-settings.png)
5. After selecting permissions, you'll be sent back to the *Integrations* page within your NorthStack Console. Inside this page, you'll be asked to **enter your GitHub Organization name**. Enter the name of the organization or user that you authenticated with earlier.
   ![NorthStack Console Enter GitHub Organization Name](/_assets/images/github-integration/enter-github-organization.png)
6. Inside the **Create New Configuration** section, select the repository and branch that you want to deploy your code from. Then, select the app and environment that you want to deploy to.
   ![Configure GitHub Deployment Source Target](/_assets/images/github-integration/configurations.png)
7. Once your settings are configured, click on the **Add Configuration** button to save your settings.

## Testing Your Deployments

Once the GitHub integration is all set up, your code will deploy automatically when you deploy changes to your configured repository/branch. To test it out, simply push a new change, then check your changes on your app.