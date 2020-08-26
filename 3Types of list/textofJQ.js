function addNewNotes(type){

    var NOTES = localStorage.getItem('NOTES');
    if(NOTES == null){
        NOTES = [];
    }else{
        NOTES = JSON.parse(NOTES);
    }

    if(type === 1){
        var title = $('#myModal').find('textarea[name="title"]').val();
        var itemData = {
            type : 1,
            title: title
        }
        $('#myModal').find('textarea[name="title"]').val('');
        $('#myModal').modal('hide');
    } else if(type === 2){
        var title = $('#myModal2').find('input[name="title"]').val();
        var items = [];
        $('#myModal2').find('.eachItem').each(function(v, i){
            if($(v).val() != ''){
                items.push({
                    status: 0,
                    title: $(v).val(),
                });
            }
        });
        $('#myModal2').find('textarea[name="title"]').val('');
        $('#myModal2').find('.listItem').html(`<div class="form-group" style="position: relative;">
        <input type="text" class="form-control eachItem" placeholder="TO Do List Item" name="item[]">
        <button type="button" class="close" onclick="removeThisItem(this)" style="position: absolute; right: 8px; top: 5px;">&times;</button>
      </div>`)
      $('#myModal2').modal(hide);
      var itemData = {
        type: 2,
        title: title,
        items: items,
    }

    }
    NOTES.push(itemData);
    localStorage.setItem('NOTES', JSON.stringify(NOTES));
    renderNotes();
}

function renderNotes(){
    var NOTES = localStorage.getItem('NOTES');
    if(NOTES == null){
        NOTES = [];
    } else{
        NOTES = JSON.parse(NOTES);
    }
    var NOTEhtml = '';
    NOTES.forEach(function(v, i){
        NOTEhtml+=
        `<div class="box"><p>${NOTES[i]['title']}</div>`    
    });
    $('#postDiv').html(NOTEhtml);
}
renderNotes();