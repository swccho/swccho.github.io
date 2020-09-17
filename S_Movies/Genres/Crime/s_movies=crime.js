var crimeMoviesArr = [];
var crimeMoviesStr = '';
function getcrimeMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=crime',
    method: 'get',
    success: function(act){
      crimeMoviesArr =  act.data.movies,
      
      crimeMoviesArr.forEach(function(v, i){
        crimeMoviesStr+=
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
     $('.crime_Movies').html(crimeMoviesStr)
       
    }
  });
}

getcrimeMovies();