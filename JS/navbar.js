//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    fetch("https://2bqueue.info/*", {mode: "no-cors"})
    .then(res => console.log(res))
}
getQueue();

// End Queue Display