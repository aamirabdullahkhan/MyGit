// localStorage.setItem('userName', 'obj.name')
// console.log(localStorage.getItem('userName'))
function saveToLocalStorage(event){
  event.preventDefault();
  const name=event.target.userName.value;
  const email=event.target.emailId.value;
 // localStorage.setItem('name', name);
  //localStorage.setItem('email', email);
   const obj={
    name,
    email
   }
   localStorage.setItem( obj.email ,JSON.stringify(obj));
   showUser(obj)
}
function showUser(obj){
  const parent=document.getElementById('ListofItems');
  const children=document.createElement('li');
  children.textContent=obj.name +'-'+ obj.email
  parent.appendChild(children)
}