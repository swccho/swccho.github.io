var actionMovieArr = [];
var actionMovieStr = '';

function count(){
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=action',
        method: 'get',
        success: function(data){
            actionMovieArr = data.data;
           
            actionMovieStr+=
            `
            <h2 style=" margin-top:25%;">Action Movies</h2>
            <h2>
            `+actionMovieArr.movie_count+`+
            </h2>
            
            `
            
            $('.actcount').html(actionMovieStr)
        }
    })
    // action

  
}
count();
var ThrillerMovieArr = [];
var ThrillerMovieStr = '';
function Count1(){
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=thriller',
        method: 'get',
        success: function(data){
            ThrillerMovieArr = data.data;
           
            ThrillerMovieStr+=
            `
            <h2 style=" margin-top:25%;">Thriller Movies</h2>
            <h2>
            `+ThrillerMovieArr.movie_count+`+
            </h2>
            
            `
            
            $('.Thricount').html(ThrillerMovieStr)
        }
    })
}
Count1()

// 

var horrorMovieArr = [];
var horrorMovieStr = '';
function Count2(){
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=horror',
        method: 'get',
        success: function(data){
            horrorMovieArr = data.data;
           
            horrorMovieStr+=
            `
            <h2 style=" margin-top:25%;">horror Movies</h2>
            <h2>
            `+horrorMovieArr.movie_count+`+
            </h2>
            
            `
            
            $('.Horrorcount').html(horrorMovieStr)
        }
    })
}
Count2()

// 

var scifiMovieArr = [];
var scifiMovieStr = '';
function Count3(){
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=sci-fi',
        method: 'get',
        success: function(data){
            scifiMovieArr = data.data;
           
            scifiMovieStr+=
            `
            <h2 style=" margin-top:25%;">Sci-Fi Movies</h2>
            <h2>
            `+scifiMovieArr.movie_count+`+
            </h2>
            
            `
            
            $('.scificount').html(scifiMovieStr)
        }
    })
}
Count3()


// 
//
function getID(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
    }
	return params;
};

var bigCarouselArr = [];
var bigCarouselStr = '';
function BigCarousel(){
    var param = getID(window.location.href);
    param = new URLSearchParams(param);
    param = param.toString();
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=15&minimum_rating=9&'+param,
        method: 'get',
        success: function(data){
            bigCarouselArr = data.data.movies,
          
            bigCarouselArr.forEach(function(v, i){
                bigCarouselStr+=
           `<div class="item carItem ">
                <img class="FCimg" src=`+v.large_cover_image+` height="700px"  >
                <div class="movieTitle text-center text-info" id="movieTitle">
                    <h4>`+v.title+`</h4>
                    <h4>(`+v.year+`)</h4>     
                    <h5>`+v.rating+`</h5>
                    <a href="Movie_Details/details.html?id=`+v.id+`" class="btn btn-success">V i e w</a>
                </div>
           </div>`
         });
         $('.bigCarousel').html(bigCarouselStr)
         var owl = $('.bigCarousel');
            owl.owlCarousel({
                items:1,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true
            });
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            })
            $('.stop').on('click',function(){
                owl.trigger('stop.owl.autoplay')
            })
        }
    })
}
BigCarousel()

https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2020
ActionMovieArray = [];
ActionMovieString = '';
function ActionCarousel(){
    var param = getID(window.location.href);
    param = new URLSearchParams(param);
    param = param.toString();
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=action&minimum_rating=8&'+param,
        method: 'get',
        success: function(data){
            ActionMovieArray = data.data.movies,
          
            ActionMovieArray.forEach(function(v, i){
                ActionMovieString+=
           `<div class="item carItem ">
                <img class="FCimg" src=`+v.large_cover_image+` height="300" width="250" style="border:5px solid" >
                <div class="movieTitle text-center text-info" id="movieTitle">
                    
                    <h4>`+v.title+`</h4>
                    <h4>(`+v.year+`)</h4>     
                    <h5>`+v.rating+`</h5>
                    <a href="Movie_Details/details.html?id=`+v.id+`" class="btn btn-success">V i e w</a>
                </div>
           </div>`
         });
         $('.ActionMovies').html(ActionMovieString)

         var owl = $('.ActionMovies');
            owl.owlCarousel({
            items:4,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
            });
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            })
            $('.stop').on('click',function(){
                owl.trigger('stop.owl.autoplay')
            })
        }
    })
            
}
ActionCarousel()

// 
// 
// 

var LatestMovieArray = [];
var LatestMovieString = '';
function LatestCarousel(){
    var param = getID(window.location.href);
    param = new URLSearchParams(param);
    param = param.toString();
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2020&minimum_rating=7&'+param,
        method: 'get',
        success: function(data){
            LatestMovieArray = data.data.movies,
          
            LatestMovieArray.forEach(function(v, i){
                LatestMovieString+=
           `<div class="item carItem ">
                <img class="FCimg" src=`+v.large_cover_image+` height="300" width="250" style="border:5px solid" >
                <div class="movieTitle text-center text-info" id="movieTitle">
                    
                    <h4>`+v.title+`</h4>
                    <h4>(`+v.year+`)</h4>     
                    <h5>`+v.rating+`</h5>
                    <a href="Movie_Details/details.html?id=`+v.id+`" class="btn btn-success">V i e w</a>
                </div>
           </div>`
         });
         $('.LatestMovies').html(LatestMovieString)

         var owl = $('.LatestMovies');
            owl.owlCarousel({
            items:4,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
            });
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            })
            $('.stop').on('click',function(){
                owl.trigger('stop.owl.autoplay')
            })
        }
    })
            
}
LatestCarousel()
// 
// 
// 
var SciFiMovieArray = [];
var SciFiMovieString = '';
function SciFiCarousel(){
    var param = getID(window.location.href);
    param = new URLSearchParams(param);
    param = param.toString();
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=7&genre=sci-fi&query_term=2020&'+param,
        method: 'get',
        success: function(data){
            SciFiMovieArray = data.data.movies,
          
            SciFiMovieArray.forEach(function(v, i){
                SciFiMovieString+=
           `<div class="item carItem ">
                <img class="FCimg" src=`+v.large_cover_image+` height="300" width="250" style="border:5px solid" >
                <div class="movieTitle text-center text-info" id="movieTitle">
                    
                    <h4>`+v.title+`</h4>
                    <h4>(`+v.year+`)</h4>     
                    <h5>`+v.rating+`</h5>
                    <a href="Movie_Details/details.html?id=`+v.id+`" class="btn btn-success">V i e w</a>
                </div>
           </div>`
         });
         $('.SciFiMovies').html(SciFiMovieString)

         var owl = $('.SciFiMovies');
            owl.owlCarousel({
            items:4,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
            });
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            })
            $('.stop').on('click',function(){
                owl.trigger('stop.owl.autoplay')
            })
        }
    })
            
}
SciFiCarousel()

// 
// 
// 
var ThrillerMovieArray = [];
var ThrillerMovieString = '';
function ThrillerCarousel(){
    var param = getID(window.location.href);
    param = new URLSearchParams(param);
    param = param.toString();
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=7&genre=thriller&query_term=2020&'+param,
        method: 'get',
        success: function(data){
            ThrillerMovieArray = data.data.movies,
          
            ThrillerMovieArray.forEach(function(v, i){
                ThrillerMovieString+=
           `<div class="item carItem ">
                <img class="FCimg" src=`+v.large_cover_image+` height="300" width="250" style="border:5px solid" >
                <div class="movieTitle text-center text-info" id="movieTitle">
                    
                    <h4>`+v.title+`</h4>
                    <h4>(`+v.year+`)</h4>     
                    <h5>`+v.rating+`</h5>
                    <a href="Movie_Details/details.html?id=`+v.id+`" class="btn btn-success">V i e w</a>
                </div>
           </div>`
         });
         $('.ThrillerMovies').html(ThrillerMovieString)

         var owl = $('.ThrillerMovies');
            owl.owlCarousel({
            items:4,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
            });
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            })
            $('.stop').on('click',function(){
                owl.trigger('stop.owl.autoplay')
            })
        }
    })
            
}
ThrillerCarousel()

// 
// 
// 
var romanticMovieArray = [];
var romanticMovieString = '';
function romanticCarousel(){
    var param = getID(window.location.href);
    param = new URLSearchParams(param);
    param = param.toString();
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=5&genre=romance&query_term=2019&'+param,
        method: 'get',
        success: function(data){
            romanticMovieArray = data.data.movies,
          
            romanticMovieArray.forEach(function(v, i){
                romanticMovieString+=
           `<div class="item carItem ">
                <img class="FCimg" src=`+v.large_cover_image+` height="300" width="250" style="border:5px solid" >
                <div class="movieTitle text-center text-info" id="movieTitle">
                    
                    <h4>`+v.title+`</h4>
                    <h4>(`+v.year+`)</h4>     
                    <h5>`+v.rating+`</h5>
                    <a href="Movie_Details/details.html?id=`+v.id+`" class="btn btn-success">V i e w</a>
                </div>
           </div>`
         });
         $('.RomanticMovies').html(romanticMovieString)

         var owl = $('.RomanticMovies');
            owl.owlCarousel({
            items:4,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
            });
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            })
            $('.stop').on('click',function(){
                owl.trigger('stop.owl.autoplay')
            })
        }
    })
            
}
romanticCarousel()