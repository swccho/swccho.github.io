

var allMoviesMoviesArr = [];
var allMoviesMoviesStr = '';
function onload(){
  allMoviesMoviesStr = '';

  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json',
    method: 'get',
    success: function(act){
      allMoviesMoviesArr =  act.data.movies,
      
       allMoviesMoviesArr.forEach(function(v, i){
        allMoviesMoviesStr+=
       `
       <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
       <div class="item ">
            <img class="FCimg" src=`+v.medium_cover_image+`>
            <div class="movie_Title_Act">
              <h6 class="text-info title" >`+v.title+`</h6>
            </div>
       </div>
       </a>
       `
     });
     $('.allMovies').html(allMoviesMoviesStr)
       
    }
  });
 
  
}
onload()
function getallMoviesMovies(type){

  if(type == 1){  
    allMoviesMoviesStr = '';
    
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=action',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           </a>
           `
         });
         $('.allMovies').html(allMoviesMoviesStr)
           
        }
      });
  } 

  if(type == 2){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=adventure',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           <a/>
           `
         });
         $('.allMovies').html(allMoviesMoviesStr)
           
        }
      });
  }
  if(type == 3){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=animation',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           </a>
           `
         });
         
         $('.allMovies').html(allMoviesMoviesStr)
        }
      });
  }

  if(type == 4){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=biography',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           </a>
           `
         });
         
         $('.allMovies').html(allMoviesMoviesStr)
        }
      });
  }

  if(type == 5){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=comedy',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           </a>
           `
         });
         
         $('.allMovies').html(allMoviesMoviesStr)
        }
      });
  }
  if(type == 6){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=crime',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           </a>
           `
         });
         
         $('.allMovies').html(allMoviesMoviesStr)
        }
      });
  }
  if(type == 7){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=drama',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           </a>
           `
         });
         
         $('.allMovies').html(allMoviesMoviesStr)
        }
      });
  }
  if(type == 8){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=family',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           </a>
           `
         });
         
         $('.allMovies').html(allMoviesMoviesStr)
        }
      });
  }
  if(type == 9){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=horror',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           <a/>
           `
         });
         
         $('.allMovies').html(allMoviesMoviesStr)
        }
      });
  }


  if(type == 10){
    allMoviesMoviesStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&genre=history',
        method: 'get',
        success: function(act){
          allMoviesMoviesArr =  act.data.movies,
          allMoviesMoviesArr.forEach(function(v, i){
            allMoviesMoviesStr+=
           `
           <a href="../Movie_details/s_movies=details.html?id=`+v.id+`">
           <div class="item ">
                <img class="FCimg" src=`+v.medium_cover_image+`>
                <div class="movie_Title_Act">
                  <h6 class="text-info title" >`+v.title+`</h6>
                </div>
           </div>
           </a>
           `
         });
         
         $('.allMovies').html(allMoviesMoviesStr)
        }
      });
  }
  
  }

getallMoviesMovies();

