import React from 'react';

const minHeaders = 3;

const ArticleTableOfContents = ({ headings, markup }) => {
	if (typeof headings != 'undefined' && headings.length > minHeaders) {
		return (
			<>
				<h5>In This Article</h5>
				<nav id="article-toc" className="article-toc" dangerouslySetInnerHTML={{ __html: markup }} />
			</>
		);
	} else {
		return null;
	}
};

export default ArticleTableOfContents;
