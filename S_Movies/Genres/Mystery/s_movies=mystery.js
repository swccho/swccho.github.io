var mysteryMoviesArr = [];
var mysteryMoviesStr = '';
function getmysteryMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=mystery',
    method: 'get',
    success: function(act){
      mysteryMoviesArr =  act.data.movies,
      
      mysteryMoviesArr.forEach(function(v, i){
        mysteryMoviesStr+=
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
     $('.Mystery_Movies').html(mysteryMoviesStr)
       
    }
  });
}

getmysteryMovies();