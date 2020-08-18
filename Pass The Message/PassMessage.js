function inputValue(){
    let pass = '';
    let value = document.getElementById('txt').value;
    pass = value;
    document.getElementById('LastMsg').innerHTML = pass;
}
function onKey(event){
    if (event.keyCode == 13) {
        inputValue();
    }
}
document.addEventListener('keypress', onKey)