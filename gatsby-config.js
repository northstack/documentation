module.exports = {
	siteMetadata: {
		title: `NorthStack Documentation`,
		description: `Learn how to use NorthStack to create blazing-fast, scalable, static apps with ease.`,
		author: `@gonorthstack`,
		siteUrl: `http://docs.northstack.com`,
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
			},
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
									title: 'optional',
									classes: 'alert alert-danger',
								},
								warning: {
									title: 'optional',
									classes: 'alert alert-warning',
								},
								info: {
									title: 'optional',
									classes: 'alert alert-info',
								},
							},
						},
					},
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-prismjs`,
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1100,
						},
					},
					{
						resolve: `gatsby-remark-external-links`,
						options: {
							target: '_blank',
							rel: 'nofollow',
						},
					},
				],
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/data`,
				name: `data`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
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
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `NorthStack Documentation`,
				short_name: `NorthStack`,
				start_url: `/`,
				background_color: `#ff`,
				theme_color: `#1c3b4a`,
				display: `standalone`,
				icon: 'src/images/icons/northstack-flat-color-logomark-transparent.svg',
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `http://docs.northstack.com`,
			},
		},
		`gatsby-plugin-offline`,
	],
};
