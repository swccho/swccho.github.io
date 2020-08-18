let x = '';
let items = [];
let htmCode = '';
id = 0;
function AddList(e){
   e.preventDefault();
    let listItem = {
        name: '',
        status: 0,
    };
    listItem.name = document.getElementById('input1').value;
    htmCode = '';
    items.push(listItem);
    items.forEach(function(v , i){
        if (v.status == 0) {
            htmCode+=
            `<ul id="`+i+`" class="i-edit" style="margin-bottom: 2px;">
            <li >`+v.name+`<span class="check-btn" onclick="check(`+i+`)"><i style="color:green" class = "fa fa-check-circle"></i></span>
            <span class="trash-btn" onclick="trash(`+i+`)"><i class="fa fa-trash-o "></i></span>
            </li> 
            </ul>`
        } else {
            htmCode+=
            `<ul id="`+i+`" class="i-edit" style="margin-bottom: 2px; text-decoration: line-through;">
            <li >`+v.name+`<span class="check-btn" onclick="check(`+i+`)"><i style="color:red" class = "fa fa-times-circle"></i></span>
            <span class="trash-btn" onclick="trash(`+i+`)"><i class="fa fa-trash-o "></i></span>
            </li> 
            </ul>`
        }
   
    });
   
    document.getElementById('addItems').innerHTML= htmCode;
    document.getElementById('input1').value = '';
}
function check(index){
    items[index].status == 0 ? items[index].status = 1 : items[index].status = 0;
    htmCode = '';
    items.forEach(function(v , i){
        if (v.status == 0) {
            htmCode+=
            `<ul id="`+i+`" class="i-edit" style="margin-bottom: 2px;">
            <li >`+v.name+`<span class="check-btn" onclick="check(`+i+`)"><i style="color:green" class = "fa fa-check-circle"></i></span>
            <span class="trash-btn" onclick="trash(`+i+`)"><i class="fa fa-trash-o "></i></span>
            </li> 
            </ul>`
        } else {
            htmCode+=
            `<ul id="`+i+`" class="i-edit" style="margin-bottom: 2px; text-decoration: line-through;">
            <li >`+v.name+`<span class="check-btn" onclick="check(`+i+`)"><i style="color:red" class = "fa fa-times-circle"></i></span>
            <span class="trash-btn" onclick="trash(`+i+`)"><i class="fa fa-trash-o "></i></span>
            </li>
            </ul>`
        }
   
    });
   
    document.getElementById('addItems').innerHTML= htmCode;
}
function trash(it){
    items.splice(it, 1);
    htmCode = '';
    items.forEach(function(v , i){
        if (v.status == 0) {
            htmCode+=
            `<ul id="`+i+`" class="i-edit" style="margin-bottom: 2px;">
            <li >`+v.name+`<span class="check-btn" onclick="check(`+i+`)"><i style="color:green" class = "fa fa-check-circle"></i></span>
            <span class="trash-btn" onclick="trash(`+i+`)"><i class="fa fa-trash-o "></i></span>
            </li> 
            </ul>`
        } else {
            htmCode+=
            `<ul id="`+i+`" class="i-edit" style="margin-bottom: 2px; text-decoration: line-through;">
            <li >`+v.name+`<span class="check-btn" onclick="check(`+i+`)"><i style="color:red" class = "fa fa-times-circle"></i></span>
            <span class="trash-btn" onclick="trash(`+i+`)"><i class="fa fa-trash-o "></i></span>
            </li>
            </ul>`
        }
   
    });
    document.getElementById('addItems').innerHTML= htmCode;
}