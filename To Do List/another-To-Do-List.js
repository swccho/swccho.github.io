let itemStr = '';
let itemArray = [];
function addList(e){
    e.preventDefault();
  let arrayObj = {
      name: '',
      status: 0,
  };
  arrayObj.name = document.getElementById('input1').value;
  itemStr = '';
  itemArray.push(arrayObj);
  $('.alert').removeClass('d-none')
  setTimeout( function () {
    $('.alert').addClass('d-none')
  }, 5000);
  saveArray()
  itemArray.forEach(function(v, i){
      if(v.status == 0){
      itemStr+=
      `<h3 class="h3-s" >- `+v.name+`</h3>
      <span style="color:green" class="pos-check"><i class="fa fa-check-circle" onclick="check(`+i+`)"></i></span>
      <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
      <span style="color:lightblue"  class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
      `

    } else{
        itemStr+=
      `<h3 style="text-decoration: line-through;" class="h3-s" >- `+v.name+`</h3>
      <span style="color:red" class="pos-check"><i class="fa fa-times-circle" onclick="check(`+i+`)"></i></span>
      <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
      <span style="color:lightblue" class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
      `
    }
  });
document.getElementById('addNewList').innerHTML = itemStr;
document.getElementById('input1').value = '';

}
function check(CID){
    itemArray[CID].status == 0 ? itemArray[CID].status = 1 : itemArray[CID].status = 0;
    saveArray()
    itemStr = '';
    itemArray.forEach(function(v, i){
        if(v.status == 0){
            itemStr+=
            `<h3 class="h3-s" >- `+v.name+`</h3>
            <span style="color:green" class="pos-check"><i class="fa fa-check-circle" onclick="check(`+i+`)"></i></span>
            <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
            <span style="color:lightblue" class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
            `
        } else{
            itemStr+=
            `<h3 style="text-decoration: line-through;" class="h3-s" >- `+v.name+`</h3>
            <span style="color:red" class="pos-check"><i class="fa fa-times-circle" onclick="check(`+i+`)"></i></span>
            <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
            <span style="color:lightblue"  class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>

            `
        }
    });
    document.getElementById('addNewList').innerHTML = itemStr;
}

function trash(TID){
    itemArray.splice(TID, 1)
    saveArray()
    itemStr = '';
    itemArray.forEach(function(v, i){
        if(v.status == 0){
            itemStr+=
            `<h3 class="h3-s" >- `+v.name+`</h3>
            <span style="color:green" class="pos-check"><i class="fa fa-check-circle" onclick="check(`+i+`)"></i></span>
            <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
            <span style="color:lightblue" class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
            `
        } else{
            itemStr+=
            `<h3 style="text-decoration: line-through;" class="h3-s" >- `+v.name+`</h3>
            <span style="color:red" class="pos-check"><i class="fa fa-times-circle" onclick="check(`+i+`)"></i></span>
            <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
            <span style="color:lightblue" class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
            `
        }
    });
    document.getElementById('addNewList').innerHTML = itemStr;
}
let editValue = '';
function edit(EID){
    saveArray()
    editValue = EID;
let value = itemArray[EID].name;
$('#editText').val(value);
$('#editModal').modal('show');
}
function updateValue(){
    itemArray[editValue].name = $('#editText').val();
    saveArray()
    itemStr = ''
    itemArray.forEach(function(v, i){
        if(v.status == 0){
            itemStr+=
            `<h3 class="h3-s" >- `+v.name+`</h3>
            <span style="color:green" class="pos-check"><i class="fa fa-check-circle" onclick="check(`+i+`)"></i></span>
            <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
            <span style="color:lightblue" class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
            `
        } else{
            itemStr+=
            `<h3 style="text-decoration: line-through;" class="h3-s" >- `+v.name+`</h3>
            <span style="color:red" class="pos-check"><i class="fa fa-times-circle" onclick="check(`+i+`)"></i></span>
            <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
            <span style="color:lightblue" class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
            `
        } 
        
    })
    document.getElementById('addNewList').innerHTML = itemStr;
    $('#editModal').modal('hide');
}
function clearAll(){
    itemArray = [];
    saveArray()
    itemStr = '';
    document.getElementById('addNewList').innerHTML = itemStr;

}
function saveArray(){
    localStorage.setItem('itemSave', JSON.stringify(itemArray))
}
function getItem(){
    let item = localStorage.getItem('itemSave');
    if(item != null){
        itemArray = JSON.parse(item)
        itemStr = ''
        itemArray.forEach(function(v, i){
            if(v.status == 0){
                itemStr+=
                `<h3 class="h3-s" >- `+v.name+`</h3>
                <span style="color:green" class="pos-check"><i class="fa fa-check-circle" onclick="check(`+i+`)"></i></span>
                <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
                <span style="color:lightblue" class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
                `
            } else{
                itemStr+=
                `<h3 style="text-decoration: line-through;" class="h3-s" >- `+v.name+`</h3>
                <span style="color:red" class="pos-check"><i class="fa fa-times-circle" onclick="check(`+i+`)"></i></span>
                <span  class="pos-trash"><i class="fa fa-trash" onclick="trash(`+i+`)"></i></span>
                <span style="color:lightblue" class="pos-edit"><i class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></i></span>
                `
            } 
            
        })
        document.getElementById('addNewList').innerHTML = itemStr;
    }
}
getItem();