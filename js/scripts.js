/*on load this should show*/
fetch('/nBar.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('nBar').innerHTML = content;
    });
// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " nn1-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top nn1-white", "");
    }
}

fetch('/profiles/objective.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('objective').innerHTML = content;
    });
fetch('/profiles/objCon.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('objCon').innerHTML = content;
    });

/* too many button click to make it a button*/
fetch('/profiles/skills.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('profileSkills').innerHTML = content;
    });

fetch('/profiles/expSum.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('expSum').innerHTML = content;
    });

fetch('/profiles/projSum.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('projSum').innerHTML = content;
    });



// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}    