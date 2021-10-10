//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    fetch('https://2bqueue.info/queue', {
        mode: 'no-cors',
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then((data) => {
            console.log(`Prio: ${data.prio}`);
        })
  .catch(console.error);
}
getQueue();

// End Queue Display