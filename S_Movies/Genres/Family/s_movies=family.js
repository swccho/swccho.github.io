var familyMoviesArr = [];
var familyMoviesStr = '';
function getfamilyMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=family',
    method: 'get',
    success: function(act){
      familyMoviesArr =  act.data.movies,
      
      familyMoviesArr.forEach(function(v, i){
        familyMoviesStr+=
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
     $('.family_Movies').html(familyMoviesStr)
       
    }
  });
}

getfamilyMovies();