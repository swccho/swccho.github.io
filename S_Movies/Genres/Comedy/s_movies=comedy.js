var comedyMoviesArr = [];
var comedyMoviesStr = '';
function getcomedyMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=comedy',
    method: 'get',
    success: function(act){
      comedyMoviesArr =  act.data.movies,
      
      comedyMoviesArr.forEach(function(v, i){
        comedyMoviesStr+=
       ` <a href="../../Movie_details/s_movies=details.html?id=`+v.id+`">
       
       <div class="item ">
            <img class="FCimg" src=`+v.medium_cover_image+`>
            <div class="movie_Title_Act">
              <h6 class="text-info title" >`+v.title+`</h6>
            </div>
       </div>
       </a>
       `
     });
     $('.comedy_Movies').html(comedyMoviesStr)
       
    }
  });
}

getcomedyMovies();