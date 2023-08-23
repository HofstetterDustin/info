/*on load this should show*/
fetch('/profiles/objective.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('objective').innerHTML = content;
    });
/* too many button click to make it a button*/
fetch('/profiles/skills.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('profileSkills').innerHTML = content;
    });