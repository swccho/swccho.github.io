var warMoviesArr = [];
var warMoviesStr = '';
function getwarMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=war',
    method: 'get',
    success: function(act){
     warMoviesArr =  act.data.movies,
      
     warMoviesArr.forEach(function(v, i){
       warMoviesStr+=
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
     $('.war_Movies').html(warMoviesStr)
       
    }
  });
}

getwarMovies();