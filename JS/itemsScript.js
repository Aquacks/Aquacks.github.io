var addItemButton = document.getElementsByClassName("addToCartButton")
console.log(addItemButton)
for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    button.addEventListener("click", function(){
        console.log("clicked", i)
        var cart1 = addItemButton[i].parentElement.innerText
        localStorage.setItem("cart1", cart1)
    })
}

