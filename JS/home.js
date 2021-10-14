document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseenter", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContainer")[i];
                    //fades old elements
                    elem.setAttribute("style", "opacity:0;")   
                    elem.setAttribute("style", "display:none;")
                    //fades new elements                         
                    const textElem = document.getElementsByClassName("SAPtext")[i]
                    textElem.setAttribute("style", "display:block")        
                }) 
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("mouseleave", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContainer")[i];
                    //fades old elements
                    elem.setAttribute("style", "opacity:1;")
                    elem.setAttribute("style", "display:block;")                
                    //unloads new text
                    const textElem = document.getElementsByClassName("SAPtext")[i]
                    textElem.setAttribute("style", "display:none")    
                })                   
            }
        }
    }
});
