let bmi = '';
function BMI(){
    bmi = '';
     let Height = document.getElementById('input1').value;
     let weight = document.getElementById('input2').value;

     if((Height === '') || (Height < 0) || (isNaN(Height))){
          document.getElementById('answer').innerHTML = 'Please Provide a valid Height';
     } else if((weight === '') || (weight < 0) || (isNaN(weight))){
          document.getElementById('answer').innerHTML = 'please Provied a Valid weight';
     } else{
           bmi = (weight / ((Height * Height) /10000)).toFixed(2);
          document.getElementById('answer').innerHTML = bmi;
     }
}