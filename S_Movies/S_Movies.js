// Populer 


// var movielistarray = [];
// var movieliststr = '';
// function getmovielist(){

//   $.ajax({
//     url : 'https://yts.mx/api/v2/list_movies.json',
//     method: 'get',
//     success: function(data){
//       movielistarray = data.data.movies,
      
//      movielistarray.forEach(function(v, i){
//        movieliststr+=
//        `<div class="item">
//             <img src=`+v.medium_cover_image+`>
//             <div class="movie_Title">
//               <h6 class="text-light text-left">`+v.title_long+`</h6>
              
//             </div>
//        </div>`
    
//      })

     
   
//      $('#popularMovieList').html(movieliststr)
//      $('.popularMovieList').owlCarousel({
//       loop:true,
//       margin:10,
//       nav:true,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:3
//           },
//           1000:{
//               items:5
//           }
//       }
//   })  
//     }
//   }); 
// }
// getmovielist();



// 
// Navbar
// 
const navClassName = "nav";
const navLinkClassName = `${navClassName}__link`;
const navLineClassName = `${navClassName}__line`;
const activeLinkClassName = `${navLinkClassName}--active`;

const navLine = document.querySelector(`.${navLineClassName}`);
const navLinks = document.querySelectorAll(`.${navLinkClassName}`);
const getActiveLink = () => document.querySelector(`.${activeLinkClassName}`);

const setLinkActive = (link) => link.classList.add(activeLinkClassName);
const setLinkInactive = (link) => link.classList.remove(activeLinkClassName);

const getItemDimentions = (item) => item && item.getBoundingClientRect();

const moveLineToItem = (item) => {
  const linkOffset = item.offsetLeft;
  const linkWidth = item.scrollWidth;

  relocateLine(linkOffset, linkWidth);
};

const relocateLine = (leftOffset, width) => {
  navLine.style.transform = `translateX(${leftOffset}px) scaleX(${width})`;
};

// Function created just for the sake of not duplicating code for a certain events :)
HTMLElement.prototype.addEventListeners = function (
  events = [],
  callback = () => {}
) {
  events.forEach((event) => this.addEventListener(event, callback));
};

const activeLinkOnPageLoad = getActiveLink();
activeLinkOnPageLoad && moveLineToItem(activeLinkOnPageLoad);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const currentlyActiveLink = getActiveLink();
    setLinkInactive(currentlyActiveLink);

    setLinkActive(navLink);
    moveLineToItem(navLink);
  });

  navLink.addEventListeners(["mouseover", "focus"], () => {
    moveLineToItem(navLink);
  });

  navLink.addEventListeners(["blur", "mouseout"], () => {
    const currentlyActiveLink = getActiveLink();
    moveLineToItem(currentlyActiveLink);
  });
});


// 
// First Carousel
// 

var movielistarray = [];
var movieliststr = '';
function getmovielist(){

  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json',
    method: 'get',
    success: function(data){
      movielistarray = data.data.movies,
      
     movielistarray.forEach(function(v, i){
       movieliststr+=
       `<span class="item">
            <img class="FCimg" src=`+v.large_cover_image+`>
            <div class="movie_Title">
              <h1 class="text-info text-left">`+v.title_long+`</h1>
              <p class="text-info"><span class="badge">HD</span>&nbsp; <span>Genre: `+v.genres+`</span></p>
              <p class="text-info" style="width:600px">`+v.description_full+`</p> 
            </div>
       </span>`
     });

     
   
     $('.FCarousel').html(movieliststr)
     $('.FCarousel').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      loop: true,
      items:1,
      margin:30,
      stagePadding:30,
      smartSpeed:450
  });  
    }
  }); 
}
getmovielist();

let suggMovieslist = [];
let suggMoviesstr = '';
function SuggestionMovies(){

  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40',
    method: 'get',
    success: function(sugg){
      suggMovieslist = sugg.data.movies,
      
      suggMovieslist.forEach(function(v, i){
        suggMoviesstr+=
       `
       <a href="Movie_details/s_movies=details.html?id=`+v.id+`">
       <span class="item">
            <img class="FCimg" src=`+v.medium_cover_image+`>
            <div class="movie_Title_Sugg" >
              <h6 class="text-info " >`+v.title+`</h6>
            </div>
       </span>
       </a>
       `
     });
     $('.Suggestion_Movies').html(suggMoviesstr)
       
    }
  });
}
SuggestionMovies();

// 
//  Latest MOvies
// 
let LatestMovieslist = [];
let LatestMoviesstr = '';
function LatestMovies(){

  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=20&genre=action',
    method: 'get',
    success: function(lst){
      LatestMovieslist = lst.data.movies,
      
      LatestMovieslist.forEach(function(v, i){
        LatestMoviesstr+=
        
       `
       <a href="Movie_details/s_movies=details.html?id=`+v.id+`">
       <span class="item ">
            <img class="FCimg" src=`+v.medium_cover_image+`>
            <div class="movie_Title_Sugg">
              <h6 class="text-info " >`+v.title+`</h6>
            </div>
       </span>
       </a>
       `
     });
     $('.Latest_Movies').html(LatestMoviesstr)
       
    }
  });
}
LatestMovies();

let RequestedMovieslist = [];
let RequestedMoviesstr = '';
function RequestedMovies(){

  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=10',
    method: 'get',
    success: function(lst){
      RequestedMovieslist = lst.data.movies,
      
      RequestedMovieslist.forEach(function(v, i){
        RequestedMoviesstr+=
       `
       <a href="Movie_details/s_movies=details.html?id=`+v.id+`">
       <span class="item ">
            <img class="FCimg" src=`+v.medium_cover_image+`>
            <div class="movie_Title_Sugg">
              <h6 class="text-info " >`+v.title+`</h6>
            </div>
       </span>
       </a>
       `
     });
     $('.Request_Movies').html(RequestedMoviesstr)
       
    }
  });
}
RequestedMovies();

