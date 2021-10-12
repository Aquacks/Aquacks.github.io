const securityDiv = document.getElementsByClassName("SAPlistElem")[0]

document.addEventListener('DOMContentLoaded', function () {
    if(securityDiv){
        securityDiv.addEventListener("click", () => {
            securityDiv.setAttribute("style", "background-color: limegreen;");
        })
    }
});