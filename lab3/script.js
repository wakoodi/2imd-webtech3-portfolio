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

    let newA = document.createElement("a");
    newA.setAttribute("class", "card-remove");
    newA.innerHTML = "Remove";

    newNote.appendChild(newP); // <div class="card"><p>Todo</p></div>
    newNote.appendChild(newA); 

    newA.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }

  add() {
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }

  remove() {
    // the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.remove();
  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
    
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click",  this.createNote.bind(this));
   
    // pressing the enter key should also work




    // this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }

  createNote(e) {
    // this function should create a new note by using the Note() class
    let text = document.querySelector("#txtAddNote").value;
    console.log(text);

    let note = new Note(text);
    //console.log(note.element);
    note.add();
  
    // note.saveToStorage();
    // this.reset();
  }

  reset() {
    // this function should reset the form 
  }

}

let app = new App();