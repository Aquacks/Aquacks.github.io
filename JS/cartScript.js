window.addEventListener('load', function () {
    printLength()
})
function printLength(){
    for(var i = 0; localStorage.length; i++){
        console.log(i)
    }
}