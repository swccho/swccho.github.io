var musicMoviesArr = [];
var musicMoviesStr = '';
function getmusicMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=music',
    method: 'get',
    success: function(act){
      musicMoviesArr =  act.data.movies,
      
      musicMoviesArr.forEach(function(v, i){
        musicMoviesStr+=
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
     $('.music_Movies').html(musicMoviesStr)
       
    }
  });
}

getmusicMovies();