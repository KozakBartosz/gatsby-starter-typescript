import React from 'react';
import { graphql } from 'gatsby';
import ToHtml from '../components/html';

export default (data: { data: { datoCmsOmnie: { title: string; content: string } } }) => {
	console.log('data', data);
	const node = data.data.datoCmsOmnie;
	// export default (data) => {
	return (
		<>
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
		}
	}
`;
