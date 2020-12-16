//import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/todos`);

    const todos = res.data;

    console.log(`GET: Here's the list of todos`, todos);

    return todos;
  } catch (e) {
    console.error(e);
  }
};

const createLi = item => {
  const li = document.createElement('li');

  li.appendChild(document.createTextNode(item.title));

  return li;
};

const addTodosToDOM = todos => {
  const ul = document.querySelector('ul');

  if (Array.isArray(todos) && todos.length > 0) {
    todos.map(todo => {
      ul.appendChild(createLi(todo));
    });
  } else if (todos) {
    ul.appendChild(createLi(todos));
  }
};

const main = async () => {
  addTodosToDOM(await getTodos());
};

main();
