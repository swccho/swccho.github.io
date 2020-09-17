
var horrorMoviesArr = [];
var horrorMoviesStr = '';
function gethorrorMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=horror',
    method: 'get',
    success: function(act){
      horrorMoviesArr =  act.data.movies,
      
      horrorMoviesArr.forEach(function(v, i){
        horrorMoviesStr+=
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
     $('.horror_Movies').html(horrorMoviesStr)
       
    }
  });
}

gethorrorMovies();