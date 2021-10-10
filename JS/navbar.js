//Queue Display 
var queueElement = document.getElementById("queueCount");

getQueue();
const interval = setInterval(function() {
    getQueue();
}, 10000);

function getQueue() {
    await fetch("https://2bqueue.info/*", {mode: "no-cors"}, {headers: {'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => {
            queueElement.innerHTML = `${data.regular}`
        })
}

// End Queue Display