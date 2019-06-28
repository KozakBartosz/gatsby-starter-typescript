import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'gatsby-link';
import SiteMetadata from './meta';
import Transition from './transition';

const Header = (props: { pathname: string }) => {
	// const [count, setCount] = useState(0);

	return (
		<Top>
			<Container>
				<h1 style={{ margin: 0, textAlign: 'center', padding: '20px' }}>
					<Link
						to="/"
						style={{
							color: 'white',
							textDecoration: 'none',
						}}>
						KozakBartosz.pl{props.pathname}
					</Link>
				</h1>
				<Nav>
					<Link to="/" activeClassName="link--active">
						Home
					</Link>
					<Link to="/oferta/" activeClassName="link--active">
						Oferta
					</Link>
					<Link to="/kontakt/" activeClassName="link--active">
						Kontakt
					</Link>
				</Nav>
			</Container>
		</Top>
	);
};

const Layout = (props: { children: React.ReactNode; location: { pathname: string } }) => (
	<>
		<SiteMetadata />
		<GlobalStyle />
		<Header pathname={props.location.pathname} />
		<Container>
			<Transition location={props.location}>{props.children}</Transition>
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

const Top = styled.header`
	display: flex;
	flex-direction: row;
	color: #fff;
	background: rgb(50, 104, 137);
	background: linear-gradient(171deg, rgba(50, 104, 137, 1) 0%, rgba(224, 0, 130, 1) 100%);
	margin-bottom: 20px;
	position: sticky;
	z-index: 100;
	top: -77px;
`;
const Nav = styled.nav`
	padding: 10px 10px 0;
	text-align: center;
	a {
		padding: 10px 25px;
		display: inline-block;
		color: #fff;
		text-decoration: none;
		transition: all 250ms ease-in-out;
	}
	a.link--active {
		display: inline-block;
		color: rgba(224, 0, 130, 1);
		background: #fff;
	}
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	padding: 0 10px;
`;

export default Layout;
