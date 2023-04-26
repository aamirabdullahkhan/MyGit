// localStorage.setItem('userName', 'obj.name')
 //console.log(localStorage.getItem('userName'))
function saveToLocalStorage(event){
  event.preventDefault();
  const name=event.target.userName.value;
  const email=event.target.emailId.value;
 // localStorage.setItem('name', name);
 // localStorage.setItem('email', email);
   const obj={
    name,
    email
   }
   axios.post("https://crudcrud.com/api/99070382efd947bfa4becfaacf5b4255/data", obj)
   .then((response)=>{
    showUser(response.data)
    console.log(response)
   })
   .catch((err)=>{
    console.log(err)
   })
   //localStorage.setItem( obj.email ,JSON.stringify(obj));
   //showUser(obj)
}
window.addEventListener("DOMContentLoaded", ()=>{
  axios.get("https://crudcrud.com/api/99070382efd947bfa4becfaacf5b4255/data")
  .then((response)=>{
    console.log(response)
    for(var i=0;i<response.data.length;i++){
      showUser(response.data[i])
    }
  })
  .catch((error)=>{
    console.log(error)
  })

  // const localStorageObj=localStorage
  // const localStoragekeys=Object.keys(localStorageObj)

  // for(var i=0;i<localStoragekeys.length;i++){
  //   const key=localStoragekeys[i]
  //   const userDetailsString=localStorageObj[key]
  //   const userDetailsObj=JSON.parse(userDetailsString)
  //   showUser(userDetailsObj)
  // }
})
function showUser(obj){
  const parent=document.getElementById('ListofItems');
  const children=document.createElement('li');
  children.textContent=obj.name +'-'+ obj.email

  const DeleteButton=document.createElement('input')
  DeleteButton.type='button'
  DeleteButton.value='Delete'
  DeleteButton.onclick= () =>{
    localStorage.removeItem(obj.email)
    parent.removeChild(children)
  }
  const EditButton=document.createElement('input')
  EditButton.type='button'
  EditButton.value='Edit'
  EditButton.onclick = () =>{
    localStorage.removeItem(obj.email)
    parent.removeChild(children)
    document.getElementById('name').value=obj.name
    document.getElementById('email').value=obj.email
  }

  children.appendChild(DeleteButton)
  children.appendChild(EditButton)
  parent.appendChild(children)
}