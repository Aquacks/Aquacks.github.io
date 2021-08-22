window.addEventListener('load', function () {
    updateCart()
})
function updateCart(){
    for(var i = 0; i < localStorage.length; i++){
        var ul = document.getElementById("itemsList")
        var li = document.createElement("li")

        var cartN = i + 1

        var h2 = document.createElement("h2")
        li.appendChild(h2)
        h2.setAttribute("id", "price")
        var text2 = localStorage.getItem("cart"+cartN)
        text2 = text2.split(",").pop()
        h2.innerText = text2

        ul.appendChild(li)
        var text = localStorage.getItem("cart"+cartN)
        text = text.split(",").shift()
        li.innerText = text
    }
}