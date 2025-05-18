const noteContainer = document.querySelector(".note-container");
const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener('click', ()=> {
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        let paragraph = document.createElement("p");
        let span = document.createElement("span")
        
        li.appendChild(paragraph);
        li.appendChild(span);

        paragraph.textContent = inputBox.value;
        span.textContent = "delete";

        noteContainer.appendChild(li);
    }

    inputBox.value = "";
    saveNote();
});

noteContainer.addEventListener('click', (e)=> {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveNote();
    };
});

function saveNote(){
    localStorage.setItem("notes", noteContainer.innerHTML);
};

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes")
}

showNotes();