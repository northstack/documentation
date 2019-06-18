import React from 'react';
import Col from 'react-bootstrap/Col';

import MainMenu from '../main-menu';

const LeftColumn = ({ currentSlug }) => (
	<Col xs={3} lg="auto" className="col-main-menu" style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
		<MainMenu className="sticky-top article-left" currentPage={currentSlug} />
	</Col>
);

export default LeftColumn;
