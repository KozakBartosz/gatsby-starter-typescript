import React from 'react';
import {graphql} from 'gatsby'




export default (data) => {
    console.log("data",data);
    const node = data.data.allDatoCmsAbout.edges[0].node
// export default (data) => {
	return (
		<>
			<h1>{node.title}</h1>
			<div>
                {node.content}
			</div>
		</>
	);
};


export const query = graphql`
query MyQuery {
    allDatoCmsAbout {
      edges {
        node {
          content
          title
        }
      }
    }
}`;

// export const pageQuery = graphql`
// query IndexQuery {
//     site {
//         siteMetadata {
//             title
//         }
//     }
// }
// `;
