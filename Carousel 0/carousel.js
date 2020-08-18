let showId = 1;
function nextImg(){
    // console.log(document.getElementsByTagName('img1'));
    // document.querySelectorAll('.img1').forEach(i => {
    //     i.style.display = 'none';
    // });

    showId ++
    if (showId == 4) {
        showId = 1
    }
 
    if (showId == 1) {
        document.getElementById('1').setAttribute('style', 'display: block')
    } else {
        document.getElementById('1').setAttribute('style', 'display: none')
    }
    if (showId == 2) {
        document.getElementById('2').setAttribute('style', 'display: block')
    } else {
        document.getElementById('2').setAttribute('style', 'display: none')
    }
    if (showId == 3) {
        document.getElementById('3').setAttribute('style', 'display: block')
    } else{
        document.getElementById('3').setAttribute('style', 'display: none')
    }

}


function preImg(){
    // console.log(document.getElementsByTagName('img1'));
    // document.querySelectorAll('.img1').forEach(i => {
    //     i.style.display = 'none';
    // });

    showId --
    if (showId == 0) {
        showId = 3
    }
 
    if (showId == 1) {
        document.getElementById('1').setAttribute('style', 'display: block')
    } else {
        document.getElementById('1').setAttribute('style', 'display: none')
    }
    if (showId == 2) {
        document.getElementById('2').setAttribute('style', 'display: block')
    } else {
        document.getElementById('2').setAttribute('style', 'display: none')
    }
    if (showId == 3) {
        document.getElementById('3').setAttribute('style', 'display: block')
    } else{
        document.getElementById('3').setAttribute('style', 'display: none')
    }

};

function autoPlay() {
    setInterval( function () {
        nextImg();
    }, 1000)
}
autoPlay();