let comment = '';
let com = [];
function souma(){
    let yukihira = '';
        fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => {
        yukihira +=
                `<div class="sss">
                        
                        <div class = "title">`+json.title+`</div>
                        <div class = "body">`+json.body+`</div> <br> 
                        <div id="cm"></div> 
                </div>`
                document.getElementById('newDiv').innerHTML = yukihira;
                fetch('https://jsonplaceholder.typicode.com/comments')
  .then(er => er.json())
  .then(js => {
js.forEach(o => {
    if(o.postId == 1 ){
        com.push(o);
    }
});
for(let i = 0; i < com.length; i++){
    comment +=
    `<div>
    <div class = email>`+com[i].email+`</div>
    <div class = cbody>`+com[i].body+`</div>
    </div>`
    document.getElementById('cm').innerHTML = comment;
}
  })

  });
}
souma();