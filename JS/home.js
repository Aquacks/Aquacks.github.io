document.addEventListener('DOMContentLoaded', function () {
    const securityDiv = document.getElementsByClassName("SAPlistElem")[0]
    const automationDiv = document.getElementsByClassName("SAPlistElem")[1]
    const supplyDiv = document.getElementsByClassName("SAPlistElem")[2]

    for(let i = 0; i <= document.getElementsByClassName("SAPlistElem").length; i++){
        document.getElementsByClassName("SAPlistElem")[i].addEventListener("click", () => {
            document.getElementsByClassName("SAPlistElem")[i].setAttribute("style", "background-color: limegreen;");
            document.getElementsByClassName("SAPlistElem")[i].children.setAttribute("style", "visibility: hidden;");
        })
    }
});