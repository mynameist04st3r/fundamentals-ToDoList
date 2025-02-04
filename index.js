
let removedItems = JSON.parse(localStorage.getItem('removedItems')) || [];
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('listItems')) {
    listItems = JSON.parse(localStorage.getItem('listItems'));
  }
  displayList();
  displayRemovedList();
});

let listItems = [];
const theForm = document.querySelector('#form1');
const inputField = document.querySelector('#input');
const addButton = document.querySelector('#button');
const listBox = document.querySelector('#printedList');
const removedListBox = document.querySelector('#removedList')
theForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = inputField.value;
  if (newItem !== '') {
    if (listItems.includes(newItem)) {
      removeItem(newItem);
    } else {
      listItems = JSON.parse(localStorage.getItem('listItems')) || [];
      listItems.push(newItem);
      localStorage.setItem('listItems', JSON.stringify(listItems));
      displayList();
    }
    inputField.value = '';
  }
});

const displayList = () => {
  listBox.innerHTML = '';
  listItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listBox.appendChild(listItem);
  });
};

const removeItem = (itemToRemove) => {
  listItems = listItems.filter((item) => item !== itemToRemove);
  removedItems.push(itemToRemove);
  localStorage.setItem('listItems', JSON.stringify(listItems));
  localStorage.setItem('removedItems', JSON.stringify(removedItems));
  displayRemovedList();
  displayList();
};

const displayRemovedList = () => {
  removedListBox.innerHTML = '';
  removedItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    removedListBox.appendChild(listItem);
  });
}

// document.addEventListener('DOMContentLoaded', () => {
//   if (localStorage.getItem('listItems')) {
//     listItems = JSON.parse(localStorage.getItem('listItems'));
//   }
//   displayList();
// });
// const theForm = document.querySelector('form');
// const inputField = document.querySelector('#input');
// const addButton = document.querySelector('#button');
// const listBox = document.querySelector('#printedList');
// theForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const newItem = inputField.value;
//   if (newItem !== '') {
//     listItems = JSON.parse(localStorage.getItem('listItems')) || [];
//     listItems.push(newItem);
//     localStorage.setItem('listItems', JSON.stringify(listItems));
//     displayList();
//     inputField.value = '';
//   }
// });
// const displayList = () => {
//   listBox.innerHTML = '';
//   listItems.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     listBox.appendChild(listItem);
//   });
// };

