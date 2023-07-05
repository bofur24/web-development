// array literal

var colors;
colors = ['White', 'Black', 'Custom'];

var el = document.getElementById('colors');
el.textContent = colors[0];


// array constructor

var colors1 = new Array('White', 
						'Black',
						'Custom');

var el = document.getElementById('colors1');
el.textContent = colors1[1];

// updatting arrays

// Updated the third item in the array
colors[2] = 'Beige';

// Get the element with an id of colors2
var el = document.getElementById('colors2');

// Replace with third item from the array
el.textContent = colors[2];