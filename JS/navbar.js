var queueElement = document.getElementById("queueCount");

fetch("https://2bqueue.info/queue", {mode: "no-cors"})
    .then(res => {return})
    .then(data => {
        var textDiv = document.createElement("div");
        textDiv.innerHTML = data[0];
        queueElement.appendChild(textDiv)
    })
    .catch(err => {
        console.error('Error: ', err);
    });
