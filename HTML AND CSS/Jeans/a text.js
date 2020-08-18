let img = [[
{src : 'https://images8.alphacoders.com/532/thumb-1920-532407.jpg', type: 'cake'},
{src : 'https://images6.alphacoders.com/511/thumb-1920-511799.jpg'},
{src : 'https://images5.alphacoders.com/408/thumb-1920-408539.jpg'}
],
[
    {src: 'https://images.alphacoders.com/712/thumb-1920-712830.jpg'},
    {src: 'https://images5.alphacoders.com/556/thumb-1920-556869.jpg'},
    {src: 'https://images6.alphacoders.com/418/thumb-1920-418866.jpg'}
]
];

let id = 0;
let picture = '';
let picture1 = 0;
function init(type){
    picture = '';
    if (type == 'all') {
        img.forEach( function(v) {
            picture +=
            `<div  >
                <img src=`+v.src+` >
            </div>`
        });
    } else {
        img.forEach( function(v) {
            if (v.type == type) {
                picture +=
                    `<div  >
                        <img src=`+v.src+` >
                    </div>`
            
            }
        });
    }

    document.getElementById('alo').innerHTML = picture;
}


