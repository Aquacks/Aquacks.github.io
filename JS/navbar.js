//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    fetch("https://2bqueue.info/*", {headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods':'POST, GET'
    }})
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      console.log(`Prio: ${json.prio}`);
    })
    .catch(console.error);
}
getQueue();

// End Queue Display