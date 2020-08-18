let formArray = [];
let EmtStr = '';
let id = 0
function submit(){
    let arrayObj = {
        name: '',
        course:'',
        author:'',
    }
    arrayObj.name = document.getElementById('input1').value;
    arrayObj.course = document.getElementById('input2').value;
    arrayObj.author = document.getElementById('input3').value;
    EmtStr = '';
   
    formArray.push(arrayObj);
    console.log(formArray);
    formArray.forEach(function (v, i){
        EmtStr +=
        `<div class="col-3 " style="margin-bottom: 120px">
        <div class="card">
        <img src='https://source.unsplash.com/random' style="width:100%; height:100%">
        <div class="card-body">
        <h4 > Name: `+v.name+` </h4>
        <h4> Course: `+v.course+ `</h4>
        <h4> Author: `+v.author+`</h4>
        </div>
        </div>
        <br>
        </div>
        `
    });
    document.getElementById('createCardForm').innerHTML = EmtStr;

}
