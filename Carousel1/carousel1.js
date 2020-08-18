let showId = 1;
function nextImg(){
    showId++
    if(showId == 13){
        showId = 1
    }
   

    if(showId == 1){
        document.getElementById('1').setAttribute('style','display:block');
    } else{
        document.getElementById('1').setAttribute('style','display:none');
    }
    if(showId == 2){
        document.getElementById('2').setAttribute('style','display:block');
    } else{
        document.getElementById('2').setAttribute('style','display:none');
    }
    if(showId == 3){
        document.getElementById('3').setAttribute('style','display:block');
    } else{
        document.getElementById('3').setAttribute('style','display:none');
    }
    if(showId == 4){
        document.getElementById('4').setAttribute('style','display:block');
    } else{
        document.getElementById('4').setAttribute('style','display:none');
    }
    if(showId == 5){
        document.getElementById('5').setAttribute('style','display:block');
    } else{
        document.getElementById('5').setAttribute('style','display:none');
    }
    if(showId == 6){
        document.getElementById('6').setAttribute('style','display:block');
    } else{
        document.getElementById('6').setAttribute('style','display:none');
    }
    if(showId == 7){
        document.getElementById('7').setAttribute('style','display:block');
    } else{
        document.getElementById('7').setAttribute('style','display:none');
    }
    if(showId == 8){
        document.getElementById('8').setAttribute('style','display:block');
    } else{
        document.getElementById('8').setAttribute('style','display:none');
    }
    if(showId == 9){
        document.getElementById('9').setAttribute('style','display:block');
    } else{
        document.getElementById('9').setAttribute('style','display:none');
    }
    if(showId == 10){
        document.getElementById('10').setAttribute('style','display:block');
    } else{
        document.getElementById('10').setAttribute('style','display:none');
    }
    if(showId == 11){
        document.getElementById('11').setAttribute('style','display:block');
    } else{
        document.getElementById('11').setAttribute('style','display:none');
    }
    if(showId == 12){
        document.getElementById('12').setAttribute('style','display:block');
    } else{
        document.getElementById('12').setAttribute('style','display:none');
    }

}
function prevImg(){
    showId--

    if(showId == 0){
        showId = 12
    }

    

    if(showId == 1){
        document.getElementById('1').setAttribute('style','display:block');
    } else{
        document.getElementById('1').setAttribute('style','display:none');
    }
    if(showId == 2){
        document.getElementById('2').setAttribute('style','display:block');
    } else{
        document.getElementById('2').setAttribute('style','display:none');
    }
    if(showId == 3){
        document.getElementById('3').setAttribute('style','display:block');
    } else{
        document.getElementById('3').setAttribute('style','display:none');
    }
    if(showId == 4){
        document.getElementById('4').setAttribute('style','display:block');
    } else{
        document.getElementById('4').setAttribute('style','display:none');
    }
    if(showId == 5){
        document.getElementById('5').setAttribute('style','display:block');
    } else{
        document.getElementById('5').setAttribute('style','display:none');
    }
    if(showId == 6){
        document.getElementById('6').setAttribute('style','display:block');
    } else{
        document.getElementById('6').setAttribute('style','display:none');
    }
    if(showId == 7){
        document.getElementById('7').setAttribute('style','display:block');
    } else{
        document.getElementById('7').setAttribute('style','display:none');
    }
    if(showId == 8){
        document.getElementById('8').setAttribute('style','display:block');
    } else{
        document.getElementById('8').setAttribute('style','display:none');
    }
    if(showId == 9){
        document.getElementById('9').setAttribute('style','display:block');
    } else{
        document.getElementById('9').setAttribute('style','display:none');
    }
    if(showId == 10){
        document.getElementById('10').setAttribute('style','display:block');
    } else{
        document.getElementById('10').setAttribute('style','display:none');
    }
    if(showId == 11){
        document.getElementById('11').setAttribute('style','display:block');
    } else{
        document.getElementById('11').setAttribute('style','display:none');
    }
    if(showId == 12){
        document.getElementById('12').setAttribute('style','display:block');
    } else{
        document.getElementById('12').setAttribute('style','display:none');
    }

}

function autoPlay() {
    setInterval( function () {
        nextImg();
    }, 5000)
}
 autoPlay();
console.log(nextImg);