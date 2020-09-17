var sportsMoviesArr = [];
var sportsMoviesStr = '';
function getsportsMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=sport',
    method: 'get',
    success: function(act){
     sportsMoviesArr =  act.data.movies,
      
     sportsMoviesArr.forEach(function(v, i){
       sportsMoviesStr+=
       
       `
       <a href="../../Movie_details/s_movies=details.html?id=`+v.id+`">
       <div class="item ">
            <img class="FCimg" src=`+v.medium_cover_image+`>
            <div class="movie_Title_Act">
              <h6 class="text-info title" >`+v.title+`</h6>
            </div>
       </div>
       </a>
       `
     });
     $('.sport_Movies').html(sportsMoviesStr)
       
    }
  });
}

getsportsMovies();