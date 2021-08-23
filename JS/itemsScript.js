var addItemButton = document.getElementsByClassName("addToCartBtn")
console.log(addItemButton)

for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    console.log(button)
    button.addEventListener("click", function(){
        console.log("clicked")
        if(localStorage.length < 12){
            var itemName = button.parentElement.getElementsByTagName("h1") 
            var itemPrice = button.parentElement.getElementsByTagName("h2")
            console.log(itemName)
            localStorage.setItem("item"+(localStorage.length + 1), itemName.innerText.concat(",").concat(itemPrice.innerText) 
        } 
        else alert("Maximum of 12 shulkers per order")
    })
}
