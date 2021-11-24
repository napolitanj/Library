const addBook = document.getElementById("addBook");
const submit = document.getElementById("submit");
let popup = document.getElementById("popup");

let myLibrary = [];

//Buttons to summon popup to add and submit new books
addBook.addEventListener("click", ()=>
    newBook(),
    console.log(myLibrary));
submit.addEventListener("click", ()=>
    submitBook());


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    addToLibrary(this);
}

function addToLibrary(book) {
    myLibrary.push(book);
    createCard(book);
}

//function displayLibrary() {
    //for (let i=0; i < myLibrary.length; i++)
//}

function submitBook() {
    let title = document.getElementById("newTitle").value;
    let author = document.getElementById("newAuthor").value;
    let pages = document.getElementById("newPages").value;
    let read = document.getElementById("newRead").value;
    console.log(title + " by " + author + " is " + pages + " pages long. " + read);
    new Book(title,author,pages,read);
    popup.style.visibility = "hidden";
}

function createCard(book) {
    let card = document.createElement("div");
        card.style.width = "100px";
        card.style.height = "100px";
        card.style.border = "solid black 3px";
        card.style.backgroundColor = "salmon";
        cardTitle = document.createTextNode(book.title);
        cardAuthor = document.createTextNode(book.author);
        cardPages = document.createTextNode(book.pages);
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
    document.getElementById("card").appendChild(card);
}

function newBook(){
    if (popup.style.visibility === "hidden") {
        popup.style.visibility = "visible";
    }
    else {
        popup.style.visibility = "hidden";
    }
}

