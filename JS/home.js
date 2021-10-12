document.addEventListener('DOMContentLoaded', function () {
    const securityDiv = document.getElementsByClassName("SAPlistElem")[0]
    if(securityDiv){
        securityDiv.addEventListener("click", () => {
            securityDiv.setAttribute("style", "background-color: limegreen;");
        })
    }
});