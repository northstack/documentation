import React from 'react';
import Col from 'react-bootstrap/Col';

import MainMenu from '../main-menu';
import Search from '../search';

const LeftColumn = ({ currentSlug }) => (
	<Col className="col-main-menu">
		<Search />
		<MainMenu className="sticky-top article-left" currentPage={currentSlug} />
	</Col>
);

export default LeftColumn;
