//console.dir(document);
console.log(document.domain);
//get Element by Id
var header=document.getElementById('main-header');
header.style.borderBottom='solid 5px #000';
//get Element by Class
// var items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }
//get element by tag
// var li=document.getElementsByTagName('li');
// for(var i=0;i<li.length;i++){
//   li[i].style.fontWeight='bold';
// }
// Queryelector
var second=document.querySelector('li:nth-child(2)');
second.style.backgroundColor='green';
//QuerySelectorAll
var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor='grey';
}
