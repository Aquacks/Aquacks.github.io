//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    fetch('https://2bqueue.info/queue', {mode: "no-cors"})
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(`Prio: ${data.prio}`);
        })
  .catch(console.error);
}
getQueue();

// End Queue Display