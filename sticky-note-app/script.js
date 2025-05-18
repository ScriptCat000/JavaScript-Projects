const noteContainer = document.querySelector(".note-container");
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener('click', ()=> {
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    let li = document.createElement("li");
    li.textContent = "Fardin";
    noteContainer.appendChild(li);
});