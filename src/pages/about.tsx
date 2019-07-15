import React from 'react';
import { graphql } from 'gatsby';
import ToHtml from '../components/html';
import { HelmetDatoCms } from "gatsby-source-datocms";

export default (data: { data: { datoCmsOmnie: { title: string; content: string } } }) => {
	const node = data.data.datoCmsOmnie;
	// export default (data) => {
	return (
		<>
			{console.log("seo o mnie: ", data.data)}
			<HelmetDatoCms seo={node.seoMetaTags} />
			<h1>{node.title}</h1>
			<ToHtml tags={node.content} />
		</>
	);
};

export const query = graphql`
	query AboutQuery {
		datoCmsOmnie {
			title
			content
			seoMetaTags {
				...GatsbyDatoCmsSeoMetaTags
			}
		}
	}
`;
