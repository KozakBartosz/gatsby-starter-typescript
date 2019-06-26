import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from '@reach/router';

const Header = () => (
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
			</h1>
		</div>
	</div>
);

export const Layout = (props: { children: React.ReactNode }) => (
	<>
		<GlobalStyle />
		<Header />
		<Container>
			<p>ale ma kota</p>
			{props.children}
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

const Container = styled.div`
	margin: 0 auto;
	max-width: 1000px;
`;
