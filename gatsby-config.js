module.exports = {
  siteMetadata: {
    title: `NorthStack Documentation`,
    description: `Learn how to use NorthStack to create blazing-fast, scalable, static apps with ease.`,
    author: `@gonorthstack`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles`,
        name: `articles`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-custom-blocks`,
            options: {
              blocks: {
                danger: {
                  classes: "danger"
                }
              }
            }
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1100
            }
          }
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin`],
          },
        ],
      },
    }
  ],
}
