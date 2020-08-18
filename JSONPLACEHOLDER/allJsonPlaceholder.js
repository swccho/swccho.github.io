let cmt0 = [];
let cmt0o1 = '';
function PostOnly0(){
let Post0 = '';

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(P0 => P0.json())
  .then(P0s0 => {
      Post0 +=
      `<div class= Post0>
      <div class = "title">`+P0s0.title+`</div>
      <div class = "Cbody">`+P0s0.body+`</div>
      <div id="cmt0">
      
      </div>
      <button onclick="showCmt0()">Show Comment</button> <button onclick="hideCmt0()">Hide Comment</button>
      </div>`
     
      document.getElementById('PostOnly0').innerHTML = Post0;
      
  })

}
function showCmt0(){
    document.getElementById('cmt0').setAttribute('style', 'display: block;');

    fetch('https://jsonplaceholder.typicode.com/comments')
  .then(cmmt0 => cmmt0.json())
  .then(c0 => {
    cmt0 = [];
    cmt0o1 = '';
      c0.forEach(i => {
          if(i.postId == 1){
              cmt0.push(i)
          }
      });
      for(j = 0; j < cmt0.length; j++){
          cmt0o1 += 
          `<div>
          <div>`+cmt0[j].name+`</div>
          <div>`+cmt0[j].email+`</div>
          <div>`+cmt0[j].body+`</div>
          </div>`
          
          document.getElementById('cmt0').innerHTML = cmt0o1;
      }
  })
  console.log(cmt0)
}
function hideCmt0(){
document.getElementById('cmt0').setAttribute('style', 'display: none;');

}
PostOnly0();
//

//

let cmt1 = [];
let cmt0o2 = '';

function PostOnly1(){
   
}
function showCmt1(){
    document.getElementById('cmt1').setAttribute('style', 'display: block;');

    fetch('https://jsonplaceholder.typicode.com/comments')
  .then(cmmt1 => cmmt1.json())
  .then(c1 => {
    cmt1 = [];
    cmt0o2 = '';
      c1.forEach(i => {
          if(i.postId == 1){
              cmt1.push(i)
          }
      });
      for(k = 0; k < cmt1.length; k++){
          cmt0o2 += 
          `<div>
          <div>`+cmt1[k].name+`</div>
          <div>`+cmt1[k].email+`</div>
          <div>`+cmt1[k].body+`</div>
          </div>`
          
          document.getElementById('cmt1').innerHTML = cmt0o2;
      }
  })

}
function hideCmt1(){
document.getElementById('cmt1').setAttribute('style', 'display: none;');

}
PostOnly1();
//
//
let cmt2 = [];
let cmt0o3 = '';

function PostOnly2(){
    let Post2 = '';
    fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then(P2 => P2.json())
  .then(P0s2 => {
     Post2 +=
      `<div class= Post0>
      <div class = "title">`+P0s2.title+`</div>
      <div class = "Cbody">`+P0s2.body+`</div>
      <div id="cmt2">
      
      </div>
      <button onclick="showCmt2()">Show Comment</button> <button onclick="hideCmt2()">Hide Comment</button>
      </div>`
      document.getElementById('PostOnly2').innerHTML = Post2;
  })
}
function showCmt2(){
    document.getElementById('cmt2').setAttribute('style', 'display: block;');

    fetch('https://jsonplaceholder.typicode.com/comments')
  .then(cmmt2 => cmmt2.json())
  .then(c2 => {
    cmt2 = [];
    cmt0o3 = '';
      c2.forEach(l => {
          if(l.postId == 2){
              cmt2.push(l)
          }
      });
      for(l = 0; l < cmt2.length; l++){
          cmt0o3 += 
          `<div>
          <div>`+cmt2[l].name+`</div>
          <div>`+cmt2[l].email+`</div>
          <div>`+cmt2[l].body+`</div>
          </div>`
          
          document.getElementById('cmt2').innerHTML = cmt0o3;
      }
  })

}
function hideCmt2(){
document.getElementById('cmt2').setAttribute('style', 'display: none;');

}
PostOnly2();
