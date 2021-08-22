var cartList = document.getElementsById("content1")
console.log(cartList)

for(var i = 0; localStorage.length; ++i){
    const div = document.createElement("div")
    const divText = document.createTextNode(localStorage[i])
    div.appendChild(divText)
    const currentDiv = document.getElementById("content1")
    document.body.insertBefore(div, currentDiv)
}