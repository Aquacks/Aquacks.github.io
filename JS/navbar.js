//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    fetch("https://2bqueue.info/*", {mode: "cors"})
    .then(res => console.log(res))
}
getQueue();

// End Queue Display