var westernMoviesArr = [];
var westernMoviesStr = '';
function getwesternMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=western',
    method: 'get',
    success: function(act){
     westernMoviesArr =  act.data.movies,
      
     westernMoviesArr.forEach(function(v, i){
       westernMoviesStr+=
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
     $('.western_Movies').html(westernMoviesStr)
       
    }
  });
}

getwesternMovies();