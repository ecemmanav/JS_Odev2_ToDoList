let addToDoButton = document.getElementById('addToDo');
let inputText = document.getElementById('inputText');
let listTask = document.querySelector("#toDoList");
let ullength = document.getElementsByTagName("li");

for (let i=0; i < ullength.length; i++){
    let closeButton = document.createElement("span");
    closeButton.textContent =  "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;
}

addToDoButton.addEventListener('click', addTask);

// Functions

function check(){
    this.classList.toggle("checked");
  }

function removeButton(){
    this.parentElement.remove();
  }

function removeButton(){
    this.parentElement.remove();
}

function addTask() {
 
    if (inputText.value == "")  {
    $("#toast2").toast("show");
    } 

    else {
    $("#toast1").toast("show");

    let liDOM = document.createElement('li');
    listTask.appendChild(liDOM);
    liDOM.innerHTML = inputText.value;
    inputText.value = "";
    liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listTask.append(liDOM);
        inputElement.value = ("li");
    
}
}