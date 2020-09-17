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
    var m = getID(window.location.href);
    $.ajax({
        url : 'https://yts.mx/api/v2/movie_details.json?movie_id='+m.id,
        method: 'get',
        success: function(sugg){
            movieArr = sugg.data.movie
            movieStr+=
           `<div class="row " style="margin:5%">
                <div class="col-6">
                    <img src="`+movieArr.large_cover_image+`">
                    <button class="btn btn-muted text-light "  
                    style="font-size: 60px; height: 150px; width: 140px;  
                    border-radius: 50%; position: absolute; left: 30%; 
                    top: 40%; background-color: black; opacity: .7" 
                    data-toggle="modal" data-target=".bd-example-modal-lg">
                    <i class="fa fa-play"></i></button>
                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <video src="`+movieArr.yt_trailer_code+`"height="500px" width="100%" controls loop></video>
            </div>
        </div>
    </div>
                </div>

                <div class="col-6 text-light" >
                    <h3>`+movieArr.title+`</h3>
                <br>
                    <h5>`+movieArr.year+`</h5>
               
                <br>
                    <h5>Runtime: `+movieArr.runtime+`</h5>
                <br>
                    <h5>Genre: `+movieArr.genres+`</h5>
                <br>
                    <h5><i class="fa fa-download"></i> Downloads: `+movieArr.download_count+` </h5>
                <br>
                    <h5><i class="fa fa-thumbs-up"></i> Likes: `+movieArr.like_count+` </h5>
                <br>
                
                    <h5><i class="fa fa-imdb"></i> IMDb: `+movieArr.rating+`</h5>
                <br>
                    <h5><i class="fa fa-language"></i> Language: `+movieArr.language+`</h5>
                <br>
                    <h5>
                        <i class="fa fa-film"></i> Quality: &nbsp;<a class="btn btn-info" href="`+movieArr.torrents[0].url+`">  `+movieArr.torrents[0].quality+`</a> 
                        <a class="btn btn-info" href="`+movieArr.torrents[1].url+`"> `+movieArr.torrents[1].quality+`</a>
                    </h5>
                <br>
                    <h5>Type: `+movieArr.torrents[1].type+`</h5>
                <br>
                    <h5>Size: `+movieArr.torrents[1].size+`</h5>
                </div>
           </div>
           <hr class="bg-light">
            <div class=" text-light">
              <div class=" container-fluid ">
                    <h3>Description</h3>
                    <p>`+movieArr.description_full+`</p>
                <br>
              </div>
            </div>  
           `
         
         $('.movies').html(movieStr)
           
        }
      });
}
movies();