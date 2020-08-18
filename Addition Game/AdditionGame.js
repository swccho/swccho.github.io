let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);


let total = firstNumber + secondNumber;

let primary = document.getElementById('primary-number');
primary.innerHTML = firstNumber;

let second = document.getElementById('secondary-number');
second.innerHTML = secondNumber;

function check(){
    let guess = document.getElementById('input1').value;
    guess = Math.floor(guess);

    if(guess === total){
        alert('Correct');
        window.location.reload()
    }else{
        alert('Incorrect. The answer is ' +total+ '.');
        window.location.reload();
    }
}