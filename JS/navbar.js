//Queue Display 
var queueElement = document.getElementById("queueCount");

getQueue();
console.log("Q Update.")
const interval = setInterval(function() {
    getQueue();
}, 10000);

function getQueue() {
    fetch("https://2bqueue.info/*", {mode: "no-cors"}, {headers: {'Accept': 'application/json'}})
        .then(response => {(console.log(response))})
}

// End Queue Display