var adventureMoviesArr = [];
var adventureMoviesStr = '';
function getadventureMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=adventure',
    method: 'get',
    success: function(act){
      adventureMoviesArr =  act.data.movies,
      
      adventureMoviesArr.forEach(function(v, i){
        adventureMoviesStr+=
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
     $('.adventure_Movies').html(adventureMoviesStr)
       
    }
  });
}

getadventureMovies();