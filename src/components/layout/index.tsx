import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from '@reach/router';
import { SiteMetadata } from '../meta';

const Header = () => {
	const [count, setCount] = useState(0);

	return (
		<div
			style={{
				background: 'rebeccapurple',
				marginBottom: '1.45rem',
			}}>
			<div
				style={{
					margin: '0 auto',
					maxWidth: 960,
					padding: '1.45rem 1.0875rem',
				}}>
				<h1 style={{ margin: 0 }}>
					<Link
						to="/"
						style={{
							color: 'white',
							textDecoration: 'none',
						}}>
						Gatsby
					</Link>

					<button onClick={() => setCount(count - 1)}>-</button>
					<span
						style={{
							color: 'white',
							textDecoration: 'none',
						}}>
						{count}
					</span>
					<button onClick={() => setCount(count + 1)}>+</button>
				</h1>
			</div>
		</div>
	);
};

export const Layout = (props: { children: React.ReactNode }) => (
	<>
		<SiteMetadata pathname="/" />
		<GlobalStyle />
		<Header />
		<Container>
			{props.children}
			<Footer>Copyright ©2019 by KozakBartosz.pl</Footer>
		</Container>
	</>
);

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		background: #fff;
	}

`;

const Footer = styled.footer`
	margin: 0 auto;
	max-width: 1000px;
	background: #000;
	color: #fff;
	text-align: center;
	margin-top: 200px;
	padding: 20px 0;
`;

const Container = styled.div`
	margin: 0 auto;
	max-width: 1000px;
`;
