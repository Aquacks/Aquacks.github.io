document.addEventListener('DOMContentLoaded', function () {
    if(document.getElementsByClassName("SAPlistElem").length = 3){
        for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
            if(document.getElementsByClassName("SAPlistElem")[i]){
                document.getElementsByClassName("SAPlistElem")[i].addEventListener("click", () => {   
                    const elem = document.getElementsByClassName("SAPlistElemContai")[i];
                    $(elem).toggle(500,swing);     
                })               
            }
        }
    }
});
