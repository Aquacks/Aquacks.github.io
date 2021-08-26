window.addEventListener('load', function () {
    createItemEntries()
    runDeleteButtons()
    runDeliveryModal()
})
function createItemEntries(){
    for(var i = 0; i < 13; i++){//todo: length of storage does not equal item entry number
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
    var removeCartBtns = document.getElementsByClassName("deleteBtn") //assigns all buttons to "removeCartBtns"
    console.log(removeCartBtns)
    for(var i = 0; i < removeCartBtns.length; i++){ //for the number of buttons there are
        var removeButton = removeCartBtns[i] //assign each button to an individual variable
        removeButton.addEventListener("click", function(event) { //when any button is clicked
            var removeBtnClicked = event.target //the one that has been clicked is asigned to variable
            console.log(removeBtnClicked)
            console.log(removeBtnClicked.parentElement)
            removeBtnClicked.parentElement.parentElement.remove() //remove html entry for item
            localStorage.removeItem(("item"+removeBtnClicked.parentElement.id)) //remove item
            console.log("removed")
        })
    }
}
function runDeliveryModal(){
    var modal = document.getElementById("deliveryModal");
    var btn = document.getElementById("checkoutBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}
function getOptionsData(){
    $("#optionsForm").submit(function(e) {
        e.preventDefault();
    });
    alert("triggered")
    console.log(document.getElementById('xcoord').value);
    console.log(document.getElementById('zcoord').value);
    return false;
}

