let countDownFromDate = new Date('Sep 1, 2020 12:00:00').toDateString();
let countDownDate = new Date('Sep 1, 2020 12:00:00').getTime();
let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance / (1000 * 60 * 60 * 24))/(1000 * 60 * 60 ));
    let minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById('countdown-from').innerHTML = countDownFromDate;
document.getElementById('root').innerHTML = days +':'+ hours +':'+ minutes +':'+ seconds;

if(distance < 0){
    clearInterval(x);
    document.getElementById('root').innerHTML = 'Timer Expired';
}
}, 1000);