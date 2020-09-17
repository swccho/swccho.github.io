var movieArr = [];
var movieStr = '';
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
};

function movies(){
  var param = getID(window.location.href);
    param = new URLSearchParams(param);
    param = param.toString();
    var m = getID(window.location.href);
    $.ajax({
        url : 'https://yts.mx/api/v2/movie_details.json?movie_id='+m.id,
        method: 'get',
        success: function(sugg){
            movieArr = sugg.data.movie
          console.log(movieArr)
            
            movieStr+=
           `<div class="row " style="margin:5%">
                <div class="col-6">
                    <img src="`+movieArr.large_cover_image+`">
                </div>

                <div class="col-6 text-light" >
                <h3>`+movieArr.title+`</h3>
                <br>
                <h5>Release Year: `+movieArr.year+`</h5>
                <br>
                <h5>Movie Rating: `+movieArr.rating+`</h5>
                <br>
                <h5>Movie Runtime: `+movieArr.runtime+`</h5>
                <br>
                <h5>Genre: `+movieArr.genres+`</h5>
                <br>
                <h5>Downloads: `+movieArr.download_count+`</h5>
                <br>
                <h5>Likes: `+movieArr.like_count+`</h5>
                <br>
                <h5>`+movieArr.description_full+`</h5>
                <br>
                <h5>Language: `+movieArr.language+`</h5>
                <br>
                <h5>Quality: `+movieArr.torrents[1].quality+`</h5>
                <br>
                <h5>Type: `+movieArr.torrents[1].type+`</h5>
                <br>
                <h5>Size: `+movieArr.torrents[1].size+`</h5>
                </div>
           </div>`
         
         $('.movie_details').html(movieStr)
           
        }
      });
}
movies();