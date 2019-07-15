import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'gatsby-link';
// import SiteMetadata from './meta';
import SiteMetadata from './metadato';
import Transition from './transition';

const Header = (props: { pathname: string }) => {
	// const [count, setCount] = useState(0);

	return (
		<Top>
			<Container>
				<TopIn>
					<h1 style={{ margin: 0, textAlign: 'center', padding: '10px 20px 10px 0' }}>
						<Link
							to="/"
							style={{
								color: 'white',
								textDecoration: 'none',
							}}>
							Example
						</Link>
						<Small>{props.pathname}</Small>
					</h1>
					<Nav>
						<Link to="/" activeClassName="link--active">
							Home
						</Link>
						<Link to="/about/" activeClassName="link--active">
							O mnie
						</Link>
						<Link to="/blog/" activeClassName="link--active" partiallyActive={true}>
							Blog
						</Link>
						<Link to="/kontakt/" activeClassName="link--active">
							Kontakt
						</Link>
					</Nav>
				</TopIn>
			</Container>
		</Top>
	);
};

const Layout = (props: { children: React.ReactNode; location: { pathname: string, state: {animation?: string} } }) => (
	<>
		{console.log("props: ",props)}
		<SiteMetadata pageinfo={props.location} />
		<GlobalStyle />
		<Header pathname={props.location.pathname} />
		<Main>
			<Container>
				{/* <h2>Animation: {JSON.stringify(props.location.state.animation, null, 2)}</h2> */}
				<Transition location={props.location}>{props.children}</Transition>
			</Container>	
		</Main>
		<Footer>
			<Container>Copyright ©2019 by KozakBartosz.pl</Container>
		</Footer>
	</>
);

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		background: #fff;
		overflow-wrap: break-word;
	}
	a {
		color: rgba(37, 164, 128, 1);
	}
	a:focus, button:focus {
		outline: none;
	}

`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 0 10px;
`;

const Top = styled.header`
	text-align: center;
	color: #fff;
	/* background: linear-gradient(171deg, rgba(50, 104, 137, 1) 0%, rgba(224, 0, 130, 1) 100%); */
	background: radial-gradient(
			circle at 49% 72%,
			rgba(107, 177, 216, 0.57),
			rgba(107, 177, 216, 0) 50%
		),
		radial-gradient(circle at 25% 21%, rgba(37, 164, 128, 0.37), rgba(37, 164, 128, 0) 50%),
		radial-gradient(circle at 76% 17%, rgba(28, 104, 173, 0.69), rgba(28, 104, 173, 0) 50%),
		radial-gradient(circle at 99% 75%, rgba(14, 45, 134, 0.83), rgba(14, 45, 134, 0) 50%),
		radial-gradient(circle at 2% 82%, rgba(32, 106, 142, 0.69), rgba(32, 106, 142, 0) 50%);
	/* background-color: #fff; */
	background-color: rgba(37, 164, 128, 1);
	margin-bottom: 20px;
	z-index: 100;
	transition: background ease 5s;
	@media (min-width: 600px) {
		position: sticky;
		top: 0px;
		/* top: -70px; */
	}
`;

const TopIn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 600px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}
`;

const Small = styled.span`
	font-size: 11px;
	display: block;
	padding-top: 10px;
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
	a:hover {
		display: inline-block;
		color: #fff;
		background: rgba(255, 255, 255, 0.3);
	}
	a.link--active {
		display: inline-block;
		color: rgba(37, 164, 128, 1);
		background: rgba(255, 255, 255, 1);
	}
`;
const Main = styled.main`
	min-height: calc(100vh - 178px);
	overflow: hidden;
	position: relative;
`;

const Footer = styled.footer`
	margin: 0 auto;
	color: #fff;
	/* background: linear-gradient(171deg, rgba(50, 104, 137, 1) 0%, rgba(224, 0, 130, 1) 100%); */
	background: radial-gradient(
			circle at 49% 72%,
			rgba(107, 177, 216, 0.57),
			rgba(107, 177, 216, 0) 50%
		),
		radial-gradient(circle at 25% 21%, rgba(37, 164, 128, 0.37), rgba(37, 164, 128, 0) 50%),
		radial-gradient(circle at 76% 17%, rgba(28, 104, 173, 0.69), rgba(28, 104, 173, 0) 50%),
		radial-gradient(circle at 99% 75%, rgba(14, 45, 134, 0.83), rgba(14, 45, 134, 0) 50%),
		radial-gradient(circle at 2% 82%, rgba(32, 106, 142, 0.69), rgba(32, 106, 142, 0) 50%);
	background-color: rgba(37, 164, 128, 1);
	text-align: center;
	margin-top: 20px;
	padding: 20px 0;
`;

export default Layout;



// export const query = graphql`
//     query MetaQuery {
//         datoCmsSite {
//             globalSeo {
//                 facebookPageUrl
//                 siteName
//                 titleSuffix
//                 twitterAccount
//                 fallbackSeo {
//                     title
//                     description
//                     twitterCard
//                 }
//             }
//             faviconMetaTags {
//                 id
//                 tags
//             }
//         }
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//     }
// `;
