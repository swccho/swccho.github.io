function getFormvalue(){
    let x = document.getElementById('form1');
    for(let i = 0; i <x.length; i++){
        if(x.elemnets[i].value!='Submit'){
            console.log(x.elemnets[i].value);
        }
    }
}