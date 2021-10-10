//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    console.log("Q Update.")
    fetch("https://2bqueue.info/queue", {mode: "no-cors"}).then(response => {
        console.log(response)
    })
}
getQueue();

// End Queue Display