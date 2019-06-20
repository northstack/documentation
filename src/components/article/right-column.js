import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import ArticleTableOfContents from './table-of-contents';
import Related from './related';

const ArticleRightColumn = ({ tableOfContentsMarkup, relatedArticles, currentArticleHeadings }) => (
	<Col className="col-right-sidebar">
		<div id="ArticleRight" className="sticky-top">
			<ArticleTableOfContents headings={currentArticleHeadings} markup={tableOfContentsMarkup} />
			<Related relatedArticles={relatedArticles} />
		</div>
	</Col>
);

export default ArticleRightColumn;
