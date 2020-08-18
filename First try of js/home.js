//Challenge 1: Age In Days 

function ageInDays() {
    var birthYear = prompt('What year were you born... Good friend');
    var ageIn = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageIn + ' days old' );
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageInDays').remove();
}

//challenge 2:  Generate Cat

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}

//Challenge 3: Rock Paper scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice); //[0, 1] human won | bot lost
    console.log(results);
   message = finalMessage(results);
   console.log(message); // {'message':'You Won!', 'color': 'green'} 
   rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

 function numberToChoice(number) {
     return ['rock', 'paper', 'scissors'][number];
 }

 function decideWinner(yourChoice, computerChoice) {
   var rpsDatabase = {
       'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
       'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
       'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
   }

   var yourScore = rpsDatabase[yourChoice][computerChoice];
   var computerScore = rpsDatabase[computerChoice][yourChoice];

   return [yourScore, computerScore]; 
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0){
       return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'};
    } else {
         return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        rock : document.getElementById('rock').src,
        paper : document.getElementById('paper').src,
        scissors : document.getElementById('scissors').src
         
        
    }
//remove image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
}
