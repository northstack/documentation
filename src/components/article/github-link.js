import React from 'react';

const ArticleGithubLink = ({ relativeFilePath }) => (
	<a href={'https://github.com/northstack/documentation/blob/master/src/articles/' + relativeFilePath}>
		Edit this page on GitHub
	</a>
);

export default ArticleGithubLink;
