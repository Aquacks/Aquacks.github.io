document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            document.getElementsByClassName("SAPlistElem")[i].addEventListener("hover", () => {
                if(document.getElementsByClassName("SAPlistElem")[i]){
                    document.getElementsByClassName("SAPlistElemContai")[i].setAttribute("style", "visibility: hidden;");
                }
            })
        }
    }
});