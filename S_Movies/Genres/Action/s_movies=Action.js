var actionMoviesArr = [];
var actionMoviesStr = '';
function getActionMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=action',
    method: 'get',
    success: function(act){
      actionMoviesArr =  act.data.movies,
      
      actionMoviesArr.forEach(function(v, i){
        actionMoviesStr+=
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
     $('.action_Movies').html(actionMoviesStr)
       
    }
  });
}

getActionMovies();