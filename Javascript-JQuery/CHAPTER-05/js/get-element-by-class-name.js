var elements = document.getElementsByClassName('hot');      //find hot items

if (elements.length > 2 ) {                                 // If 3 or more are found

    var el = elements[2];                                   // Select the third one from the nodeList
    el.className = 'cool';                                  // Change the value of its class attribute
}