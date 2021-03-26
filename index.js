document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
const api = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  return fetch(api)
  .then(res => res.json())
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
