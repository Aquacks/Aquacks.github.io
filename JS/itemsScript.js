var addItemButton = document.getElementsByClassName("addToCartBtn")
console.log(addItemButton)
for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    button.addEventListener("click", function(){
        console.log("clicked")
        var cart1 = button.parentElement.getElementsByTagName("h1")
        localStorage.setItem("cart1", cart1[0].innerText)
    })
}

