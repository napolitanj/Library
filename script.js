const addBook = document.getElementById("addBook");
const submit = document.getElementById("submit");
const exit = document.getElementById("exit");
const popupBackground = document.getElementById("popupBackground")
const popup = document.forms['popup'];
let createBook;
let myLibrary = [];
//Buttons to summon popup to add and submit new books

addBook.addEventListener("click", ()=>
    newBook());
popup.addEventListener("submit", (e)=>
    submitBook(e));
exit.addEventListener("click", () =>
    newBook());

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function resetFields() {
    let fields = document.querySelectorAll(".field");
    fields.forEach(function(aField) {
        aField.value="";
    })
}

function displayLibrary() {
    for (let i=0; i<myLibrary.length; i++)
    createCard(myLibrary[i]);
}

//Window for book info entry
function submitBook(e) {

    e.preventDefault();

    let title = document.getElementById("newTitle");
    let author = document.getElementById("newAuthor");
    let pages = document.getElementById("newPages");
    let read = document.getElementById("newRead");
    
    createBook = new Book(title.value, author.value, pages.value,read.checked)
    myLibrary.push(createBook);
    createCard(createBook);
    sD();
    popupBackground.style.visibility = "hidden";
}


//Renders book card
function createCard(book) {
    const card = document.createElement("div");
    const butts = document.createElement("div");
    const cardTitle = document.createElement("h4");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const cardRead = document.createElement("button");
    const remove = document.createElement("button");
    
        card.className="cardStyle";
        butts.className="butts";
        remove.className="butt2";
        cardRead.className="butt2";

        cardTitle.textContent = '"' + book.title + '"';
        cardAuthor.textContent = book.author;
        cardPages.textContent = book.pages + " pages";
        cardRead.textContent = book.read;
        isRead(book.read, cardRead);
        remove.textContent = "Remove Book";

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(butts);
        butts.appendChild(cardRead);
        butts.appendChild(remove);

    document.getElementById("cardStack").appendChild(card);
    
    cardRead.addEventListener("click", () =>
        book.read = changeRead(book.read, cardRead));
    remove.addEventListener("click", () =>
        deleted(card,book));
        
        sD();
}

//Deletes Book
function deleted(e,book){
    let toDie = myLibrary.indexOf(book);
    myLibrary.splice(toDie, 1);
    cardStack.removeChild(e);
    console.log(myLibrary);
    sD();
}

//Toggles Add Book window visibility
function newBook(){
    if (popupBackground.style.visibility === "hidden") {
        popupBackground.style.visibility = "visible";
    }
    else {
        popupBackground.style.visibility = "hidden";
    }
    resetFields();
}

//"Read" button
function isRead(e, button) {
    if (e === true) {
        button.textContent = "Read ✓";
        sD();
    }
    else {
        e = false;
        button.style.backgroundColor="salmon";
        button.textContent = "Not Read";
        sD();
    }
}

function changeRead(e, button){
    if (e === true) {
        button.style.backgroundColor="salmon";
        button.textContent = "Not Read";
        sD();
        return  false;
    }
    else {
        button.textContent = "Read ✓";
        button.style.backgroundColor= "white";
        sD();
        return true;
    }
}

//Store data
function sD() {
    localStorage.setItem('library', JSON.stringify(myLibrary));
}

//Load data
function lD() {
    const bookShelf = JSON.parse(localStorage.getItem('library'));
    if (bookShelf) {
        myLibrary = bookShelf;
    } else {
        myLibrary = []
    }
    displayLibrary();
};

newBook();
lD();