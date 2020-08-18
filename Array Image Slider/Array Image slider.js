let img = [
    {src:'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        id : '1'},

    {src:'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        id: '2'},

    {src:'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        id:'3'},

    {src:'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80',
        id: '4'}
];

let slide = '';
let id = 0;

function init(){
    for(i = 0; i < img.length; i++){
        slide +=`<img src=`+img[i].src+` id=`+i+` alt=''>`;
    }
    document.getElementById('slider').innerHTML = slide;
    document.getElementById(id).classList.add('active')
}

init();

function next(){
    if (id + 1 == img.length) {
        id = 0;
        document.getElementById(img.length - 1).classList.remove('active')
        document.getElementById(id).classList.add('active')
    } else {
        id++
        document.getElementById(id - 1).classList.remove('active')
        document.getElementById(id).classList.add('active')
    }
}

function prev(){
    if (id + 1 == img.length) {
        id = 0;
        document.getElementById(id).classList.add('active')
        document.getElementById(img.length - 1).classList.remove('active')
        
    } else {
        id++
        
        document.getElementById(id - 1 ).classList.remove('active')
        document.getElementById(id).classList.add('active')
        
    }
}