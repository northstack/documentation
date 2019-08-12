import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class ArchiveChildren extends React.Component {
	archiveHasChildren() {
		return this.props.archiveChildren.edges.length > 0;
	}

	getArchiveChildren() {
		if (this.archiveHasChildren()) {
			return this.props.archiveChildren.edges;
		}

		return [];
	}

	getSlug(archiveItem) {
		if (archiveItem.node.fields.slug.length > 0) {
			return archiveItem.node.fields.slug;
		}

		return '';
	}

	getTitle(archiveItem) {
		if (archiveItem.node.frontmatter.title.length > 0) {
			return archiveItem.node.frontmatter.title;
		}

		return '';
	}

	getDescription(archiveItem) {
		if (archiveItem.node.frontmatter.description.length > 0) {
			return archiveItem.node.frontmatter.description;
		}

		return '';
	}

	renderTitle(archiveItem) {
		return <p className="related-title list-group-item-title">{this.getTitle(archiveItem)}</p>;
	}

	renderDescription(archiveItem) {
		return <p className="related-description list-group-item-description">{this.getDescription(archiveItem)}</p>;
	}

	renderArchiveItem(archiveItem) {
		return (
			<ListGroup.Item key={this.getSlug(archiveItem)} action href={this.getSlug(archiveItem)}>
				{this.renderTitle(archiveItem)}
				{this.renderDescription(archiveItem)}
			</ListGroup.Item>
		);
	}

	render() {
		if (this.archiveHasChildren()) {
			return (
				<div className="archive-children">
					<Card>
						<ListGroup variant="flush">
							{this.getArchiveChildren().map((archiveItem) => this.renderArchiveItem(archiveItem))}
						</ListGroup>
					</Card>
				</div>
			);
		}

		return '';
	}
}

export default ArchiveChildren;
