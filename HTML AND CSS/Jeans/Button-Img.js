img = [
    {src : 'https://images8.alphacoders.com/532/thumb-1920-532407.jpg', type: 'Last of us'},
    {src : 'https://images6.alphacoders.com/511/thumb-1920-511799.jpg', type: 'Last of us'},
    {src : 'https://images5.alphacoders.com/408/thumb-1920-408539.jpg', type: 'Last of us'},
    {src : '1.jpg', type: 'God Of War'},
    { src: '2.jpg', type: 'God Of War'},
    { src: '3.jpg', type: 'God Of War'},
    { src: 'https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/naked_boxshot_tablet_138234.jpg', type: 'FarCry'},
    { src: 'https://c4.wallpaperflare.com/wallpaper/174/73/229/far-cry-4-wallpaper-preview.jpg', type: 'FarCry'},
    { src: 'https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg', type: 'FarCry'},
    { src: '7.jpg', type: 'Prince of Persia'},
    { src: '8.jpg', type: 'Prince of Persia'},
    { src: '9.jpg', type: 'Prince of Persia'},
    { src: '10.jpg', type: 'Call of Duty'},
    { src: '12.jpg', type: 'Call of Duty'},

    { src: '13.jpg', type: 'Call of Duty'},
    { src: 'https://www.residentevil.com/_asset/images/resistance-panel.jpg', type: 'Resident Evil'},
    { src: 'https://www.residentevil.com/_asset/images/re2-panel.jpg', type: 'Resident Evil'},
    { src: 'https://www.techgenyz.com/wp-content/uploads/2020/04/resident-evil-8.jpg', type: 'Resident Evil'},
    
];

let picture = '';
function show(type){

    picture = '';
if(type == 'all'){
img.forEach(function(v){
    picture+=
    `
    <img src=`+v.src+`>
    `
});

} else{
    console.log(type);
  img.forEach(function(v){
    console.log(v.type);
      if(v.type == type){
        picture+=
          `<img src=`+v.src+`>`
      }
  })   
}
document.getElementById('add').innerHTML = picture;

}
