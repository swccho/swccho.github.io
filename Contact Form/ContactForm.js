let FormArray = [];

function send(){
    
    let formObj = {
        name : '',
        email: '',
        Message: '',
    }
    
    formObj.name = document.getElementById('input1').value;
    formObj.email = document.getElementById('input2').value;
    formObj.Message = document.getElementById('textarea').value;

    FormArray.push(formObj);
    saveArray()

    formObj.name = document.getElementById('input1').value = '';
    formObj.email = document.getElementById('input2').value = '';
    formObj.Message = document.getElementById('textarea').value = '';
}
function saveArray(){
    localStorage.setItem('itemSave', JSON.stringify(FormArray))
}