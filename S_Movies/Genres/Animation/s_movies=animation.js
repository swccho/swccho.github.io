var animationMoviesArr = [];
var animationMoviesStr = '';
function getanimationMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=animation',
    method: 'get',
    success: function(act){
      animationMoviesArr =  act.data.movies,
      
      animationMoviesArr.forEach(function(v, i){
        animationMoviesStr+=
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
     $('.animation_Movies').html(animationMoviesStr)
       
    }
  });
}

getanimationMovies();