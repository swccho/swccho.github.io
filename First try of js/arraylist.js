// let users = [
//     {id : '1234', name: 'Ali Haider Swccho', age: 19, number: '017007' },
//     {id : '1235', name: 'Zubayer Hossen', age: 18, number: '017100' },
//     {id : '1236', name: 'Sakib Ahmed', age: 18, number: '017101' },
//     {id : '1237', name: 'Rafi hassan', age: 12, number: '017102' },
//     {id : '1238', name: 'Wasim Akram', age: 17, number: '017103' },
//     {id : '1239', name: 'Wasim Wosman', age: 22, number: '017104' },
//     {id : '12310', name: 'Tanzin Khatun', age: 19, number: '017105' },
//     {id : '12311', name: 'Israt Jahan', age: 16, number: '017106' },
//     {id : '12312', name: 'Mir Farkrujjaman', age: 19, number: '017107' },
//     {id : '12313', name: 'Mehedi Hasan Siyam', age: 21, number: '017100' },
//     {id : '12314', name: 'Mehedi Hasan ', age: 21, number: '0171100' },
//     {id : '12315', name: 'Mehedi ', age: 21, number: '01710012' },
// ] 

function showItem(){
let tableBody = '';
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => {
    for(let i = 0; i < json.length; i++){
        tableBody +=
         `<tr>
        <td>`+json[i].id+`</td>
        <td>`+json[i].title+`</td>
        <td>`+checkComplete(json[i].completed)+`</td>
        </tr>`
        document.getElementById('tbodyTable').innerHTML = tableBody;
    }
  })
}

function checkComplete(complete) {
    if (complete === true) {
        return `<i class="fa fa-check green"></i>`
    } else {
        return `<i class="fa fa-times red"></i>`
    }
}

showItem();
