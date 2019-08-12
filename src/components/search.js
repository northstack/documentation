import React from 'react';
import { Link } from 'gatsby';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ``,
			results: [],
		};
	}

	render() {
		return (
			<div className="search">
				<input type="text" value={this.state.query} onChange={this.search} placeholder="Search" />
				<ul className="search-results">
					{this.state.results.map((page) => (
						<li>
							<Link to={page.url}>{page.title}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}

	getSearchResults(query) {
		if (!query || !window.__LUNR__) return [];

		const results = window.__LUNR__.en.index.search(query);

		return results.map(({ ref }) => window.__LUNR__.en.store[ref]);
	}

	search = (event) => {
		const query = event.target.value;
		const results = this.getSearchResults(query);

		this.setState((s) => {
			return {
				results,
				query,
			};
		});
	};
}

export default Search;
