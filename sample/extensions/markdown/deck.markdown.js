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
 *
 * Some changes by saintedlama
 */

(function($, deck, undefined) {
	var $d = $(document);
	var converter = new Markdown.Converter();
	
	$d.bind('deck.init', function() {
		$.each($.deck("getSlides"), function(index, value) {
            var cssClass = value.attr('class');
            // Prevent slides marked with no-md css class to be interpreted as markdown
            if (!cssClass || cssClass.indexOf('no-md') < 0) {
                value.html(converter.makeHtml(value.html()));
            }
		});
	});
})(jQuery, 'deck');