//note to self
// get a specific books characters -> data[0]["characters"]
//get 5th book in series data[5]
//get number of books data["length"]
//get the 1031st character in the series data[4]["characters"][1031]

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
