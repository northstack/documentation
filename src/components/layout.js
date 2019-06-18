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
					<main className="container-fluid no-padding">{children}</main>
				</div>
				<footer sticky="bottom" className="card-footer footer-position">
					© {new Date().getFullYear()} {` `}
					<a href="https://northstack.com">NorthStack</a>
				</footer>
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
