var removeEl = document.getElementsByTagName('li')[2];      // The element to remove

var containerEl = removeEl.parentNode;                      // Its containing element

containerEl.removeChild(removeEl);                          // Removing the element
