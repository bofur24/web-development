var sx = document.getElementById('sx');
// Element to hold screenX
var sy = document.getElementById('sy');
// Element to hold screenY
var px = document.getElementById('px');
// Element to hold pageX
var py = document.getElementById('py');
// Element to hold pageY
var cx = document.getElementById('cx');
// Element to hold clientX
var cy = document.getElementById('cy');
// Element to hold clientY

function showPosition(event) {
    // Declare function
    sx.value = event.screenX;
    // Update element with screenX
    sy.value = event.screenY;
    // Update element with screenY
    px.value = event.pageX;
    // Update element with pageX
    py.value = event.pageY;
    // Update element with pageY
    cx.value = event.clientX;
    // Update element with clientX
    cy.value = event.clientY;
    // Update element with clientY
}

var el = document.getElementById('body');
// Get body Element
el.addEventListener('mousemove', showPosition, false);
// Move updates position
