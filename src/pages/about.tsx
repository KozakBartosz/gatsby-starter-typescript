import React from 'react';
import { graphql } from 'gatsby';
import ToHtml from '../components/html';

export default (data: { data: { allDatoCmsOmnie: { nodes: any[] } } }) => {
	console.log('data', data);
	const node = data.data.allDatoCmsOmnie.nodes[0];
	// export default (data) => {
	return (
		<>
			<h1>{node.title}</h1>
			<ToHtml tags={node.content} />
		</>
	);
};

export const query = graphql`
	query MyQuery {
		allDatoCmsOmnie {
			nodes {
				title
				id
				content
			}
		}
	}
`;

// export const pageQuery = graphql`
// query IndexQuery {
//     site {
//         siteMetadata {
//             title
//         }
//     }
// }
// `;
