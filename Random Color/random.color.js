function GenColor(){
    let a = '123456789ABCDEF';
    let b = '#'
    for(let i = 0; i < 6; i++){
        b += a[Math.floor(Math.random() * 16)];
    }
    return b;
}
function randomColor(){
    document.getElementById('colorpad').style.backgroundColor = GenColor();
    document.getElementById('clrName').innerHTML = "Hex color:" + GenColor();
}
function autoPlay() {
    setInterval( function () {
        randomColor();
    }, 5000)
}
 autoPlay();
