window.addEventListener('load', function () {
    printLength()
})
function printLength(){
    for(var i = 0; i < localStorage.length; i++){
        var ul = document.getElementById("itemsList")
        var li = document.createElement("li")

        ul.appendChild(li)
        li.innerText = localStorage[i]
    }
}