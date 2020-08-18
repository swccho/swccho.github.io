function getInputValue () {
    let  answer = '';
let value = document.getElementById('input1').value;
let value1 = document.getElementById('input2').value;
let tips = document.getElementById('tipss').value;
 answer = ((value * value1) * tips) / 100;
document.getElementById('ans').innerHTML = answer;

}
