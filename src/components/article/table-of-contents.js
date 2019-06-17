import React from "react";

const minHeaders = 3;

const ArticleTableOfContents = ({ headings, markup }) => {
    if ( headings.length > minHeaders ) {
        return (
            <nav id="article-toc" className="article-toc" dangerouslySetInnerHTML={{ __html: markup }} />
        );
    } else {
        return null;
    }
}

export default ArticleTableOfContents;