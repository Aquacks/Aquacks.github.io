document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("click", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContainer")[i];
                    //fades old elements
                    $(elem).fadeOut()
                    //fades new elements                         
                    const textElem = document.getElementsByClassName("SAPtext")[i]
                    $(textElem).fadeIn()       
                })                               
            }
        }
    }
});
