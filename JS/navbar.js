import axios from "axios"
//Queue Display 
var queueElement = document.getElementById("queueCount");

function getQueue() {
    axios.get("https://2bqueue.info/*", {method: "GET"}, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods':'POST, GET'
    }})
    .then(res => console.log(res))
}
getQueue();

// End Queue Display