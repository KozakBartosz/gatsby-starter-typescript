import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

// import { Layout } from '../components/layout';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
			};
		};
	};
}

export default (props: IndexPageProps) => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Hi people</h1>
			<div>
				<p>
					Welcome to your new <strong>{props.data.site.siteMetadata.title}</strong> site.
				</p>
				<p>Now go build something great.</p>
				<div>
					<button onClick={() => setCount(count - 1)}>-</button>
					<span>{count}</span>
					<button onClick={() => setCount(count + 1)}>+</button>
				</div>
				<Link to="/oferta/">Go to page {count * 20}</Link>
			</div>
			<p>{count * count}</p>
		</>
	);
};

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
