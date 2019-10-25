


module.exports = {
	siteMetadata: {
		title: `Example`,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		{
		   resolve: `gatsby-plugin-polyfill-io`,
		   options: {
			  features: [`Array.prototype.map`, `fetch`, `es2015`,`es2016`,`es2017`,`es2018`,`es5`,`es7`]
		   },
		},
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
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
