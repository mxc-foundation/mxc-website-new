/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'MXC Foundation'
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Roboto`,
						variants: [ `300`, `400`, `500`, `600`, `700` ]
					}
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`
	]
};
