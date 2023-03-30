const list = document.getElementById("my-list");
for(let i=0; i<yourArray.length; i++){
  let listItem = document.createElement("li");
  listItem.innerHTML = yourArray[i];
  list.appendChild(listItem);
}
