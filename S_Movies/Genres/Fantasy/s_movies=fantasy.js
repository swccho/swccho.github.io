var fantasyMoviesArr = [];
var fantasyMoviesStr = '';
function getfantasyMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=fantasy',
    method: 'get',
    success: function(act){
      fantasyMoviesArr =  act.data.movies,
      
      fantasyMoviesArr.forEach(function(v, i){
        fantasyMoviesStr+=
       `
       <a href="../../Movie_details/s_movies=details.html?id=`+v.id+`">
       <div class="item ">
            <img class="FCimg" src=`+v.medium_cover_image+`>
            <div class="movie_Title_Act">
              <h6 class="text-info title" >`+v.title+`</h6>
            </div>
       </div>
       <a/>
       `
     });
     $('.fantasy_Movies').html(fantasyMoviesStr)
       
    }
  });
}

getfantasyMovies();