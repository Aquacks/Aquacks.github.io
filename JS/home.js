import $ from "jquery";

const securityDiv = document.getElementsByClassName("SAPlistElem")[0]

console.log(securityDiv)

$(document).ready(function(){
    $(securityDiv).click(function(){
        alert("Clicked")
    });
});