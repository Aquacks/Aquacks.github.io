window.addEventListener('load', function () {
    updateCart()
})
function updateCart(){
    for(var i = 0; i < localStorage.length; i++){
        addCartItem()
    }
}
function addCartItem(){
        var ul = document.getElementById("itemsList")
        var li = document.createElement("li")

        var h2 = document.createElement("h2")
        var deleteBtn = document.createElement("button")
        var deleteBtnImg = document.createElement("img")

        var cartN = i + 1

        ul.appendChild(li)
        var text = localStorage.getItem("cart"+cartN)
        text = text.split(",").shift()
        li.innerText = text

        deleteBtn.setAttribute("onclick", "removeItemFromCart()")
        deleteBtn.setAttribute("id", "deleteBtn")
        li.appendChild(deleteBtn)

        deleteBtnImg.setAttribute("src","../Assets/delete.png")
        deleteBtnImg.setAttribute("id", "deleteBtnImg")
        deleteBtnImg.setAttribute("width", "50px")
        deleteBtn.appendChild(deleteBtnImg)
        
        h2.setAttribute("id", "price")
        li.appendChild(h2)
        var text2 = localStorage.getItem("cart"+cartN)
        text2 = text2.split(",").pop()
        h2.innerText = text2
    
}
function removeItemFromCart(){
    console.log("remove")
    localStorage.removeItem()
}