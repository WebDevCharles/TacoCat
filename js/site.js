// Get Information - Step One
function getMessage() {

    let msg = document.getElementById("txtMessage").value;

    if (msg == "") {
        alert("You must enter a string!");

    } else {
        // Changing output to "lowercase" regardless of input.
        msg = msg.toLowerCase();
        // Remove all "special" characters.
        msg = msg.replace(/[^a-zA-Z0-9]/g, '');
        let palinObj = reverseMessage(msg);
        displayMessage(palinObj);
    }

}

function reverseMessage(originalWord) {

    let revWord = "";
    let returnObj = {};

    revWord = originalWord.split("").reverse().join("");

}

if (originalWord == revWord) {
    returnObj.message = `The word/ phrase is a palindrome.`
    returnObj.IsPalindrome = true;
} else {
    returnObj.message = `The word/ phrase is not a palindrome.`
    returnObj.IsPalindrome = false;
}

returnObj.originalWord = originalWord;
returnObj.reversedWord = revWord;

return returnObj;
}

// Final Step - View
function displayMessage(palinObj) {

    element = document.getElementById("results");
    element.innerHTML = palinObj.message;

}