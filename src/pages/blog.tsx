import React from 'react';
import { graphql, Link } from 'gatsby';
import ToHtml from '../components/html';

export default (data: { data: { allDatoCmsBlog: { nodes: any } } }) => {
	console.log('data', data);
	const node = data.data.allDatoCmsBlog.nodes;
	// export default (data) => {
	return (
		<>
			<h1>Blog</h1>

			{node.map(
				(
					el: { adres: string; title: string; content: string; img: { url: string } },
					i: any,
				) => {
					// Return the element. Also pass key
					return (
						<div>
							<img src={el.img ? el.img.url : '/assets/icon.png'} />
							<h2>
								{/* <Link to={el.adres}>{el.title}</Link> */}
								{el.title}
							</h2>
							<ToHtml tags={el.content} />
						</div>
					);
				},
			)}
		</>
	);
};

export const query = graphql`
	query BlogQuery {
		allDatoCmsBlog {
			nodes {
				title
				adres
				content
				img {
					url
					alt
				}
			}
		}
	}
`;
