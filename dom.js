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
// var second=document.querySelector('li:nth-child(2)');
// second.style.backgroundColor='green';
// //QuerySelectorAll
// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//   odd[i].style.backgroundColor='grey';
// }
// TRAVERSING DOM
var itemList=document.querySelector('#items');
//parentNode
itemList.parentNode.style.backgroundColor='grey';
//childrenNode
itemList.children[2].style.color='coral';
var head=document.querySelector('#header-title');
head.textContent='Item Lister';
//firstElementChild
itemList.firstElementChild.textContent='Item 1';
//lastElementChild
itemList.lastElementChild.style.color='red';
//previousElementSibling
itemList.previousElementSibling.style.color='aqua';
//createElement
//createDiv
var div=document.createElement('div');
//createClass
div.className='newDiv';
//create Id
div.id='hel';
//Add Attr
div.setAttribute('title','heLL');
//create text Node
var divText=document.createTextNode('Yeah!!!');
//adding text to div
div.appendChild(divText);

//adding text Before

var Before=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(div);

Before.insertBefore(divText,h1);
h1.insertBefore(divText,h1);