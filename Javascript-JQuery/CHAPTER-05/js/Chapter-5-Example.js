
// Adding items to start and end of list
var list = document.getElementsByTagName('ul')[0];                              // Get the <ul> element

// Add new item to end of list
var newItemLast = document.createElement('li');                                 // Create element
var newTextLast = document.createTextNode('cream');                             // Create text node
newItemLast.appendChild(newTextLast);                                           // Add text node to element
list.appendChild(newItemLast);                                                  // Add element end of list

// Add new item start of list
var newItemfirst = document.createElement('li');                                // create element
var newTextFirst = document.createTextNode('kale');                             // Create text node
newItemfirst.appendChild(newTextFirst);                                         // Add text node to element
list.insertBefore(newItemfirst, list.firstChild);                               // Add element to list


var listItems = document.querySelectorAll('li');                                // All <li> elements

//Add a class of cool to all list items
var i;                                                                          // Counter variable
for (i = 0; i < listItems.length; i++) {                                        // Loop through elements
    listItems[i].className = 'cool';                                            // change class to cool
}


// Add number of items in the list to the heding

var heading = document.querySelector('h2');                                     // h2 element
var headingText = heading.firstChild.nodeValue;                                 // h2 text
var totalItems = listItems.length;                                              // no. of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>';               // Content
heading.innerHTML = newHeading;                                                 // Update h2



// Show the content of these two properties at the end of the list
var msg = '<h2>SUMMARY</h2>'
    msg += '<p>The browser represents the page using a DOM tree.</p>';
    msg += '<p>DOM trees have four types of nodes: document nodes, element nodes, attribute nodes, and text nodes.</p>';
    msg += '<p>You can select element nodes by their id or class attributes, by tag name, or using CSS selector syntax.</p>';
    msg += '<p>Whenever a DOM query can return more than one node, it will always return a NodeList</p>';
    msg += '<p>From an element node, you can access and update its content using properties such as textContent and innerHTML or using DOM manipulation techniques.</p>';
    msg += '<p>An element node can contain multiple text nodes and child elements that are siblings of each other.</p>';
    msg += '<p>In older browsers, implementation of the DOM is inconsistent (and is a popular reason for using jQuery).</p>';
    msg += '<p>Browsers offer tools for viewing the DOM tree.</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;