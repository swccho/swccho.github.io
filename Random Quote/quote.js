let Quote = [
    {quote: 'Sometimes you gotta create what you want to be a part of.', name: 'Geri Weitzman'},
    {quote:'Love is to the heart what the summer is to the farmers year. It brings to harvest all the loveliest flowers of the soul.', name: 'Billy Graham'},
    {quote:'There will be no justice as long as man will stand with a knife or with a gun and destroy those who are weaker than he is.', name:'Isaac Bashevis Singer'},
    {quote:'Time dissipates to shining ether the solid angularity of facts.', name:'Ralph Waldo Emerson'},
    {quote:' On seeing a former lover for the first time in years: I thought I told you to wait in the car.', name:'Tallulah Bankhead'},
]
 let Q = '';



function ChangeQuote(){
   
 for(i = 0; i < Quote.length; i++ ){
     Q +=
     `<blockquote>
     `+Quote[i].quote+`<p>
     `+Quote[i].name+`</p>
     </blockquote>`
     document.getElementById('randomQuote').innerHTML = Q;
 }
}

ChangeQuote();




let showId1 = 11
function nextImg(){
   

    showId1 ++
    if (showId1 == 15) {
        showId1 = 11
    }
 
    if (showId1 == 11) {
        document.getElementById('img11').setAttribute('style', 'display: block; width: 1350px; height: 400px')
    } else {
        document.getElementById('img11').setAttribute('style', 'display: none; width: 1350px; height: 400px')
    }
    if (showId1 == 12) {
        document.getElementById('img12').setAttribute('style', 'display: block; width: 1350px; height: 400px')
    } else {
        document.getElementById('img12').setAttribute('style', 'display: none; width: 1350px; height: 400px')
    }
    if (showId1 == 13) {
        document.getElementById('img13').setAttribute('style', 'display: block; width: 1350px; height: 400px')
    } else{
        document.getElementById('img13').setAttribute('style', 'display: none; width: 1350px; height: 400px')
    
    }
    if (showId1 == 14) {
        document.getElementById('img14').setAttribute('style', 'display: block; width: 1350px; height: 400px')
    } else{
        document.getElementById('img14').setAttribute('style', 'display: none; width: 1350px; height: 400px')
    }


}
function autoPlay(){
    setInterval(function(){
    

    }, 3000)
};
autoPlay();