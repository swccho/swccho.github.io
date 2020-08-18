let img = [
    {src : 'https://images8.alphacoders.com/532/thumb-1920-532407.jpg', type: 'Last of us'},
    {src : 'https://images6.alphacoders.com/511/thumb-1920-511799.jpg', type: 'Last of us'},
    {src : 'https://images5.alphacoders.com/408/thumb-1920-408539.jpg', type: 'Last of us'},
    {src : 'https://images.alphacoders.com/292/292661.jpg', type: 'Last of us'},
    {src : 'https://cdn.vox-cdn.com/thumbor/V5T4o-qLGoFoCBwNmbG2fLzz4ps=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20042898/LastOfUs2_SonyInteractiveEntertainment_Ringer.jpg', type:'Last of us'},
    {src : 'https://i.inews.co.uk/content/uploads/2020/06/PRI_155019864.jpg', type:'Last of us'},

    { src: 'https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/naked_boxshot_tablet_138234.jpg', type: 'FarCry'},
    { src: 'https://c4.wallpaperflare.com/wallpaper/174/73/229/far-cry-4-wallpaper-preview.jpg', type: 'FarCry'},
    { src: 'https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg', type: 'FarCry'},
    { src: 'https://i.redd.it/ytxy97zchbq21.jpg', type: 'FarCry'},
    { src:'https://media.playstation.com/is/image/SCEA/far-cry-primal-listing-thumb-01-ps4-us-21jan16?$Icon$', type:'FarCry'},
    { src: 'https://miro.medium.com/max/2560/0*BzM995QpZENH9Q53.',type:'FarCry'},

    
    { src: 'https://www.residentevil.com/_asset/images/re2-panel.jpg', type: 'Resident Evil'},
    { src: 'https://www.residentevil.com/_asset/images/resistance-panel.jpg', type: 'Resident Evil'},
    { src: 'https://www.videogameschronicle.com/files/2020/04/Resident-Evil-4-Remake.jpg', type:'Resident Evil'},
    { src: 'https://cdn.gamer-network.net/2015/articles/1/8/4/1/1/1/7/digitalfoundry-2016-resident-evil-5-remastered-1467386637501.jpg/EG11/thumbnail/1920x1280/format/jpg/quality/80', type: 'Resident Evil'},
    { src: 'https://mspoweruser.com/wp-content/uploads/2016/12/Resident-Evil-7.jpg', type: 'Resident Evil'},
    { src: 'https://www.techgenyz.com/wp-content/uploads/2020/04/resident-evil-8.jpg', type: 'Resident Evil'},
    
];
let modalAmigo = '';
let amigo = '';
function showImg(type){
    amigo = '';
if(type == 'all'){
    img.forEach(function(v, i){
        amigo+=
        `<img onclick="OpenModal('all', `+i+`)" src=`+v.src+`>`
    })
} else{
    amigo = ''
    img.forEach(function(v, i){
        if(v.type == type)
        amigo+=
        `<img onclick="OpenModal('`+v.type+`', `+i+`)" src=`+v.src+`>`
    })
}
document.getElementById('AddImg').setAttribute('style','border: 10px solid brown');
document.getElementById('AddImg').innerHTML = amigo;
}
let imgType= [];
let id = 0;
function OpenModal(type, ii){
    id = ii;
    console.log(ii); 
    modalAmigo = '';
    modalAmigo += `<button id="cross" onclick="Cross()" class="cross">x</button>`
if(type == 'all'){
    img.forEach(function(v, i){
        modalAmigo+=
        `<img  id=`+i+`  src=`+v.src+`>`
        
    });
} else{
    img.forEach(function(v, i){
        if(v.type == type){
            modalAmigo+=
            `<img  id=`+i+`  src=`+v.src+`>`
        }
    });

} 

document.getElementById('ImgModal').innerHTML = modalAmigo;
document.getElementById('ImgModal').classList.add('active');
document.getElementById(id).classList.add('active')

}

function Cross(){
    document.getElementById('ImgModal').classList.remove('active');
}