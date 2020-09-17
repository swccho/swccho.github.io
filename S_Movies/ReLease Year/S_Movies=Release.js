https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2010
var moviesOfArr = [];
var moviesOfStr = '';

function onload(){
    moviesOfStr = '';
    $.ajax({
        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=1999',
        method: 'get',
        success: function(act){
           
            moviesOfArr =  act.data.movies,
          
            moviesOfArr.forEach(function(v, i){
             moviesOfStr+=
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
         $('#movies').html(moviesOfStr)
           
        }
      });
}
onload();


function moviesbyyear(type){
    if(type == 2000){
        moviesOfStr = '';
  $.ajax({
    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2000',
    method: 'get',
    success: function(act){
       
        moviesOfArr =  act.data.movies,
      
        moviesOfArr.forEach(function(v, i){
         moviesOfStr+=
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
     $('#movies').html(moviesOfStr)
       
    }
  });
    }
    // 

    if(type == 2001){
        moviesOfStr = '';
        $.ajax({
          url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2001',
          method: 'get',
          success: function(act){
              moviesOfArr =  act.data.movies,
            
              moviesOfArr.forEach(function(v, i){
               moviesOfStr+=
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
           $('#movies').html(moviesOfStr)
             
          }
        });
          }
        //   
        if(type == 2002){
            moviesOfStr = '';
            $.ajax({
              url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2002',
              method: 'get',
              success: function(act){
                  moviesOfArr =  act.data.movies,
                
                  moviesOfArr.forEach(function(v, i){
                   moviesOfStr+=
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
               $('#movies').html(moviesOfStr)
                 
              }
            });
              }
            //   
            if(type == 2003){
                moviesOfStr = '';
                $.ajax({
                  url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2003',
                  method: 'get',
                  success: function(act){
                      moviesOfArr =  act.data.movies,
                    
                      moviesOfArr.forEach(function(v, i){
                       moviesOfStr+=
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
                   $('#movies').html(moviesOfStr)
                     
                  }
                });
                  }
                //   
                if(type == 2004){
                    moviesOfStr = '';
                    $.ajax({
                      url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2004',
                      method: 'get',
                      success: function(act){
                          moviesOfArr =  act.data.movies,
                        
                          moviesOfArr.forEach(function(v, i){
                           moviesOfStr+=
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
                       $('#movies').html(moviesOfStr)
                         
                      }
                    });
                      }
                    //   
                    if(type == 2005){
                        moviesOfStr = '';
                        $.ajax({
                          url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2005',
                          method: 'get',
                          success: function(act){
                              moviesOfArr =  act.data.movies,
                            
                              moviesOfArr.forEach(function(v, i){
                               moviesOfStr+=
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
                           $('#movies').html(moviesOfStr)
                             
                          }
                        });
                          }
                        //   
                if(type == 2006){
                    moviesOfStr = '';
                    $.ajax({
                        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2006',
                        method: 'get',
                        success: function(act){
                            moviesOfArr =  act.data.movies,
                        
                            moviesOfArr.forEach(function(v, i){
                            moviesOfStr+=
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
                        $('#movies').html(moviesOfStr)
                            
                        }
                    });
                        }
                    //   
                    
                if(type == 2007){
                    moviesOfStr = '';
                    $.ajax({
                        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2007',
                        method: 'get',
                        success: function(act){
                            moviesOfArr =  act.data.movies,
                        
                            moviesOfArr.forEach(function(v, i){
                            moviesOfStr+=
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
                        $('#movies').html(moviesOfStr)
                            
                        }
                    });
                        }
                    //   
                    if(type == 2008){
                        moviesOfStr = '';
                        $.ajax({
                            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2008',
                            method: 'get',
                            success: function(act){
                                moviesOfArr =  act.data.movies,
                            
                                moviesOfArr.forEach(function(v, i){
                                moviesOfStr+=
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
                            $('#movies').html(moviesOfStr)
                                
                            }
                        });
                            }
                        //   
            if(type == 2009){
                moviesOfStr = '';
                $.ajax({
                    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2009',
                    method: 'get',
                    success: function(act){
                        moviesOfArr =  act.data.movies,
                    
                        moviesOfArr.forEach(function(v, i){
                        moviesOfStr+=
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
                    $('#movies').html(moviesOfStr)
                        
                    }
                });
                    }
                //   
                if(type == 2010){
                    moviesOfStr = '';
                    $.ajax({
                        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2010',
                        method: 'get',
                        success: function(act){
                            moviesOfArr =  act.data.movies,
                        
                            moviesOfArr.forEach(function(v, i){
                            moviesOfStr+=
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
                        $('#movies').html(moviesOfStr)
                            
                        }
                    });
                        }
                    //   
                    if(type == 2011){
                        moviesOfStr = '';
                        $.ajax({
                            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2011',
                            method: 'get',
                            success: function(act){
                                moviesOfArr =  act.data.movies,
                            
                                moviesOfArr.forEach(function(v, i){
                                moviesOfStr+=
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
                            $('#movies').html(moviesOfStr)
                                
                            }
                        });
                            }
                        //   
                        if(type == 2012){
                            moviesOfStr = '';
                            $.ajax({
                                url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2012',
                                method: 'get',
                                success: function(act){
                                    moviesOfArr =  act.data.movies,
                                
                                    moviesOfArr.forEach(function(v, i){
                                    moviesOfStr+=
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
                                $('#movies').html(moviesOfStr)
                                    
                                }
                            });
                                }
                            //   
                            if(type == 2013){
                                moviesOfStr = '';
                                $.ajax({
                                    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2013',
                                    method: 'get',
                                    success: function(act){
                                        moviesOfArr =  act.data.movies,
                                    
                                        moviesOfArr.forEach(function(v, i){
                                        moviesOfStr+=
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
                                    $('#movies').html(moviesOfStr)
                                        
                                    }
                                });
                                    }
                                //   
    if(type == 2014){
        moviesOfStr = '';
        $.ajax({
            url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2014',
            method: 'get',
            success: function(act){
                moviesOfArr =  act.data.movies,
            
                moviesOfArr.forEach(function(v, i){
                moviesOfStr+=
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
            $('#movies').html(moviesOfStr)
                
            }
        });
            }
        //   
            if(type == 2015){
                moviesOfStr = '';
                $.ajax({
                    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2015',
                    method: 'get',
                    success: function(act){
                        moviesOfArr =  act.data.movies,
                    
                        moviesOfArr.forEach(function(v, i){
                        moviesOfStr+=
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
                    $('#movies').html(moviesOfStr)
                        
                    }
                });
                            }
                        // 
                if(type == 2016){
                    moviesOfStr = '';
                    $.ajax({
                        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2016',
                        method: 'get',
                        success: function(act){
                            moviesOfArr =  act.data.movies,
                        
                            moviesOfArr.forEach(function(v, i){
                            moviesOfStr+=
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
                        $('#movies').html(moviesOfStr)
                            
                        }
                    });
                        }
                            // 
                if(type == 2017){
                    moviesOfStr = '';
                    $.ajax({
                        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2017',
                        method: 'get',
                        success: function(act){
                            moviesOfArr =  act.data.movies,
                        
                            moviesOfArr.forEach(function(v, i){
                            moviesOfStr+=
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
                        $('#movies').html(moviesOfStr)
                            
                        }
                    });
                        }
                                // 
        if(type == 2018){
            moviesOfStr = '';
            $.ajax({
                url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2018',
                method: 'get',
                success: function(act){
                    moviesOfArr =  act.data.movies,
                
                    moviesOfArr.forEach(function(v, i){
                    moviesOfStr+=
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
                                $('#movies').html(moviesOfStr)
                                    
                                }
                            });
                                }
                            // 
                            if(type == 2019){
                                moviesOfStr = '';
                                $.ajax({
                                    url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2019',
                                    method: 'get',
                                    success: function(act){
                                        moviesOfArr =  act.data.movies,
                                    
                                        moviesOfArr.forEach(function(v, i){
                                        moviesOfStr+=
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
                                    $('#movies').html(moviesOfStr)
                                        
                                    }
                                });
                                    }
                                // 
                                if(type == 2020){
                                    moviesOfStr = '';
                                    $.ajax({
                                        url : 'https://yts.mx/api/v2/list_movies.json?limit=40&query_term=2020',
                                        method: 'get',
                                        success: function(act){
                                            moviesOfArr =  act.data.movies,
                                        
                                            moviesOfArr.forEach(function(v, i){
                                            moviesOfStr+=
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
                                        $('#movies').html(moviesOfStr)
                                            
                                        }
                                    });
                                        }
                                    // 


}