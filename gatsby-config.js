const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `KozakBartosz.pl`,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/layout.tsx`),
			},
		},
		{
			resolve: `gatsby-source-datocms`,
			options: {
				apiToken: `e7e3ddce205ffeee0f717d6f9b44e3`,
				preview: false,
				disableLiveReload: false,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`),
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
