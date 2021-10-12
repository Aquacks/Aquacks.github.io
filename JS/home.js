document.addEventListener('DOMContentLoaded', function () {
    var SAPtoggle= true;
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseover", () => {       
                    if(SAPtoggle == true) {document.getElementsByClassName("SAPlistElemContai")[i].setAttribute("style", "visibility: hidden;");}       
                    else {document.getElementsByClassName("SAPlistElemContai")[i].setAttribute("style", "visibility: visible;");}
                    SAPtoggle = !SAPtoggle;
                })
            }
        }
    }
});