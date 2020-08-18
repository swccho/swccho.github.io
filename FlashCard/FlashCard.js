
let id = 0;
function Qbbox(){
    id == 0 ? id = 1 : id = 0;
    if(id == 1){
        document.getElementById('QuestionBox').classList.add('active');
    } else{
        document.getElementById('QuestionBox').classList.remove('active');
    }
    
}
let QueAns = [];
let str = '';
function SaveA() {
    str = ''
    let arraypush = {
        Qua : '',
        Ans : '',
    }
    arraypush.Qua = document.getElementById('Question').value;
    arraypush.Ans = document.getElementById('Answer').value;
QueAns.push(arraypush);
QueAns.forEach(function (v, i) {
    str+=
    
    `
    <div class="col-3 ">
    
    <h1>`+v.Qua+`</h1>
    <button class="btn btn-outline-primary pl-5 pr-5 " onclick="ShowHide()">ShowHide </button>
    <div  id="ShowAns">
    <h1>`+v.Ans+`</h1>
    </div>
    
    <button class="btn btn-outline-warning mr-2 text-center" onclick="edit(`+i+`)">Edit</button>
    <button onclick="Deleteb(`+i+`)" class="btn btn-outline-secondary   ">Delete</button>
    
    </div>
    `
});
document.getElementById('Abox').classList.add('active');
document.getElementById('addAnswer').innerHTML = str;
}
function ShowHide(){
    id == 0 ? id = 1 : id = 0;
    if(id == 0){
        document.getElementById('ShowAns').classList.add('active')
    } else{
        document.getElementById('ShowAns').classList.remove('active')
    }
}
function closeBox() {
    document.getElementById('QuestionBox').classList.remove('active');
}
function Deleteb(index){
    QueAns.splice(index, 1)
    str = '';
    QueAns.forEach(function (v, i) {
        str+=
        
        `
        <div class="col-3 ">
        
        <h1>`+v.Qua+`</h1>
        <button class="btn btn-outline-primary pl-5 pr-5 " onclick="ShowHide()">ShowHide </button>
        <div  id="ShowAns">
        <h1>`+v.Ans+`</h1>
        </div>
        
        <button class="btn btn-outline-warning mr-2 text-center" onclick="edit(`+i+`)">Edit</button>
        <button onclick="Deleteb(`+i+`)" class="btn btn-outline-secondary   ">Delete</button>
        
        </div>
        
        `
    });
    document.getElementById('Abox').classList.add('active');
    document.getElementById('addAnswer').innerHTML = str;     
    
}

let editValue = '';
function edit(EID){
    
    editValue = EID;
let value = QueAns[EID].name;
$('#editTextQ').val(value);
$('#editTextA').val(value);
$('#editModal').modal('show');
}
function updateValue(){
    QueAns[editValue].Qua = $('#editTextQ').val();
    QueAns[editValue].Ans = $('#editTextA').val();
    str = ''
    QueAns.forEach(function (v, i) {
        str+=
        
        `
        <div class="col-3 ">
        
        <h1>`+v.Qua+`</h1>
        <button class="btn btn-outline-primary pl-5 pr-5 " onclick="ShowHide()">ShowHide </button>
        <div  id="ShowAns">
        <h1>`+v.Ans+`</h1>
        </div>
        
        <button class="btn btn-outline-warning mr-2 text-center" onclick="edit(`+i+`)">Edit</button>
        <button onclick="Deleteb(`+i+`)" class="btn btn-outline-secondary   ">Delete</button>
        
        </div>
        
        `
    });
    document.getElementById('addAnswer').innerHTML = str;  
    $('#editModal').modal('hide');   
}

