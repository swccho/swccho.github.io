function addNewItem(type){
    var Notes = localStorage.getItem('Notes')
    if(Notes == null){
        Notes = [];
    }else{
        Notes = JSON.parse(Notes)
    }

    if(type === 1){
        var First = $('#myModal').find('textarea[name="title"]').val();
        var itemData = {
            type : 1,
            title: First
        };
        $('#myModal').find('textarea[name="title"]').val('');
        $('#myModal').modal('hide')
    } else if(type === 2){
        var second = $('#myModal2').find('input[name="title"]').val();
        var items = [];
       $('#myModal2').find('.eachItem').each(function(i, v){
        if($(v).val() != ''){
            items.push({
                status: 0,
                title: $(v).val()
                
            });
        };
       });
       $('#myModal2').find('input[name="title"]').val('');
       $('#myModal').find('.listItem').html(`<div class="form-group">
       <input type="text" class="form-control eachItem" name="item[]" placeholder="to do list item">
       <button type="button" onclick="removeThisItem(this)" class="close"  style="position: absolute;top: 5px;right: 8px;">×</button>
     </div>`)
     $('#myModal2').modal('hide')
     var itemData={
         type : 2,
         title: second,
         items: items,
     }
    } else if(type === 3){
        var third = $('#myModal3').find('input[name="title"]').val();
        var items2 = [];
        $('#myModal3').find('.eachItem2').each(function(i, v){
            if($(v).find('.itemTitle').val() != '' && $(v).find('.itemPrice').val() != ''){
                items2.push({
                    price : $(v).find('.itemPrice').val(),
                    title: $(v).find('.itemTitle').val(),
                });
            };
        })
        $('#myModal3').find('input[name="title"]').val('');
        $('#myModal3').find('.itemTitle').val('');
        $('#myModal3').find('.itemPrice').val('');
        $('#myModal3').find('listItem2').html(`<div class="form-group" style="position: relative;">
        <div class="input-group eachItem2">
        <input type="text" class="form-control itemTitle"   placeholder="Items">
        <input type="text" class="form-control itemPrice"  onkeyup="calculateTotal()"  placeholder="Price">
    </div>
        <button type="button" class="close"  style="position: absolute; right: 8px; top: 5px;" onclick="removeThisItem2(this)">&times;</button>`)
        $('#myModal2').modal('hide')
        var itemData={
            type : 3,
            title: third,
            items: items2,
        }
    }
    Notes.push(itemData)
    localStorage.setItem('Notes', JSON.stringify(Notes))
    renderItems()
}
function addItems(){
    $('.listItem').append(`<div class="form-group" style="position: relative">
    <input type="text" class="form-control"  placeholder="To do list Items">
    <button type="button" class="close"  style="position: absolute; right: 8px; top: 5px;" onclick="removeThisItem(this)">&times;</button>
  </div>`);
}
function addLastModalItems(){
    $('.listItem2').append(`<div class="form-group" style="position: relative;">
    <div class="input-group eachItem2">
    <input type="text" class="form-control itemTitle"   placeholder="Items">
    <input type="text" class="form-control itemPrice"  onkeyup="calculateTotal()"  placeholder="Price">
</div>
    <button type="button" class="close"  style="position: absolute; right: 8px; top: 5px;" onclick="removeThisItem2(this)">&times;</button>`)
}
function removeThisItem(trigger){
    $(trigger).closest('.form-group').remove();
}
function calculateTotal(){
    var Total = 0;
    $('#myModal3').find('.eachItem2').each(function(i, v){
        if($(v).find('.itemPrice').val() != ''){
            var price = $(v).find('.itemPrice').val();
            if(parseFloat(price) != NaN){
                Total = Total + parseFloat(price);  
            } else {
                $(v).find('.itemPrice').val(0);
            }
        };
    });
    $('#total').html(Total);
}
function renderItems(){
    var Notes = localStorage.getItem('Notes')
    if(Notes == null){
        Notes = [];

    }else{
        Notes = JSON.parse(Notes)
    }
        var NoteHtml = '';
            for(var i = 0;i<Notes.length;i++){
            NoteHtml += 
            `<div class="box">
            <p>${Notes[i]['title']}</p>
            </div>`;
    }
    $('#postDiv').html(NoteHtml);
    
}
function removeThisItem2(trigger){
$(trigger).closest('.form-group').remove()
calculateTotal()
}
renderItems()