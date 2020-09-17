var biographyMoviesArr = [];
var biographyMoviesStr = '';
function getbiographyMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=biography',
    method: 'get',
    success: function(act){
      biographyMoviesArr =  act.data.movies,
      
      biographyMoviesArr.forEach(function(v, i){
        biographyMoviesStr+=
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
     $('.Bio_Movies').html(biographyMoviesStr)
       
    }
  });
}

getbiographyMovies();