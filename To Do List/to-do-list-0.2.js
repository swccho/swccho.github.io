let itemArray = [];
let itemStr = '';
function addItems(e){
    e.preventDefault();
    let itemObj = {
        name: '',
        status: 0,
        star: 0,
    }
    itemObj.name = document.getElementById('input1').value;
   itemStr = '';
    itemArray.push(itemObj);
    saveArray()
    itemArray.forEach(function(v, i){
        if(v.status == 0 && v.star == 0){
            itemStr+=
            `<h4 id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:green;" class="fa fa-check-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span  class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
            `
        } 
        if (v.status == 0 && v.star == 1) {
            itemStr+=
            `<h4  id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:green;" class="fa fa-check-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star gold" onclick="makeStar(`+i+`)"></span>
            `
        }
        
        if (v.status == 1 && v.star == 1) {
            itemStr+=
            `<h4 style="text-decoration: line-through;" id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:red;" class="fa fa-times-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star gold" onclick="makeStar(`+i+`)"></span>
            `
        }
    })
    document.getElementById('AddItemList').innerHTML = itemStr;
    document.getElementById('input1').value = '';
}
function check(cID){
    itemArray[cID].status == 0 ? itemArray[cID].status = 1 : itemArray[cID].status = 0;
    saveArray()
    itemStr = ''
    itemArray.forEach(function(v, i){
        if(v.status == 0){
            itemStr+=
            
            `<h4 id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:green;" class="fa fa-check-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
            `
        } else{
            itemStr+=
            `<h4 style="text-decoration: line-through;" id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:red;" class="fa fa-times-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
            `
        }
    })
    document.getElementById('AddItemList').innerHTML = itemStr;
} 

function trash(tID){
 itemArray.splice(tID, 1)
 saveArray()
 itemStr = ''
 itemArray.forEach(function(v, i){
     if(v.status == 0){
         itemStr+=
         
         `<h4 id='`+i+`' class="h4-items">`+v.name+`</h4>
         <span style="color:green;" class="fa fa-check-circle check" onclick="check(`+i+`)"></span>
         <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
         <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
         <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
         `
     } else{
         itemStr+=
         `<h4 style="text-decoration: line-through;" id='`+i+`' class="h4-items">`+v.name+`</h4>
         <span style="color:red;" class="fa fa-times-circle check" onclick="check(`+i+`)"></span>
         <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
         <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
         <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
         `
     }
 })
 document.getElementById('AddItemList').innerHTML = itemStr;
}
 let editIndex = '';
function edit(eID){
    editIndex = eID;
    let value = itemArray[eID].name;
    $('#editText').val(value);
    $('#editModal').modal('show');
}

function updateValue() {
    itemArray[editIndex].name =  $('#editText').val();
    saveArray()
    itemStr = ''
    itemArray.forEach(function(v, i){
        if(v.status == 0){
            itemStr+=
            
            `<h4 id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:green;" class="fa fa-check-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
            `
        } else{
            itemStr+=
            `<h4 style="text-decoration: line-through;" id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:red;" class="fa fa-times-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
            `
        }
    })
    document.getElementById('AddItemList').innerHTML = itemStr;
    $('#editModal').modal('hide');
}

function clearAll() {
    itemArray = [];
    saveArray()
    itemStr = ''
    document.getElementById('AddItemList').innerHTML = itemStr;
}

function saveArray() {
    localStorage.setItem('itemSave', JSON.stringify(itemArray
}

function getItem() {
    let items = localStorage.getItem('itemSave');
    if (items != null) {
        itemArray = JSON.parse(items)
    itemStr = ''
    itemArray.forEach(function(v, i){
        if(v.status == 0){
            itemStr+=
            
            `<h4 id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:green;" class="fa fa-check-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
            `
        } else{
            itemStr+=
            `<h4 style="text-decoration: line-through;" id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:red;" class="fa fa-times-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
            `
        }
    })
    document.getElementById('AddItemList').innerHTML = itemStr;
    }
}

getItem();

function makeStar(i) {
    let toStar = itemArray[i];
    itemArray.splice(i, 1);
    itemArray.unshift(toStar);
    itemArray[0].star = 1

    saveArray()
    itemStr = ''
    itemArray.forEach(function(v, i){
        if(v.status == 0 && v.star == 0){
            itemStr+=
            `<h4 id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:green;" class="fa fa-check-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span  class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star" onclick="makeStar(`+i+`)"></span>
            `
        } 
        if (v.status == 0 && v.star == 1) {
            itemStr+=
            `<h4  id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:green;" class="fa fa-check-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star gold" onclick="makeStar(`+i+`)"></span>
            `
        }
        
        if (v.status == 1 && v.star == 1) {
            itemStr+=
            `<h4 style="text-decoration: line-through;" id='`+i+`' class="h4-items">`+v.name+`</h4>
            <span style="color:red;" class="fa fa-times-circle check" onclick="check(`+i+`)"></span>
            <span class="fa fa-trash trash" onclick="trash(`+i+`)"></span>
            <span class="fa fa-pencil-square-o" onclick="edit(`+i+`)"></span>
            <span class="fa fa-star gold" onclick="makeStar(`+i+`)"></span>
            `
        }
    })
    document.getElementById('AddItemList').innerHTML = itemStr;
}