class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement('div'); // <div>
    newNote.setAttribute("class", "card"); // <div class="card">
    let newP = document.createElement("p"); // <p>Todo</p>
    newP.innerHTML = title;
    newNote.appendChild(newP); // <div class="card"><p>Todo</p></div>
    let newA = document.createElement("a");
    newA.setAttribute("class", "card-remove");
    newA.innerHTML = "Remove";
    newNote.appendChild(newA); 
    newA.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }

  add() {
    // this function appends the note to the screen
    document.querySelector(".notes").appendChild(this.element);
  }

  saveToStorage() {
    let local = JSON.parse(localStorage.getItem(`local`));
    if(local == null){
      local =[];
    }
    local.push(this.title);
    localStorage.setItem(`local`, JSON.stringify(local));
  }

  remove() {
    this.addEventListener(`click`, e => {e.preventDefault();});
    let arr = JSON.parse(localStorage.getItem(`local`));
    let title = this.querySelector(`p`).innerHTML;
    let key= arr.indexOf(title); 
    arr.splice(key, 1);
    localStorage.setItem(`local`, JSON.stringify(arr));
    this.remove();
  }
}

class App {
  constructor() {
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click",  this.createNote.bind(this));
    let inputText = document.querySelector("#txtAddNote");
    
    inputText.addEventListener('keydown', enter => {
      if(enter.keyCode === 13){
        enter.preventDefault();
        document.querySelector("#btnAddNote").click();
        return true;
      }
    });

    this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    let data = JSON.parse(localStorage.getItem(`local`));
    if(data.length > 0) {
      data.forEach(title => {let note = new Note(title); note.add();});
    }
  }

  createNote(e) {
    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);
    note.add();
    note.saveToStorage();
    this.reset();
  }

  reset() {
    // this function resets the input field
    document.getElementById('txtAddNote').value = '';
  }
}

let app = new App();