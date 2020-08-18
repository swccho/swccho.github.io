let img = [
    {src : 'https://images8.alphacoders.com/532/thumb-1920-532407.jpg', type: 'Last of us'},
    {src : 'https://images6.alphacoders.com/511/thumb-1920-511799.jpg', type: 'Last of us'},
    {src : 'https://images5.alphacoders.com/408/thumb-1920-408539.jpg', type: 'Last of us'},

    { src: 'https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/naked_boxshot_tablet_138234.jpg', type: 'FarCry'},
    { src: 'https://c4.wallpaperflare.com/wallpaper/174/73/229/far-cry-4-wallpaper-preview.jpg', type: 'FarCry'},
    { src: 'https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg', type: 'FarCry'},


    { src: 'https://www.residentevil.com/_asset/images/resistance-panel.jpg', type: 'Resident Evil'},
    { src: 'https://www.residentevil.com/_asset/images/re2-panel.jpg', type: 'Resident Evil'},
    { src: 'https://www.techgenyz.com/wp-content/uploads/2020/04/resident-evil-8.jpg', type: 'Resident Evil'},
    
];
let picture = '';
let Mpicture = '';


function show(type){
    
picture = '';
let typeImg = [];
if(type == 'all'){
    img.forEach(function(v, i){
        typeImg.push(v);
    });
    typeImg.forEach(function(v, i) {
        picture+=
        `<img onclick="opneImgModal('all', `+i+`)" src=`+v.src+`>`
    })
} else{
    img.forEach(function(v, i){
        if(v.type == type){
            typeImg.push(v);
        }
    })
    typeImg.forEach(function(v, i) {
        picture+=
            `<img onclick="opneImgModal('`+v.type+`', `+i+`)" src=`+v.src+`>`
    })
}
document.getElementById('add').innerHTML = picture;
}

let typeImg = [];
let id = 0;
function opneImgModal (type, insideId) {
    id = insideId;
    Mpicture = '';
    
    if(type == 'all'){
        img.forEach(function(v, i){
            typeImg.push(v);
        });
        typeImg.forEach(function(v, i) {
            Mpicture+=
            `<img class="a" id="`+i+`" src=`+v.src+`>`
        })
    } else{
        img.forEach(function(v, i){
            if(v.type == type){
                typeImg.push(v);
            }
        })
        typeImg.forEach(function(v, i) {
            Mpicture+=
            `<img class="a" id="`+i+`" src=`+v.src+`>`
        })
    }   
    document.getElementById('images').innerHTML = Mpicture;
    document.getElementById(id).classList.add('active');
    document.getElementById('imgModal').classList.add('active');
}

function next() {

     if(id + 1 == typeImg.length){
        id = 0;
    document.getElementById(id).classList.add('active');
    document.getElementById(typeImg.length - 1).classList.remove('active')
    } else{
        document.getElementById(id).classList.remove('active');
        document.getElementById(id + 1).classList.add('active');
        id = id + 1;
    }
}


function prev() {
    if(id == 0){
        id = typeImg.length - 1;
        document.getElementById(id).classList.add('active');
        document.getElementById('0').classList.remove('active')
    } else {
        document.getElementById(id).classList.remove('active')
        document.getElementById(id - 1).classList.add('active');
        id = id - 1;
    }
    
}