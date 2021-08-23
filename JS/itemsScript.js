var addItemButton = document.getElementsByClassName("addToCartBtn")
console.log(addItemButton)

for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    console.log(button)
    button.addEventListener("click", function(){
        console.log("clicked")
        if(localStorage.length < 12){
            var itemsName = button.parentElement.getElementsByTagName("h1")
            var itemsPrice = button.parentElement.getElementsByTagName("h2")
            console.log(itemsPrice)
            console.log(itemsName)
            var itemName = itemsName[i].innerText
            var itemPrice = itemsPrice[i].innerText
            localStorage.setItem("item"+(localStorage.length + 1), itemName)
        } 
        else alert("Maximum of 12 shulkers per order")
    })
}
