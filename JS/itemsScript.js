var addItemButton = document.getElementsByClassName("addToCartBtn")
console.log(addItemButton)

for (var i = 0; i < addItemButton.length; i++){
    var button = addItemButton[i]
    console.log(button)
    button.addEventListener("click", function(event){
        var buttonClicked = event.target
        var itemName = buttonClicked.parentElement.querySelector("h1").innerText
        var itemPrice = buttonClicked.parentElement.querySelector("h2").innerText
        console.log("clicked")
        if(localStorage.length < 12){
            localStorage.setItem("item"+(localStorage.length + 1), (itemName+","+itemPrice))
        } 
        else alert("Maximum of 12 shulkers per order")
    })
}
