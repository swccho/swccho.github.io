var kungfuMoviesArr = [];
var kungfuMoviesStr = '';
function getkungfuMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=kungfu',
    method: 'get',
    success: function(act){
      kungfuMoviesArr =  act.data.movies,
      
      kungfuMoviesArr.forEach(function(v, i){
        kungfuMoviesStr+=
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
     $('.kung-fu_Movies').html(kungfuMoviesStr)
       
    }
  });
}

getkungfuMovies();