# deck.js-markdown

A small extension for [deck.js](https://github.com/imakewebthings/deck.js) that adds support for Markdown syntax in slides. When this extension is included
in the slides HTML page, the content of every slide will be interpreted as Markdown and its HTML content will be replaced by the Markdown converter output.

## Dependencies

This extension depends on the JavaScript PageDown Converter for Markdown conversion (PageDown Converter (http://code.google.com/p/pagedown/).

## Installation

  1. Download `deck.markdown.js`
  2. Download `Markdown.Converter.js`
  3. Place the above files in: `<deck.js slides directory>\extensions\markdown`
  4. Include both files in your deck.js slides page, for example:
  
```html
<script src="extensions/markdown/Markdown.Converter.js"></script>
<script src="extensions/markdown/deck.markdown.js"></script>
```
	
Note: the order of the JS imports matters! The PageDown Converter code **must** be included before the extension.

## Known Issues

Check the issues list for any known or unresolved issues.