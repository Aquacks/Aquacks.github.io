import $ from "jquery"

document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseenter", () => {       
                    //document.getElementsByClassName("SAPlistElemContai")[i].setAttribute("style", "visibility: hidden;");                                  
                    $(document.getElementsByClassName("SAPlistElemContai")[i]).fadeOut();
                })
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseleave", () => {       
                    $(document.getElementsByClassName("SAPlistElemContai")[i]).fadeIn();
                    //document.getElementsByClassName("SAPlistElemContai")[i].setAttribute("style", "visibility: visible;");                                            
                })
            }
        }
    }
});
