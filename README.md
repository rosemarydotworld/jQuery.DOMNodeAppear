#jQuery.DOMNodeAppear

jQuery.DOMNodeAppear is basically a replacement for the DOMNodeInserted event. DOMNodeInserted is useful for finding and acting upon new nodes in the DOM, but it fires for every single new node. This can get crazy, and has led to mobile browsers crashing in my experience, which makes *me* crazy. DOMNodeAppear executes a callback *only* when the selector in question appears in the DOM, and has a nice syntax to boot.

The technique on which this functionality is based was first outlined at [Back Alley Coder](http://www.backalleycoder.com/2012/04/25/i-want-a-damnodeinserted/) in 2012. The gist of it is that we can leverage the fact that CSS3 animations auto-start (and fire an event!) as soon as their associated element appears in the DOM.

## Q: When would this literally ever be useful?
**A:** Let's say you're working on a site with AJAX calls, but you have no access to the javascript that makes the requests. Adding a callback to an AJAX function is easy, but without that functionality, all you can do is watch for the results of the AJAX call to appear in the DOM and then act on them. If you're using the [Moovweb](https://github.com/moovweb) platform, this can happen quite a lot.

Special thanks to [Ben Bayard](https://github.com/benbayard) for running some tests and assuring me that the idea to make this script was at least part-way good.
