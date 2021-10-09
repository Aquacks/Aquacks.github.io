//Queue Display 

const { Console } = require("console");

var queueElement = document.getElementById("queueCount");

const interval = setInterval(function() {
    update();
}, 10000);

function update() {
    fetch("https://2bqueue.info/queue", {mode: "no-cors"})
        .then((res) => res.json())
        .then((json) => {
            var textDiv = document.createElement("div");
            textDiv.innerHTML = `Queue: ${json.regular}`;
            if(textDiv != null){
                queueElement.appendChild(textDiv)
            }
            else return
        })
        .catch(err => {
            console.error('Error: ', err);
        });
}
// End Queue Display