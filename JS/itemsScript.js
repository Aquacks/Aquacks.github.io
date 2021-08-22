var addItemButton = document.getElementsByClassName("addToCartBtn")
console.log(addItemButton)

var cartN = 0

for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    button.addEventListener("click", function(){
        console.log("clicked")
        if(cartN < 12){
            cartN = cartN + 1
            var itemName = button.parentElement.getElementsByTagName("h1") 
            var itemPrice = button.parentElement.getElementsByTagName("h2")
            localStorage.setItem("cart"+cartN, itemName[0].innerText.concat(",").concat(itemPrice[0].innerText)) 
        } 
    })
}

