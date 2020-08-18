let number = [];

function insert(a){
  number.push(a)
  let totalNum = ''
  number.forEach( function (v) {
    totalNum += v;
  })
  document.getElementById('n1').value = totalNum;
}

