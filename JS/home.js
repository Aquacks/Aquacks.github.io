document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseenter", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContai")[i];
                       
                }) 
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseleave", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContai")[i];
                    if(elem.getAttribute("opacity") == 1){
                        elem.setAttribute("style", "opacity:0;")
                    }
                    else {elem.setAttribute("style", "opacity:1;")}
                })                   
            }
        }
    }
});
