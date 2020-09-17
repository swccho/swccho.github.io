var documenteryMoviesArr = [];
var documenteryMoviesStr = '';
function getdocumenteryMovies(){
  
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=documentary',
    method: 'get',
    success: function(act){
      documenteryMoviesArr =  act.data.movies,
      
      documenteryMoviesArr.forEach(function(v, i){
        documenteryMoviesStr+=
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
     $('.docu_Movies').html(documenteryMoviesStr)
       
    }
  });
}

getdocumenteryMovies();