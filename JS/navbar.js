//Queue Display 
console.log("Running")
var queueElement = document.getElementById("queueCount");

getQueue();
console.log("Q Update.")
const interval = setInterval(function() {
    getQueue();
}, 10000);

function getQueue() {
    fetch("https://2bqueue.info/*", {mode: "no-cors"}, {headers: {'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => {
            queueElement.innerHTML = `${data.regular}`
        })
}

// End Queue Display