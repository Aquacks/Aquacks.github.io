document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseenter", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContai")[i];
                    elem.setAttribute("style", "opacity:0;")   
                    //fades show elements

                    const infoText = document.createElement("p")
                    if(elem.id == "secElm"){
                        infoText.innerHTML = "Security text"
                    }
                    if(elem.id == "autElm"){
                        infoText.innerHTML = "Automation text"
                    }
                    if(elem.id == "supElm"){
                        infoText.innerHTML = "Supply text"
                    }
                    else{infoText.innerHTML = " "}

                    if(infoText.innerHTML != " "){
                        elem.appendChild(infoText)
                    }
                }) 
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseleave", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContai")[i];
                    elem.setAttribute("style", "opacity:1;")
                    //fades show elements

                    //unloads new
                })                   
            }
        }
    }
});
