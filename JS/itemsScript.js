var addItemButton = document.getElementsByClassName("addToCartBtn")
console.log(addItemButton)

for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    button.addEventListener("click", function(){
        console.log("clicked")
        if(localStorage.length < 12){
            var itemName = button.parentElement.getElementsByTagName("h1") 
            var itemPrice = button.parentElement.getElementsByTagName("h2")
            localStorage.setItem("item"+i, itemName[0].innerText.concat(",").concat(itemPrice[0].innerText)) 
        } 
        else alert("Maximum of 12 shulkers per order")
    })
}
