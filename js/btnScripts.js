/*function btnClick() {
    var x = document.getElementById();
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}*/

/* when the btn Orbiter Dash Panels is clicked, 
then display odpSim.html page at location '/profiles/objective.html' 

document.getElementById("odp").addEventListener("click", openOdp); */

function loadOdp() {
    var objectiveDiv = document.getElementById("objective");
    var url = "/projects/odpSim.html";
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            objectiveDiv.innerHTML = data
            console.log("odp btn success");
        })
        .catch(function (error) {
            console.log("Error:", error);
        });

};

