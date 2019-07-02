import React from 'react';
import { graphql } from 'gatsby';

export default (data: { data: { allDatoCmsAbout: { nodes: any[] } } }) => {
	console.log('data', data);
	const node = data.data.allDatoCmsAbout.nodes[0];
	// export default (data) => {
	return (
		<>
			<h1>{node.title}</h1>
			<div>{node.content}</div>
		</>
	);
};

export const query = graphql`
	query MyQuery {
		allDatoCmsAbout {
			nodes {
				id
				content
				title
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
