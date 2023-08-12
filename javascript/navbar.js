
// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('../navbar.html')
        .then(response => response.text())
        .then(content => {
            document.getElementById('navbar-placeholder').innerHTML = content;
        });
});
