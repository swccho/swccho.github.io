var thirllersMoviesArr = [];
var thirllersMoviesStr = '';
function getthirllersMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=thriller',
    method: 'get',
    success: function(act){
     thirllersMoviesArr =  act.data.movies,
      
     thirllersMoviesArr.forEach(function(v, i){
       thirllersMoviesStr+=
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
     $('.Thirller_Movies').html(thirllersMoviesStr)
       
    }
  });
}

getthirllersMovies();