import PropTypes from 'prop-types';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import HeaderNavJson from '../data/HeaderNav.json';

const Header = ({ siteTitle }) => (
	<header>
		<Container>
			<Navbar sticky="top">
				<Navbar.Brand href="/">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
						<path
							className="text"
							d="M237.31 69.56v80.21h-15.78l-39.36-48.7v48.7h-18V69.56H180l39.25 48.7v-48.7z"
						/>
						<path
							className="text"
							d="M269.05 144.73a39.93 39.93 0 0 1-15.68-14.83 40.46 40.46 0 0 1-5.67-21.24 40.42 40.42 0 0 1 5.67-21.23 39.93 39.93 0 0 1 15.68-14.83 49.61 49.61 0 0 1 44.94 0 40.87 40.87 0 0 1 0 72.13 49.61 49.61 0 0 1-44.94 0zm35.32-13.68a23.36 23.36 0 0 0 9-9.11 28.68 28.68 0 0 0 0-26.56 23.41 23.41 0 0 0-9-9.1 26.84 26.84 0 0 0-25.64 0 23.47 23.47 0 0 0-9 9.1 28.68 28.68 0 0 0 0 26.56 23.43 23.43 0 0 0 9 9.11 26.84 26.84 0 0 0 25.64 0z"
						/>
						<path
							className="text"
							d="M395.78 149.77l-15.28-22.06h-16.85v22.06h-18V69.56h33.76a42.27 42.27 0 0 1 18 3.55A26.91 26.91 0 0 1 409.1 83.2a28.35 28.35 0 0 1 4.13 15.47 27.87 27.87 0 0 1-4.18 15.41 26.69 26.69 0 0 1-11.87 9.92l17.49 25.78zm-4.17-62.55q-4.38-3.63-12.77-3.62h-15.19v28.07h15.19q8.39 0 12.77-3.68T396 97.63q0-6.78-4.39-10.41z"
						/>
						<path className="text" d="M445.87 84.6H419.8v-15H489v15h-25.08v65.17h-18.05z" />
						<path
							className="text"
							d="M572.2 68.56v81.21h-18v-33.09h-36.1v33.09H500V68.56h18v32.08h36.1V68.56z"
						/>
						<path
							className="text"
							d="M600.38 147.53a43 43 0 0 1-14.25-6.7l6.29-14a42.62 42.62 0 0 0 12.25 6.06 45.93 45.93 0 0 0 14.2 2.29q7.89 0 11.68-2.34a7.11 7.11 0 0 0 3.77-6.24 6 6 0 0 0-2.23-4.75 17.11 17.11 0 0 0-5.72-3q-3.5-1.14-9.45-2.52a130.84 130.84 0 0 1-15-4.35 24.27 24.27 0 0 1-10-7q-4.18-4.81-4.18-12.82a22.27 22.27 0 0 1 3.78-12.65 25.31 25.31 0 0 1 11.39-9q7.61-3.32 18.6-3.32a61.73 61.73 0 0 1 15 1.83 44.27 44.27 0 0 1 12.82 5.27L643.6 88.4a44.7 44.7 0 0 0-22.21-6.3q-7.78 0-11.51 2.52a7.69 7.69 0 0 0-3.72 6.64q0 4.13 4.29 6.13a68.11 68.11 0 0 0 13.11 4 130.24 130.24 0 0 1 15 4.35 24.88 24.88 0 0 1 10 6.87q4.17 4.69 4.18 12.7a21.88 21.88 0 0 1-3.84 12.54 25.82 25.82 0 0 1-11.5 9q-7.68 3.32-18.67 3.32a65.44 65.44 0 0 1-18.35-2.64z"
						/>
						<path className="text" d="M680.49 84.6h-25.07v-15h69.19v15h-26.07v65.17h-18z" />
						<path
							className="text"
							d="M783.71 132.73h-36.94l-7 17h-18.72l35.31-80.21h18.11l35.41 80.21h-19.13zm-5.7-14L765.3 88l-12.71 30.68z"
						/>
						<path
							className="text"
							d="M833.82 144.78A39.74 39.74 0 0 1 818.25 130a40.64 40.64 0 0 1-5.67-21.35 40.7 40.7 0 0 1 5.67-21.35 39.74 39.74 0 0 1 15.57-14.77 46.24 46.24 0 0 1 22.27-5.32 46.75 46.75 0 0 1 18.83 3.66 37.85 37.85 0 0 1 14.14 10.54l-11.91 11A25.59 25.59 0 0 0 857 83a26.8 26.8 0 0 0-13.28 3.26 23.22 23.22 0 0 0-9.1 9.1 28.68 28.68 0 0 0 0 26.56 23.18 23.18 0 0 0 9.1 9.11 26.8 26.8 0 0 0 13.28 3.28q12 0 20.15-9.5l11.91 11a37.16 37.16 0 0 1-14.2 10.64 47 47 0 0 1-18.86 3.66 46 46 0 0 1-22.18-5.33z"
						/>
						<path
							className="text"
							d="M929.66 118.26l-10.53 11.23v20.28h-18V69.56h18V107l34.75-37.47h20.17l-32.5 35.75L976 149.77h-21.23z"
						/>
						<path
							fill="#5c7d86"
							d="M24 146.87V78.09A3.14 3.14 0 0 1 27.18 75H96a3.14 3.14 0 0 1 2.22 5.36l-68.81 68.73a3.15 3.15 0 0 1-5.41-2.22z"
						/>
						<path
							fill="#e01b4a"
							d="M143 53v94a3.15 3.15 0 0 1-3.15 3.15H45.89a3.15 3.15 0 0 1-2.22-5.37l93.92-93.92A3.15 3.15 0 0 1 143 53z"
						/>
					</svg>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-top" />
				<Navbar.Collapse id="navbar-top">
					<Nav className="ml-auto">
						{HeaderNavJson.map((menuItem, index) => (
							<Nav.Link key={index} href={menuItem.link}>
								{menuItem.label}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
