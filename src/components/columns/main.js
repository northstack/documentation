import React from 'react';
import Col from 'react-bootstrap/Col';

import ArticleGithubLink from '../article/github-link.js';
import ArchiveChildren from '../archive/archive-children';

class MainColumn extends React.Component {
	render() {
		return (
			<Col className="col-main-content">
				<article dangerouslySetInnerHTML={{ __html: this.props.markup }} />
				<ArticleGithubLink relativeFilePath={this.props.relativeFilePath} />

				{this.props.template === 'archive' && <ArchiveChildren archiveChildren={this.props.archiveChildren} />}
			</Col>
		);
	}
}

export default MainColumn;
