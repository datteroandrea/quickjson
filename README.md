# Quickjson

Turns an HTML page to a JSON

# How it works

Depth first search the enite HTML page and saves only the valid HTML elements.

# Requirements

These are the requirements needed to install and use the package:

- nodejs
- request
- request-promise
- node-html-parser

# Setup

This is a Node.js module available through the npm registry.<br>
Before installing, download and install nodejs and npm.

`npm install quickjson`

# Quick Start

Initialize the module:

`const quickjson = require('quickjson');`

Use the toJSON method passing a valid URL:

`const json = quickjson.toJSON('your url here')`

# License

[LICENSE](LICENSE)
