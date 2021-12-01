const addBook = document.getElementById("addBook");
const submit = document.getElementById("submit");
const exit = document.getElementById("exit");
let popup = document.getElementById("popup");

let myLibrary = [];

//Buttons to summon popup to add and submit new books
addBook.addEventListener("click", ()=>
    newBook(),
    console.log(myLibrary));
submit.addEventListener("click", ()=>
    submitBook());
exit.addEventListener("click", () =>
    newBook());


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    console.log(read);
    addToLibrary(this);
}

function addToLibrary(book) {
    myLibrary.push(book);
    createCard(book);
}

function displayLibrary() {
    for (let i=0; i < myLibrary.length; i++)
    console.log(myLibrary);
}

function submitBook() {
    let title = document.getElementById("newTitle").value;
    let author = document.getElementById("newAuthor").value;
    let pages = document.getElementById("newPages").value;
    let read = document.getElementById("newRead").checked;
     
    console.log(title + " by " + author + " is " + pages + " pages long. " + read);
    new Book(title,author,pages,read);
    popup.style.visibility = "hidden";
}

function createCard(book) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("h4");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const cardRead = document.createElement("button");
    const remove = document.createElement("button");
    
        card.className="cardStyle";
        cardTitle.textContent = book.title;
        cardAuthor.textContent = book.author;
        cardPages.textContent = book.pages;
        cardRead.textContent = book.read;
        isRead(book.read, cardRead);
        remove.textContent = "Remove";

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardRead);
        card.appendChild(remove);


    document.getElementById("cardStack").appendChild(card);
    cardRead.addEventListener("click", () =>
    book.read = changeRead(book.read, cardRead));
}

function newBook(){
    if (popup.style.visibility === "hidden") {
        popup.style.visibility = "visible";
    }
    else {
        popup.style.visibility = "hidden";
    }
}

function isRead(e, button) {
    if (e === true) {
        button.textContent = "Read";
    }
    else {
        e = false;
        button.style.backgroundColor="red";
        button.textContent = "Not Read";
    }
}

function changeRead(e, button){
    console.log(e);
    if (e === true) {
        button.style.backgroundColor="red";
        button.textContent = "Not Read";
        return  false;
    }
    else {
        button.textContent = "Read";
        button.style.backgroundColor="white";
        return true;
    }
}



