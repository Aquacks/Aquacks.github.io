var addItemButton = document.getElementsByClassName("addToCartBtn")
console.log(addItemButton)
for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    button.addEventListener("click", function(){
        console.log("clicked")
        var itemName = button.parentElement.getElementsByTagName("h1") 
        var itemPrice = button.parentElement.getElementsByTagName("h2")
        localStorage.setItem("cart1", itemName[0].innerText.concat(",").concat(itemPrice[0].innerText))  
    })
}

