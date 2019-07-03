import React from 'react';
import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import ToHtml from '../components/html';
import styled from 'styled-components';

export default (data: { data: { allDatoCmsBlog: { nodes: any } } }) => {
	console.log('data', data);
	const node = data.data.allDatoCmsBlog.nodes;
	// export default (data) => {
	return (
		<>
			<h1>Blog</h1>

			{node.map(
				(
					el: {
						id: string;
						adres: string;
						title: string;
						content: string;
						img: { fluid: FluidObject };
					},
					i: any,
				) => {
					// Return the element. Also pass key
					console.log('fluid', el.img);
					return (
						<BlogPost key={el.id}>
							<BlogPostImg>
								{(() => (el.img ? <Img fluid={el.img.fluid} /> : 'Brak fotki'))()}
							</BlogPostImg>

							<BlogPostContent>
								<h2>
									{/* <Link to={el.adres}>{el.title}</Link> */}
									{el.title}
								</h2>
								<ToHtml tags={el.content} />
							</BlogPostContent>
						</BlogPost>
					);
				},
			)}
		</>
	);
};

const BlogPost = styled.article`
	display: flex;
	flex-direction: row;
	padding: 20px 0;
	border-bottom: 1px solid #ccc;
`;
const BlogPostImg = styled.article`
	width: 100px;
`;
const BlogPostContent = styled.article`
	width: 100%;
	padding-left: 10px;
	h2 {
		margin-top: 0;
	}
`;

export const query = graphql`
	query BlogQuery {
		allDatoCmsBlog {
			nodes {
				id
				title
				adres
				content
				img {
					fluid(maxWidth: 100, imgixParams: { fm: "jpg", auto: "compress" }) {
						...GatsbyDatoCmsFluid
					}
				}
			}
		}
	}
`;
