var newIcon = document.getElementById("newIcon");
var newContactForm = document.getElementById("newContactForm");
var cancelContact = document.getElementById("cancelContact");
var saveContact = document.getElementById("saveContact");    
var newFirstName = document.getElementById("newFirstName");
var newLastName = document.getElementById("newLastName");
var newPhoneNumber = document.getElementById("newPhoneNumber");
var newEmail = document.getElementById("newEmail");
var contactList = document.getElementById("contactList");
var contactArray = [newFirstName.value, newLastName.value, newPhoneNumber.value, newEmail.value];


newIcon.addEventListener("click", function(){
  newContactForm.classList.remove("hidden");
  newContactForm.classList.add("visible");
});

cancelContact.addEventListener("click", function() {
  newContactForm.classList.remove("visible");
  newContactForm.classList.add("hidden");
});

function saveUpdateContact() {
    
var contactArray = [newFirstName.value.trim(), newLastName.value.trim(), newPhoneNumber.value.trim(), newEmail.value.trim()];
console.log(contactArray);

function createElements(arr) {
  var div = document.createElement("div");
  div.className = "pContainer";
  div.innerHTML = '';
  document.getElementById("contactList").appendChild(div);

  arr.forEach(function(item){
    var p = document.createElement("p");
    var text = document.createTextNode(item);
    p.appendChild(text);
    div.appendChild(p);
  });
 
   function createButton(text, btnClass) {
    var btn = document.createElement("button");
    btn.innerHTML = text;
    div.appendChild(btn);
    btn.className = btnClass;
    };
    createButton("Edit", "editButton");
    createButton("Delete", "deleteButton");
  return div;
}
createElements(contactArray);

newContactForm.classList.remove("visible");
newContactForm.classList.add("hidden");
}

saveContact.addEventListener("click", function() { 
saveUpdateContact();
newFirstName.value = "";
newLastName.value = ""; 
newPhoneNumber.value = "";
newEmail.value="";
 });

 contactList.addEventListener("click", function(e){
  if(e.target.className== "deleteButton"){
    console.log(e.target.innerHTML);
    e.target.parentElement.remove();
  }
  else if(e.target.className== "editButton"){
    console.log(e.target.innerHTML);
    newContactForm.classList.remove("hidden");
    newContactForm.classList.add("visible");

    function editContactOptions(){
    if(cancelContact.clicked == true) {
      newContactForm.classList.remove("visible");
      newContactForm.classList.add("hidden");
    }
    else {
    e.target.parentElement.remove();
    saveUpdateContact();
    }
  }}
});



