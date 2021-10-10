//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    console.log("Q Update.")
    fetch("https://2bqueue.info/queue", {mode: "no-cors"})
    .then((response) => {
        response.json();
    })
    .then((json) => {
        console.log(json);
        console.log(`regular: ${json.regular}`);
    })
    .catch(console.error);
}
getQueue();

// End Queue Display