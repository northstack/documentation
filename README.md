The NorthStack Docs site.

Built with Gatsby and hosted on [NorthStack](https://northstack.com). Check it out live at [http://docs.northstack.com](http://docs.northstack.com)

## Requirements
* NPM
* Gatsby CLI

## Instructions

### Development

1. Clone the repo.
2. `npm install`
3. `gatsby develop`
4. [http://localhost:8000](http://localhost:8000)

### Production

1. Clone the repo.
2. `npm install`
3. `gatsby build`
4. To serve the production build: `gatsby serve`, then go to [http://localhost:9000](http://localhost:9000)

## Additional Info

### Paths

* `/src/articles/`: The articles. Written in Markdown.
* `/src/components/`: React components.
  * `/src/components/archive/`: React components specific to archive pages.
  * `/src/components/article/`: React components specific to single article pages.
  * `/src/components/columns/`: Layout column React components.
* `/src/data/`: Miscellaneous JSON data storage.
  * `/src/data/HeaderNav.json`: Top header nav items.
  * `/src/data/MainMenu.json`: Left side main menu items.
  * `/src/data/Meta.json`: Miscellaneous meta stuff. Currently not being used.
* `/src/images/`: Images. Used by the site and docs.
* `/src/pages/`: Static non-doc page components. Index, 404, etc.
* `/stc/styles/`: Stylesheets. Sass hotness.
* `/src/templates/`: Content type templates.