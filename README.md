# Scraper

Turns an HTML page to a JSON

# How it works

Depth first search the enite HTML page and saves only the valid HTML elements.

# Requirements

- nodejs
- request
- request-promise
- node-html-parser

# Usage

Initialize the module:

`const scraper = require('scraper');`

Use the toJSON method passing a valid URL:

`const json = scraper.toJSON('your url here')`
