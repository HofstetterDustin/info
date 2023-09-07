/* Projects page: buttons to load each project main page */
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
            console.log("Error:odp btn failed", error);
        });
};

function loadBd() {
    var objectiveDiv = document.getElementById("objective");
    var url = "/projects/batDroid.html";
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            objectiveDiv.innerHTML = data
            console.log("bd btn success");
        })
        .catch(function (error) {
            console.log("Error:bd btn failed", error);
        });
};

function loadChop() {
    var objectiveDiv = document.getElementById("objective");
    var url = "/projects/chopBot.html";
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            objectiveDiv.innerHTML = data
            console.log("chop btn success");
        })
        .catch(function (error) {
            console.log("Error:chop btn failed", error);
        });
};

function loadJem() {
    var objectiveDiv = document.getElementById("objective");
    var url = "/projects/jEModel.html";
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            objectiveDiv.innerHTML = data
            console.log("jem btn success");
        })
        .catch(function (error) {
            console.log("Error:jem btn failed", error);
        });
};

function loadAdp() {
    var objectiveDiv = document.getElementById("objective");
    var url = "/projects/adp.html";
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            objectiveDiv.innerHTML = data
            console.log("adp btn success");
        })
        .catch(function (error) {
            console.log("Error:adp btn failed", error);
        });
};

