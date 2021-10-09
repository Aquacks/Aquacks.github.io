//Queue Display 

var queueElement = document.getElementById("queueCount");

fetch("https://2bqueue.info/queue", {mode: "no-cors"})
    .then((res) => res.json())
    .then((json) => {
        var textDiv = document.createElement("div");
        textDiv.innerHTML = `Queue: ${json.regular}`;
        queueElement.appendChild(textDiv)
    })
    .catch(err => {
        console.error('Error: ', err);
    });

// End Queue Display