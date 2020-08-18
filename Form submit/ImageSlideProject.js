let imgArray = [
    { src : 'https://wallpapercave.com/wp/wp4864334.jpg'},
    { src : 'https://1.bp.blogspot.com/-I7O6-Z4ZkR4/XexMHhFI0qI/AAAAAAAAi9w/VCzOyHC55F0hXGvPTOkfulrBG7B4sjeIgCLcBGAsYHQ/s2560/captain-america-angry-xj-2560x1440.jpg'},
    { src : 'https://2.bp.blogspot.com/-FETIUrENCH8/XNekSCJxjiI/AAAAAAAACUg/bZRq_8UcphUcxTzN81PiQu8nxAkKLLZLwCKgBGAs/w0/avengers-endgame-captain-america-thor-hammer-lightning-uhdpaper.com-4K-154.jpg'},
    { src : 'https://images.hdqwalls.com/download/iron-man-artworks-ft-1366x768.jpg'},
    { src : 'https://www.pixel4k.com/wp-content/uploads/2019/08/zombie-iron-man-in-spiderman-far-from-home_1565052745.jpg'},
    { src : 'https://imgpile.com/images/284a4378d0763b084fd4b2bf46028341.jpg'},
    { src : 'https://i.pinimg.com/originals/04/2b/33/042b3305b184de81b9638611bc24828b.jpg'},
    { src : 'https://lh3.googleusercontent.com/proxy/LYRj7jpvW78f3O2gDdDv3cTF8xGiMqNAujpY4GCohF1nxVMM8mE9spkpz6UFXK6DOe4pTtNfwYB3gAq6psXClISTCIEQj7LcL_PuBjkG5W0Ajn0'},
    
]
let img = '';
let id = 0
function imgSlide(){
    img = '';
    imgArray.forEach(function(v, i){
        img+=
        `<img src=`+v.src+` id ='`+i+`'>`
        
    })
    
    document.getElementById('box').innerHTML = img;
    document.getElementById(id).classList.add('active');
    
}
function next(){
    if(id + 1 == imgArray.length){
        id = 0
        document.getElementById(id).classList.add('active');
        document.getElementById(imgArray.length - 1).classList.remove('active');
    }else{
        document.getElementById(id).classList.remove('active')
        document.getElementById(id + 1).classList.add('active')
        id = id + 1
    }

}
function prev(){
    if(id == 0){
        id = imgArray.length - 1;
        document.getElementById(id).classList.add('active');
        document.getElementById(0).classList.remove('active');
    }else{
        document.getElementById(id).classList.remove('active');
        document.getElementById(id - 1).classList.add('active');
        id = id - 1
    }
}
imgSlide();