
var elUsername = document.getElementById('username');                                   // Get username input
var elMsg = document.getElementById('feedback');                                        // Get feedback element

function checkUsername(minLength) {                                                     // Declare function
    if (elUsername.value.length < minLength) {
        // Set the error message                                                        // If username too short
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
    } else {                                                                            // Otherwise
        elMsg.textContent = '';                                                         // clear message
    }
}


// When it loses focus call checkUsername()
elUsername.addEventListener('blur', function() {
    checkUsername(10);
}, false);