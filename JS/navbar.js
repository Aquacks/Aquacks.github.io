var queueElement = document.getElementById("queueCount");

fetch("https://2bqueue.info/*")
    .then(res => res.json())
    .then(data => {
        queueElement.innerHTML = data
    }).catch(err => {
        console.error('Error: ', err);
    });

