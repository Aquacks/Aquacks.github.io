window.addEventListener('load', function () {
    updateCart()
})
function updateCart(){
    for(var i = 0; i < localStorage.length; i++){
        var ul = document.getElementById("itemsList")
        var li = document.createElement("li")

        var h2 = document.createElement("h2")
        h2.setAttribute("id", "price")
        h2.innerText = localStorage.getItem("cart"+cartN).split(",").pop()

        var cartN = i + 1

        ul.appendChild(li)
        var text = localStorage.getItem("cart"+cartN)
        text = text.split(",").shift()
        li.innerText = text
    }
}