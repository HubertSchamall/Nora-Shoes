/*PASSWORD

document.getElementById("showPassword").addEventListener("change"), function() {
    var passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
} */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval (function() {
    nextImage ();
}, 4000)

function nextImage () {
    count++;

    if (count>4) {
        count = 1;
}

    document.getElementById("radio"+count).checked = true;
}