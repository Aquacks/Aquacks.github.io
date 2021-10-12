import $ from "jquery";

const securityDiv = document.getElementsByClassName("SAPlistElem")[0]

$(securityDiv).click(function(){
    alert("Clicked")
    securityDiv.setAttribute("background-color:", "limegreen")
});