document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
const api = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  fetch(api)
  .then(res => res.json())
  .then(data => renderBooks(data))
  return fetch(api)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
