//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    fetch('https://2bqueue.info/queue', {mode: "no-cors"})
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            console.log(`Prio: ${json.prio}`);
        })
  .catch(console.error);
}
getQueue();

// End Queue Display