let img = [
    {src:'https://images.all-free-download.com/images/wallpapers_large/god_of_war_2_hd_4255.jpg',
        id : '1'},

    {src:'https://images.all-free-download.com/images/wallpapers_large/god_of_war_2_7555.jpg',
        id: '2'},

    {src:'https://images.all-free-download.com/images/wallpapers_large/god_of_war_3_7632.jpg',
        id:'3'},

    {src:'https://images.all-free-download.com/images/wallpapers_large/god_of_war_3_game_8061.jpg',
        id: '4'}
];
let id = 0
let slide = '';
function init(){
    for(i = 0; i < img.length; i++){
       slide += `<img src=`+img[i].src+` id=`+i+`>`;
        
    }
    document.getElementById('slider').innerHTML = slide;
    document.getElementById(id).classList.add('active');
}

init();

function next(){
    if(id + 1 == img.length){
        id = 0
        document.getElementById(img.length - 1).classList.remove('active')
        document.getElementById(id).classList.add('active')
    } else{
        id++
        document.getElementById(id - 1).classList.remove('active')
        document.getElementById(id).classList.add('active')
    }

}
function prev(){
    if(id + 1 == img.length){
        id = 0
        document.getElementById(id).classList.add('active')
        document.getElementById(img.length - 1).classList.remove('active')
        
    } else{
        id++
        document.getElementById(id).classList.add('active')
        document.getElementById(id - 1).classList.remove('active')
       
    }
    console.log();
}
