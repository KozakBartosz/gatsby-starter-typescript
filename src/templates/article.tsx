import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject, FixedObject } from 'gatsby-image';
import ToHtml from '../components/html';
import styled from 'styled-components';

type DataNode = {
	datoCmsBlog: {
		title: string;
		content: string;
		img: { fixed: FixedObject }
	}
}


export default (data: {data: DataNode}) => {
    console.log("blogdata", data);
	const node = data.data.datoCmsBlog;
	// export default (data) => {
	return (
		<>
			{(() => (
				node.img 
				? <Banner>
					<Img fixed={node.img.fixed} durationFadeIn={1050} fadeIn={true} loading="lazy" placeholderStyle={{filter: "blur(20px)"}} />
				  </Banner> 
				: 'Brak fotki'))()}
			<h1>{node.title}</h1>
			<ToHtml tags={node.content} />
		</>
	);
};

// query BlogPost($slag: String) {
//     datoCmsBlog(adres: {eq: $slag}) {
//       title
//       content
// 	  img {
// 		  fixed(width: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
// 			  ...GatsbyDatoCmsFixed_tracedSVG
// 		  }
// 	  }
	  
//     }
// }

const Banner =styled.div`
	transition: transform 1000ms cubic-bezier(.15,.76,.12,1), opacity 1000ms ease;
	.animationPage--entering & {
		transform: scale(2)
	}
	.animationPage--entered & {
		transform: scale(1)
	}
`
// ...GatsbyImageSharpFixed

export const query = graphql`
query BlogPost($slag: String) {
    datoCmsBlog(adres: {eq: $slag}) {
      title
      content
	  img {
		  fixed(width: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
			  ...GatsbyDatoCmsFixed
		  }
	  }
	  
    }
}
`;
