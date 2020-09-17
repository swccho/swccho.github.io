var romanceMoviesArr = [];
var romanceMoviesStr = '';
function getromanceMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=romance',
    method: 'get',
    success: function(act){
     romanceMoviesArr =  act.data.movies,
      
     romanceMoviesArr.forEach(function(v, i){
       romanceMoviesStr+=
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
     $('.Romance_Movies').html(romanceMoviesStr)
       
    }
  });
}

getromanceMovies();