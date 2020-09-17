
function getID(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
    }
	return params;
}
// function AllMovieCarousel(){
//     var param = getID(window.location.href);
//     param = new URLSearchParams(param);
//     param = param.toString();
//     $.ajax({
//         url : 'https://yts.mx/api/v2/list_movies.json?limit=50&'+param,
//         method: 'get',
//         success: function(data){
//             AllMovieMovieArray = data.data.movies,
//             AllMovieMovieArray.forEach(function(v, i){
//                 AllMovieMovieString+=
//            `
//
//            <div class="item carItem ">
//                 <img class="FCimg" src=`+v.large_cover_image+` height="300" width="230" style="border:5px solid" >
//                 <div class="movieTitle text-center text-info" id="movieTitle" >
//                     <h4 >`+v.title+`</h4>
//                     <h4>(`+v.year+`)</h4>
//                     <h5>`+v.rating+`</h5>
//                     <a href="../Movie_Details/details.html?id=`+v.id+`" class="btn btn-success">V i e w</a>
//                 </div>
//            </div>
//
//            `
//
//          });
//          $('.AllMovie').html(AllMovieMovieString)
//         }
//     })
//
// }
// AllMovieCarousel()
var current_page = 1;
var record_per_page = 50;
var objJson = [];
var TotalPage = 0;

function prevPage(){
    if(current_page > 1){
    current_page--;
    changePage(current_page);
}
}
function nextPage(){
    if(current_page < TotalPage){
    current_page++;
    changePage(current_page)
    }
}


function changePage(page){
    var param = getID(window.location.href);
        param = new URLSearchParams(param);
        param = param.toString();

    var btn_prev = document.getElementById('btn_prev');

    var btn_next = document.getElementById('btn_next');

    var listing = document.getElementById('listingTable')

    var page_span = document.getElementById('page')


     $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?page='+page +'&'+param,
            method: 'get',
            success: function(data){
            objJson = data.data.movies;
            TotalPage = Math.ceil( data.data.movie_count / record_per_page);

        if(page < 1) page = 1;
        if(page > TotalPage) page = TotalPage;
            listing.innerHTML = '';

    for(var i = 0; i < objJson.length; i++){

        listing.innerHTML +=
            '<div class="item carItem ">\n' +
'             <img class="FCimg" src='+objJson[i].large_cover_image+' height="300" width="230" style="border:5px solid" >\n' +
'          <div class="movieTitle text-center  text-info" id="movieTitle" >\n' +
'                   <h4 >'+objJson[i].title+'</h4>\n' +
'                   <h4>'+(objJson[i].year)+'</h4>\n' +
'                   <h5>'+objJson[i].rating+'</h5>\n' +
'                <a href="../Movie_Details/details.html?id='+objJson[i].id+' "class="btn btn-success">V i e w</a>\n' +
'          </div>'
    }
            page_span.innerHTML = page + '/' + TotalPage;

}
})


    if(page == 1){
        btn_prev.style.visibility = 'hidden';
    }else{
        btn_prev.style.visibility = 'visible';
    }

    if(page == TotalPage){
        btn_next.style.visibility = 'hidden';
    }else{
        btn_next.style.visibility = 'visible';
    }
}

window.onload = function(){
    changePage(1)
}