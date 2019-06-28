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
	],
};
