document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("click", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContai")[i];
                    if($(elem).is(":hidden")){
                        $(elem).fadeIn();
                    }
                    else{$(elem).fadeOut()}
                    //document.getElementsByClassName("SAPlistElemContai")[i].setAttribute("style", "visibility: hidden;");                                  
                })               
            }
        }
    }
});
