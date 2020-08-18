let comment = '';
let comments = [];
function alo(){
let aloha = '';
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {
    aloha += 
    `<div class="sss">
      <div>`+json.id+`</div>
      <div>`+json.title+`</div>
      <div>`+json.body+`</div>
      <div id="cm"></div>   
    </div>`
    document.getElementById('post1').innerHTML = aloha;
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((rs) => rs.json())
    .then((jn) => {
        jn.forEach(k => {
            if (k.postId == 1) {
                comments.push(k)
            }
        });

        for(let i = 0; i < comments.length; i++){
            comment +=
            `<div>
            <div>`+comments[i].email+`</div>
            <div>`+comments[i].body+`</div>
            </div>`
            document.getElementById('cm').innerHTML = comment;
        }
    })

    
  });
}
alo();
