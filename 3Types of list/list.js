






































function addItem(){
    $('.listItem').append(`<div class="form-group">
    <input type="text" class="form-control eachItem" name="item[]" placeholder="to do list item">
    <button type="button" class="close" onclick="removeThisItem(this)" style="position: absolute;top: 5px;right: 8px;">×</button>
  </div>`
  );
}
function removeThisItem(trigger){
    $(trigger).closest('.form-group').remove();
}

function addNewNote(type){
    
    var NOTES = localStorage.getItem('NOTES');
    if(NOTES == null){
        NOTES = [];
    } else {
        NOTES = JSON.parse(NOTES);
    }

    if(type === 1){
        var title = $('#myModal').find('textarea[name="title"]').val();
        console.log(title);
        var itemData = {
            type: 1,
            title: title
        }
        $('#myModal').find('textarea[name="title"]').val('');
        $('#myModal').modal('hide');
    }
    else if(type === 2){
        var title = $('#myModal2').find('input[name="title"]').val();
        var items = [];
        $('#myModal2').find('.eachItem').each(function(i, v) {
            if($(v).val() != ''){
                items.push({
                    status: 0,
                    title: $(v).val()
                });
            }
        });
        $('#myModal2').find('input[name="title"]').val('');        
        $('#myModal2').find('.listItem').html(`<div class="form-group">
        <input type="text" class="form-control eachItem" name="item[]" placeholder="to do list item">
        <button type="button" onclick="removeThisItem(this)" class="close" data-dismiss="modal" style="position: absolute;top: 5px;right: 8px;">×</button>
      </div>`);
      $('#myModal2').modal('hide');
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
    } else {
        NOTES = JSON.parse(NOTES);
    }
    var NoteHtml = '';
    for(var i = 0;i<NOTES.length;i++){
        NoteHtml += `<div class="box">
        <p>${NOTES[i]['title']}</p>
      </div>`;
    }
    $('#postDiv').html(NoteHtml);
}

renderNotes();


