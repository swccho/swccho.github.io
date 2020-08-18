let user = [
    {name: 'Akash Hossen', age: 12},
    {name: 'Kalia Ahmed', age: 21},
    {name: 'Shoron Hossen', age: 24},
    {name: 'Alif Hasan', age: 26},
    {name: 'Alifa Khatun', age: 34},
    {name: 'Tanzin Khatun', age: 52},
    {name: 'siyam Ahmed', age: 21},
]

function showUser() {
    let tableBody = '';
    for ( let i = 0; i < user.length; i++) {
        tableBody +=
        `<tr>
            <td>`+user[i].name+`</td>
            <td>`+user[i].age+`</td>
        </tr>`
        document.getElementById('userTable').innerHTML = tableBody;
        console.log(user[i]);
    }
}

showUser();