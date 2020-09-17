var mostWatchedArr = [];
var mostWatchedStr = '';
function onload(){
mostWatchedStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=rating',
        method: 'get',
        success: function(act){
            mostWatchedArr =  act.data.movies,
        
            mostWatchedArr.forEach(function(v, i){
            mostWatchedStr+=
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
        $('.mostWatchedMovies').html(mostWatchedStr)
        
        }
    });
}
onload();

function ratings(){
    var rating = $('#ratings').val();
    if(rating == 9){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=9',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
    // 
    if(rating == 8){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=8',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
// 

    if(rating == 7){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=7',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
    // 

    if(rating == 6){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=6',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
    // 
    if(rating == 5){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=5',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
    //
    if(rating == 4){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=4',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
    //  
    if(rating == 3){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=3',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
    // 
    if(rating == 2){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=2',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
    // 
    if(rating == 1){
        mostWatchedStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&minimum_rating=1',
            method: 'get',
            success: function(act){
                mostWatchedArr =  act.data.movies,
            
                mostWatchedArr.forEach(function(v, i){
                mostWatchedStr+=
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
            $('.mostWatchedMovies').html(mostWatchedStr)
            
            }
        });
    }
    // 

}
