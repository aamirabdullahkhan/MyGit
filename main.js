var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);

//Filter Event
filter.addEventListener('keyup', filterItems);

//add Item
function addItem(e){
  e.preventDefault();

  //get Input Value
  var newItem=document.getElementById('item').value;

  //Create new li Element
  var li=document.createElement('li');
  //Add Class
  li.className='list-group-item';
  //Add text node with value
  li.appendChild(document.createTextNode(newItem));

  //Create Del Button
  var del=document.createElement('button');

  //Add Class in del
  del.className='btn btn-danger btn-sm float-right delete';

  //Append TextNode
  del.appendChild(document.createTextNode('X'));

  //Append button to li
  li.appendChild(del);

  itemList.appendChild(li);
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li=e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
  //convert text to lowerCase
  var text=e.target.value.toLowerCase();
  //get li's
  var items=itemList.getElementsByTagName('li');
  //Convert to Array
  Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!= -1){
      item.style.display='block';
    }else{
      item.style.display='none';
    }
  });
}