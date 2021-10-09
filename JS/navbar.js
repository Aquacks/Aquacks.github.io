var queueElement = document.getElementById("queueCount");

fetch("https://2bqueue.info/queue", {mode: "no-cors"})
    .then(res => res.json())
    .then(data => {
        var textDiv = document.createElement("div");
        textDiv.innerHTML = dat[0];
        queueElement.appendChild(textDiv)
    })
    .catch(err => {
        console.error('Error: ', err);
    });
