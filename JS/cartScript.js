window.addEventListener('load', function () {
    createItemEntries()
    runDeleteButtons()
})
function createItemEntries(){
    for(var i = 0; i < localStorage.length; i++){//todo: length of storage does not equal item entry number
        var itemN = i + 1
        if(localStorage.getItem("item"+itemN) != null){
            console.log("creating")
            var ul = document.getElementById("itemsList")
            var li = document.createElement("li")

            var h2 = document.createElement("h2")
            var deleteBtn = document.createElement("button")
            var deleteBtnImg = document.createElement("img")

            ul.appendChild(li)
            var text = localStorage.getItem("item"+itemN)
            console.log(text)
            text = (text.split(",")).shift()
            li.innerText = text

            deleteBtn.setAttribute("class", "deleteBtn")
            deleteBtn.setAttribute("id", itemN)
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
}
function runDeleteButtons(){
    var removeCartBtns = document.getElementsByClassName("deleteBtn")
    console.log(removeCartBtns)
    for(var i = 0; i < removeCartBtns.length; i++){
        var removeButton = removeCartBtns[i]
        removeButton.addEventListener("click", function(event) {
            var removeBtnClicked = event.target
            console.log(removeBtnClicked)
            console.log(removeBtnClicked.parentElement)
            removeBtnClicked.parentElement.parentElement.remove()
            localStorage.removeItem("item"+removeBtnClicked.parentElement.id)
            console.log("removed")

            // if((localStorage.getItem("item")+removeBtnClicked.parentElement.id).includes(removeBtnClicked.parentElement.parentElement.innerText)){
            //     localStorage.remove("item"+removeBtnClicked.parentElement.id)
            // }
        })
    }
}
