document.querySelector('button').addEventListener('click', getFetch)
let titles = [];
if (localStorage.getItem('books')) {
  titles = JSON.parse(localStorage.getItem('books'));
  titles.forEach(title => addTitleToDOM(title));
}

function getFetch() {
  const isbn = document.querySelector('input').value;
  const url = `https://openlibrary.org/isbn/${isbn}.json`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data);
      addTitleToDOM(data.title)
      titles.push(data.title)
      localStorage.setItem('books', JSON.stringify(titles));
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function addTitleToDOM(title) {
  const li = document.createElement('li');
  li.textContent = title;
  document.querySelector('ul').appendChild(li);
}