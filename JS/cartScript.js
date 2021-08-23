window.addEventListener('load', function () {
    createItemEntry()
    runDeleteButtons()
})
function createItemEntry(){
    for(var i = 0; i < localStorage.length; i++){
        var ul = document.getElementById("itemsList")
        var li = document.createElement("li")

        var h2 = document.createElement("h2")
        var deleteBtn = document.createElement("button")
        var deleteBtnImg = document.createElement("img")

        var itemN = i + 1

        ul.appendChild(li)
        var text = localStorage.getItem("item"+itemN)
        text = text.split(",").shift()
        li.innerText = text

        deleteBtn.setAttribute("class", "deleteBtn")
        li.appendChild(deleteBtn)

        deleteBtnImg.setAttribute("src","../Assets/delete.png")
        deleteBtnImg.setAttribute("id", "deleteBtnImg")
        deleteBtnImg.setAttribute("width", "50px")
        deleteBtn.appendChild(deleteBtnImg)
        
        h2.setAttribute("id", "price")
        li.appendChild(h2)
        var text2 = localStorage.getItem("item"+itemN)
        text2 = text2.split(",").pop()
        h2.innerText = text2
    }
}
function runDeleteButtons(){
    var removeCartBtns = document.getElementsByClassName("deleteBtn")
    console.log(removeCartBtns)
    for(var i = 0; i < removeCartBtns.length; i++){
        var removeButton = removeCartBtns[i]
        removeButton.addEventListener("click", function(event) {
            var removeBtnClicked = event.target
            removeBtnClicked.parentElement.parentElement.remove()
            var itemToRemoveFromLocal = removeBtnClicked.parentElement.innerText
            removeFromLocal(itemToRemoveFromLocal)
            console.log("removed")
        })
    }
}
function removeFromLocal(removeTarget){
    for(var i = 0; i < localStorage.length; i++){
        var ritemN = i + 1
        if(localStorage.getItem("item", ritemN).includes(removeTarget)){
            localStorage.removeItem("item", ritemN)
        }
    }
}