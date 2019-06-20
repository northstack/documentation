import React from 'react';
import Col from 'react-bootstrap/Col';

import MainMenu from '../main-menu';

const LeftColumn = ({ currentSlug }) => (
	<Col className="col-main-menu">
		<MainMenu className="sticky-top article-left" currentPage={currentSlug} />
	</Col>
);

export default LeftColumn;
