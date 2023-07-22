// querySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns a NodeList
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';