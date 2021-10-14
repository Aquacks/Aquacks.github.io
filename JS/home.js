document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                var disToggl = true;
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("click", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContainer")[i];                 
                    //fades old elements
                    $(elem).fadeOut()
                    if(disToggl == true){
                        elem.setAttribute("stlye", "display:none;")
                        elem.setAttribute("stlye", "visibility:hidden;")
                    }
                    else {elem.setAttribute("stlye", "display:block;"); elem.setAttribute("stlye", "visibility:visible;")}
                    //fades new elements                         
                    const textElem = document.getElementsByClassName("SAPtext")[i]
                    $(textElem).fadeIn()       
                    disToggl = !disToggl;
                })                               
            }
        }
    }
});
