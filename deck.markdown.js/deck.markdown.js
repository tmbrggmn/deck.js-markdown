/*!
 * Deck JS - deck.markdown - v1.0
 * Copyright (c) 2011 Tom Bruggeman
 *
 * Dependencie(s):
 * 		1. PageDown Converter (http://code.google.com/p/pagedown/)
 * 
 * This extension presumes that the content of a deck.js <section> element (or slide) is written in Markdown
 * and converts it on the fly to HTML to display the slide using the PageDown markdown converter.
 * 
 * Feel free to provide (constructive) feedback! I'm certainly not a JavaScript specialist, so there's a real
 * posibility that I've done something stupid :-)
 */

(function($, deck, undefined) {
	var $d = $(document);
	var converter = new Markdown.Converter();
	
	$d.bind('deck.init', function() {
		$.each($.deck("getSlides"), function(index, value) {
			value.html(converter.makeHtml(value.html()));
		});
	});
	
	/*$(document).bind('deck.change', function(event, from, to) {
		var newSlide = $.deck('getSlide', to);
		newSlide.html(converter.makeHtml(newSlide.html()));
	});*/
})(jQuery, 'deck');