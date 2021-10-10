//Queue Display 
var queueElement = document.getElementById("queueCount");

const interval = setInterval(function() {
    getQueue();
}, 10000);


function getQueue() {
    fetch("https://2bqueue.info/queue", {mode: "no-cors"})
        .then(res => res.json())
        .then(data => {
            queueElement.innerHTML = `${data.regular}`
        })
}

// End Queue Display