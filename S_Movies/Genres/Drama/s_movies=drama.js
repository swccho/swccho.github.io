var dramaMoviesArr = [];
var dramaMoviesStr = '';
function getdramaMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=drama',
    method: 'get',
    success: function(act){
      dramaMoviesArr =  act.data.movies,
      
      dramaMoviesArr.forEach(function(v, i){
        dramaMoviesStr+=
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
     $('.drama_Movies').html(dramaMoviesStr)
       
    }
  });
}

getdramaMovies();