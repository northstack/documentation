/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../styles/main.scss';

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<>
				<div className="wrapper">
					<Header siteTitle={data.site.siteMetadata.title} />
					<main className="container-fluid">{children}</main>
				</div>
				<footer className="stickBottom sitefooter d-flex">
					<p>
						© {new Date().getFullYear()} {` `}
						<a href="https://northstack.com">NorthStack</a>
					</p>
					<ul className="nav ml-2">
						<li className="mr-2">
							<a href="https://github.com/northstack">
								<i className="ion ion-logo-github" />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/gonorthstack">
								<i className="ion ion-logo-twitter" />
							</a>
						</li>
					</ul>
				</footer>
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
