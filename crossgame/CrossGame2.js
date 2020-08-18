let Ami = true;
let Array = ['','','','','','','','','']

function CrossCircle(id){
    let x = document.getElementById(id);
    let y = x.innerHTML;
    if(y === ''){
        if(Ami === true){
            x.innerHTML = '<p class="circle "></p>';
            Array[id] = 'circle'
        } else{
            x.innerHTML = '<p class="cross"></p>';
            Array[id] = 'cross';
        }
        Ami = !Ami;
    }
    result()
}

function result(){
    if(Array[0] != '' && Array[0] == Array[1] && Array[1] == Array[2]){
        (document.getElementById('linecutter').classList.add('linecutter012'))
        setTimeout(function(){
            alert(Array[0] + 'Win');
        }, 500)
    } else if(Array[3] != '' && Array[3] == Array[4] && Array[4] == Array[5]){
        (document.getElementById('linecutter').classList.add('linecutter345'))
        setTimeout(function(){
            alert(Array[3] + 'Win');
        }, 500)
    } else if(Array[6] != '' && Array[6] == Array[7] && Array[7] == Array[8]){
        (document.getElementById('linecutter').classList.add('linecutter678'))
        setTimeout(function(){
            alert(Array[6] + 'Win');
        }, 500)
    } else if(Array[0] != '' && Array[0] == Array[4] && Array[4] == Array[8]){
        (document.getElementById('linecutter').classList.add('linecutter048'))
        setTimeout(function(){
            alert(Array[0] + 'Win');
        }, 500)
    } else if(Array[2] != '' && Array[2] == Array[4] && Array[4] == Array[6]){
        (document.getElementById('linecutter').classList.add('linecutter246'))
        setTimeout(function(){
            alert(Array[2] + 'Win');
        }, 500)
    } else if(Array[0] != '' && Array[0] == Array[3] && Array[3] == Array[6]){
        (document.getElementById('linecutter').classList.add('linecutter036'))
        setTimeout(function(){
            alert(Array[0] + 'Win');
        }, 500)
    } else if(Array[1] != '' && Array[1] == Array[4] && Array[4] == Array[7]){
        (document.getElementById('linecutter').classList.add('linecutter147'))
        setTimeout(function(){
            alert(Array[1] + 'Win');
        }, 500)
    } else if(Array[2] != '' && Array[2] == Array[5] && Array[5] == Array[8]){
        (document.getElementById('linecutter').classList.add('linecutter258'))
        setTimeout(function(){
            alert(Array[2] + 'Win');
        }, 500)
    }}
