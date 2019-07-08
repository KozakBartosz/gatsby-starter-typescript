import React from 'react';
import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import ToHtml from '../components/html';
import styled from 'styled-components';
import Helmet from 'react-helmet';

type DataNode = {
	id: string;
	adres: string;
	title: string;
	desc: string;
	img: { fluid: FluidObject }
}
type BlogData = { data: { allDatoCmsBlog: { nodes: DataNode[] } } }


export default (data: BlogData) => {
	const node = data.data.allDatoCmsBlog.nodes;

	
	// export default (data) => {
	return (
		<>
			<Helmet title="Blog" />
			<h1>Blog</h1>
			{node.map((el) => (
				<BlogPost key={el.id}>
					<BlogPostImg>
						<Link to={"/blog/"+el.adres} state={{ animation: "zoom" }}>
							{(() => (el.img ? <Img fluid={el.img.fluid} durationFadeIn={1000} loading="lazy" /> : 'Brak fotki'))()}
						</Link>
					</BlogPostImg>

					<BlogPostContent>
						<h2>
							<Link to={"/blog/"+el.adres} state={{ animation: "zoom" }}>{el.title}</Link>

						</h2>
						{/* <ToHtml tags={el.content} /> */}
						<p>{el.desc}</p>
					</BlogPostContent>
				</BlogPost>),
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
	width: 400px;
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
				desc
				img {
					fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
						...GatsbyDatoCmsFluid
					}
				}
			}
		}
	}
`;
