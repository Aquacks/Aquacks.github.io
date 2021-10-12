document.addEventListener('DOMContentLoaded', function () {
    const securityDiv = document.getElementsByClassName("SAPlistElem")[0]
    if(securityDiv){
        securityDiv.addEventListener("click", () => {
            securityDiv.setAttribute("style", "background-color: limegreen;");
        })
    }
    const automationDiv = document.getElementsByClassName("SAPlistElem")[1]
    if(automationDiv){
        automationDiv.addEventListener("click", () => {
            automationDiv.setAttribute("style", "background-color: limegreen;");
        })
    }
    const supplyDiv = document.getElementsByClassName("SAPlistElem")[2]
    if(supplyDiv){
        supplyDiv.addEventListener("click", () => {
            supplyDiv.setAttribute("style", "background-color: limegreen;");
        })
    }
});