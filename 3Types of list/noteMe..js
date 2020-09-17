

function addnewItems(type){
   
    var NOTES = localStorage.getItem('NOTES')
    if(NOTES == null){
        NOTES =[];
    } else{
        NOTES = JSON.parse(NOTES)
    }

    if(type === 1){
        var FirstInput = $('#myModal').find('input[name="title"]').val();
        var FirstTextarea = $('#myModal').find('textarea[name="title"]').val();
        var itemData = {
            type: 1,
            title: FirstInput,
            text: FirstTextarea
        };
        $('#myModal').find('input[name="title"]').val('');
        $('#myModal').find('textarea[name="title"]').val('');
        $('#myModal').modal('hide');
        
    } else if(type === 2){
        var secondInputT = $('#myModal2').find('input[name="todolistTitle"]').val();
        var secondInputI = $('#myModal2').find('input[name="todolistItem"]').val();
        var items = [];
        $('#myModal2').find('.eachItem').each(function(i, v){
            if($(v).val() != ''){
                items.push({
                    items: $(v).val()
                })
            }
        })
       
        $('#myModal2').find('input[name="todolistTitle"]').val('');
        $('#myModal2').find('input[name="todolistItems"]').val('');
        $('#myModal2').find('.listItem2').html(` <div class="form-group" style="position: relative;">
        <input type="text" id="M2input2" class="form-control eachItem" placeholder="Items" name="todolistItems">
        <button type="button" class="close"  aria-label="Close" onclick="removeThisItem(this)" style="position: absolute; right: 8px; top: 5px;">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`)
        $('#myModal2').modal('hide');
        var itemData = {
            type: 2,
            title: secondInputT,
            items: items,
        };
    } else if(type === 3){
    var third = $('#myModal3').find('input[name="todolistTitle"]').val();
    console.log('')
    var ala = [];
    $('#myModal3').find('.allItems').each(function(i, v){
        if($(v).find('.Items').val() != '' && $(v).find('.Price').val() != ''){
            console.log(v)
            ala.push({
                title: $(v).find('.Items').val(),
                Price: $(v).find('.Price').val(),
            })
        }
    })
    $('#myModal3').find('input[name="todolistTitle"]').val('');
    $('#myModal3').find('.Items').val('');
    $('#myModal3').find('.Price').val('');
    $('#myModal3').find('.listItem2').html(`<div class="form-group" style="position: relative;">
    <div class="input-group allItems">
    <input type="text" id="M3input2" class="form-control Items " placeholder="Items" name="todolistItems">
    <input type="text" id="M3input3" class="form-control Price " placeholder="Price" name="todolistPrice">
  </div>
    <button type="button" class="close"  aria-label="Close" onclick="removeThisItem(this)" style="position: absolute; right: 8px; top: 5px;">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`)
  $('#myModal3').modal('hide')
  var itemData ={
    type : 3,
    title: third,
    items: ala,
  }
    }
    NOTES.push(itemData);
    localStorage.setItem('NOTES', JSON.stringify(NOTES))
    getAllItems();
}
function addItems(){
$('.listItem').append(`<div class="form-group" style="position: relative;">
<input type="text" id="M2input2" class="form-control" placeholder="Items" name="to do list Items">
<button type="button" class="close"  aria-label="Close" onclick="removeThisItem(this)" style="position: absolute; right: 8px; top: 5px;">
  <span aria-hidden="true">&times;</span>
</button>
</div>`)
}

function addLastModalItems(){
    $('.listItem2').append(`<div class="form-group" style="position: relative;">
    <div class="input-group allItems">
    <input type="text" id="M3input2" class="form-control Items " placeholder="Items" name="todolistItems">
    <input type="text" id="M3input3" class="form-control Price " placeholder="Price" name="todolistPrice">
  </div>
    <button type="button" class="close"  aria-label="Close" onclick="removeThisItem(this)" style="position: absolute; right: 8px; top: 5px;">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`)
  console.log(addLastModalItems)
}
// 
// 
// 
function removeThisItem(trigger){
    $(trigger).closest('.form-group').remove()
}
// 
// 
// 
function getAllItems(){
    var NOTES = localStorage.getItem('NOTES')
    if(NOTES == null){
        NOTES =[];
    } else{
        NOTES = JSON.parse(NOTES)
    }
    var NoteHtml = '';
    for( var i = 0; i < NOTES.length; i++){
        NoteHtml+=
       
        `<div class="box">`
        
        if(NOTES[i].type === 1){
            NoteHtml+= `<button class="btn btn1" onclick="OpenModal(`+i+`)"><i class="fa fa-pencil-square-o"></i></button>
            <button class="btn btn2" onclick="removeThisBox(this, ${i})">&times;</button>
            <div style=" height:20px; width:30px; text-align:center; position:relative; left:47%; bottom:12%"><i class="fa fa-arrows" style="cursor:move"></i></div>
         <p class="text-secondary">${NOTES[i]['title']}</p>`
        }
        if(NOTES[i].type === 2){
            NoteHtml+= `<button class="btn btn1" onclick="OpenModal2(`+i+`)"><i class="fa fa-pencil-square-o"></i></button>
            <button class="btn btn2" onclick="removeThisBox(this, ${i})">&times;</button>
            <div style=" height:20px; width:30px; text-align:center; position:relative; left:47%; bottom:12%"><i class="fa fa-arrows" style="cursor:move"></i></div>
         <p class="text-secondary">${NOTES[i]['title']}</p>`
        }
        if(NOTES[i].type === 3){
            NoteHtml+= `<button class="btn btn1" onclick="OpenModal3(`+i+`)"><i class="fa fa-pencil-square-o"></i></button>
            <button class="btn btn2" onclick="removeThisBox(this, ${i})">&times;</button>
            <div style=" height:20px; width:30px; text-align:center; position:relative; left:47%; bottom:12%"><i class="fa fa-arrows" style="cursor:move"></i></div>
         <p class="text-secondary">${NOTES[i]['title']}</p>`
        }
        
        if(NOTES[i].type === 1){
            NoteHtml+= `<h5 class="text-center text-secondary" style="cursor:pointer; text-decoration: underline;" onclick="OpenModal(`+i+`)">Full Lyrics</h5>`; 
        }
        if(NOTES[i].type === 2){
            NoteHtml+= `<h5 onclick="OpenModal2(`+i+`)" class="text-center text-secondary" style="cursor:pointer; text-decoration: underline;">Click to See More</h5>`; 
        }
        if(NOTES[i].type === 3){
            NoteHtml+= `<h5 onclick="OpenModal3(`+i+`)" class="text-center text-secondary" style="cursor:pointer; text-decoration: underline;">Show</h5>`;
        }
        
        NoteHtml+=
        `</div>`
        
    }
    $('#PostDiv').html(NoteHtml);
    
}
function removeThisBox(trigger, index){
    $(trigger).closest('.box').remove();
    var NOTES = localStorage.getItem('NOTES')
    if(NOTES == null){
        NOTES =[];
    } else{
        NOTES = JSON.parse(NOTES)
    }
    NOTES.splice(index, 1);
    localStorage.setItem('NOTES', JSON.stringify(NOTES))
    getAllItems();
    
}
getAllItems();

function OpenModal(index){
    var NOTES = localStorage.getItem('NOTES')
    if(NOTES == null){
        NOTES =[];
    } else{
        NOTES = JSON.parse(NOTES)
    }
    var singleNote = NOTES[index];
    console.log(singleNote);
    $('#myModalEdit').modal('show')
    
    $('#myModalEdit').find('input[name="title"]').val(singleNote.title);
    $('#myModalEdit').find('textarea[name="title"]').val(singleNote.text);
    $('#myModalEdit').find('.updateTrigger').attr('data-index', index);
}
function UpdateItem(type){
    var NOTES = localStorage.getItem('NOTES')   
    if(NOTES == null){
        NOTES =[];
    } else{
        NOTES = JSON.parse(NOTES)
    }
    var index = $('#myModalEdit').find('.updateTrigger').attr('data-index');
    var FirstInput = $('#myModalEdit').find('input[name="title"]').val();
    var FirstTextarea = $('#myModalEdit').find('textarea[name="title"]').val();
    var itemData = {
        type: 1,
        title: FirstInput,
        text: FirstTextarea
    };
    $('#myModalEdit').find('input[name="title"]').val('');
    $('#myModalEdit').find('textarea[name="title"]').val('');
    $('#myModalEdit').modal('hide');
    console.log(itemData)
    NOTES[index] = itemData;
    localStorage.setItem('NOTES', JSON.stringify(NOTES));
    getAllItems();
    

} 

function OpenModal2(indexxx){
    var NOTES = localStorage.getItem('NOTES')
    if(NOTES == null){
        NOTES =[];
    } else{
        NOTES = JSON.parse(NOTES)
    }
    var multiple = NOTES[indexxx];
    $('#myModalEdit2').modal('show') 
    console.log()
    $('#myModalEdit2').find('input[name="todolistTitle"]').val(multiple.title);
    $('#myModalEdit2').find('input[name="todolistItems"]').val(multiple.items[0].items);
    $('#myModalEdit2').find('.updateTrigger').attr('data-index', indexxx);  
}

function UpdateItem(type){
    var NOTES = localStorage.getItem('NOTES')   
    if(NOTES == null){
        NOTES =[];
    } else{
        NOTES = JSON.parse(NOTES)
    }
    var indexxx = $('#myModalEdit2').find('.updateTrigger').attr('data-index');
    var secondInputT = $('#myModalEdit2').find('input[name="todolistTitle"]').val();
    var secondInputI =  $('#myModalEdit2').find('input[name="todolistItems"]').val();   
        var items = [];
       
        $('#myModalEdit2').find('.listItem').each(function(i, v){
            if($(v).val() != ''){
                items.push({
                    status: 0,
                    title: $(v).val()
                })
            }
        })
       
        $('#myModalEdit2').find('input[name="todolistTitle"]').val('');
        $('#myModalEdit2').find('input[name="todolistItems"]').val('');
        $('#myModalEdit2').find('.listItem').html(` <div class="form-group" style="position: relative;">
        <input type="text" id="M2input2" class="form-control eachItem" placeholder="Items" name="todolistItems">
        <button type="button" class="close"  aria-label="Close" onclick="removeThisItem(this)" style="position: absolute; right: 8px; top: 5px;">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`)
        $('#myModalEdit2').modal('hide');  
        var itemData = {
            type: 2,
            title: secondInputT,
            items: items,
        };
   
    
            NOTES[indexxx] = itemData;
            localStorage.setItem('NOTES', JSON.stringify(NOTES))
            getAllItems(); 
    }


   function OpenModal3(indexM3){
    var NOTES = localStorage.getItem('NOTES')
    if(NOTES == null){
        NOTES =[];
    } else{
        NOTES = JSON.parse(NOTES)
    }
    var multipleM3 = NOTES[indexM3];
    $('#myModalEdit3').modal('show');
    
    $('#myModalEdit3').find('.listItem2').html('');
    multipleM3.items.forEach(function(v){
        $('#myModalEdit3').find('.listItem2').append(`<div class="form-group" style="position: relative;">
                <div class="input-group allItems">
                <input type="text" id="M3input2" class="form-control Items " value="${v.title}" placeholder="Items" name="todolistItems">
                <input type="text" id="M3input3" class="form-control Price " value="${v.Price}" placeholder="Price" name="todolistPrice">
            </div>
                <button type="button" class="close"  aria-label="Close" onclick="removeThisItem(this)" style="position: absolute; right: 8px; top: 5px;">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `)
    })
    $('#myModalEdit3').find('input[name="todolistTitle"]').val(multipleM3.title);
    $('#myModalEdit3').find('.updateTrigger').attr('data-index', indexM3); 
    }
    function UpdateItem(type){
        var NOTES = localStorage.getItem('NOTES')   
        if(NOTES == null){
            NOTES =[];
        } else{
            NOTES = JSON.parse(NOTES)
        }
        var indexM3 = $('#myModalEdit3').find('.updateTrigger').attr('data-index');
        var Third = $('#myModalEdit3').find('input[name="todolistTitle"]').val();
         
            var ala = [];
           
            $('#myModalEdit3').find('.allItems').each(function(i, v){
                if($(v).find('.Items').val() != '' && $(v).find('.Price').val() != ''){
                    ala.push({
                        title: $(v).find('.Items').val(),
                        Price: $(v).find('.Price').val(),
                    });
                    console.log(ala);
                }
            })
           
            $('#myModalEdit3').find('input[name="todolistTitle"]').val('');
            $('#myModalEdit3').find('input[name="todolistItems"]').val('');
            $('#myModalEdit3').find('input[name="todolistPrice"]').val('');
            $('#myModalEdit3').find('.listItem2').html(`<div class="form-group" style="position: relative;">
            <div class="input-group allItems">
            <input type="text" id="M3input2" class="form-control Items " placeholder="Items" name="todolistItems">
            <input type="text" id="M3input3" class="form-control Price " placeholder="Price" name="todolistPrice">
          </div>
            <button type="button" class="close"  aria-label="Close" onclick="removeThisItem(this)" style="position: absolute; right: 8px; top: 5px;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`)
            $('#myModalEdit3').modal('hide');  
            var itemData = {
                type: 3,
                title: Third,
                items: ala,
            };
       console.log(itemData);
       console.log(indexM3);
        
                NOTES[indexM3] = itemData;
                localStorage.setItem('NOTES', JSON.stringify(NOTES))
                getAllItems(); 
        }


function changebg(type){
        if(type === 1){
            $('.bg').css("background-color", "rgba(232, 232, 232, 1)");
        } else if(type === 2){
            $('.bg').css("background-color", "#d9534f");
        } else if(type === 3){
            $('.bg').css("background-color", "#292b2c");
        } else if(type === 4){
            $('.bg').css("background-color", "#5bc0de");
        } else if(type === 5){
            $('.bg').css("background-color", "#0275d8");
        }
        
}


