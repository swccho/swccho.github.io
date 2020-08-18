let num = 0;


function addCounter () {
    num++
    document.getElementById('addNum').innerHTML = num
    if(num > 0 ){
        document.getElementById('addNum').setAttribute('style', 'color: green; font-size: 120px; ')
    }
}


function lessCounter () {
    num--
    document.getElementById('addNum').innerHTML = num;
    if(num <  0 ){
        document.getElementById('addNum').setAttribute('style', 'color: red; font-size: 120px; ')
    }
}