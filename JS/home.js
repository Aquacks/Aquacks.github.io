document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseenter", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContai")[i];
                    elem.setAttribute("style", "opacity:0;")   
                    //fades show elements

                    const infoText = document.createElement("p")
                    if(document.getElementsByClassName("SAPlistElemContai")[i] == document.getElementsByClassName("SAPlistElem")[0]){
                        infoText.innerHTML = "Security text"
                    }
                    if(document.getElementsByClassName("SAPlistElemContai")[i] == document.getElementsByClassName("SAPlistElem")[1]){
                        infoText.innerHTML = "Automation text"
                    }
                    if(document.getElementsByClassName("SAPlistElemContai")[i] == document.getElementsByClassName("SAPlistElem")[2]){
                        infoText.innerHTML = "Supply text"
                    }
                    else{infoText.innerHTML = " "}

                    if(infoText != " "){
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
