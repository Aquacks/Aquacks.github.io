var addItemButton = document.getElementsByClassName("addToCartBtn")
console.log(addItemButton)

for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    console.log(button)
    button.addEventListener("click", function(){
        console.log("clicked")
        if(localStorage.length < 12){
            var itemName = button[0].parentElement.getElementsByTagName("h1") 
            var itemPrice = button[0].parentElement.getElementsByTagName("h2")
            console.log(itemName)
            localStorage.setItem("item"+(localStorage.length + 1), itemName[0].innerText.concat(",").concat(itemPrice[0].innerText)) 
        } 
        else alert("Maximum of 12 shulkers per order")
    })
}
