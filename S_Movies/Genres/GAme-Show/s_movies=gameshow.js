var gameMoviesArr = [];
var gameMoviesStr = '';
function getgameMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=game-show',
    method: 'get',
    success: function(act){
      gameMoviesArr =  act.data.movies,
      
      gameMoviesArr.forEach(function(v, i){
        gameMoviesStr+=
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
     $('.game_Movies').html(gameMoviesStr)
       
    }
  });
}

getgameMovies();