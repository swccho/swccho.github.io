var scifiMoviesArr = [];
var scifiMoviesStr = '';
function getscifiMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=sci-fi',
    method: 'get',
    success: function(act){
     scifiMoviesArr =  act.data.movies,
      
     scifiMoviesArr.forEach(function(v, i){
       scifiMoviesStr+=
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
     $('.SciFi_Movies').html(scifiMoviesStr)
       
    }
  });
}

getscifiMovies();