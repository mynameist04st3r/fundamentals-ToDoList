
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('listItems')) {
    listItems = JSON.parse(localStorage.getItem('listItems'));
  }
  displayList();
});
const theForm = document.querySelector('form');
const inputField = document.querySelector('#input');
const addButton = document.querySelector('#button');
const listBox = document.querySelector('#printedList');
theForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = inputField.value;
  if (newItem !== '') {
    listItems = JSON.parse(localStorage.getItem('listItems')) || [];
    listItems.push(newItem);
    localStorage.setItem('listItems', JSON.stringify(listItems));
    displayList();
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

// const inForm = document.querySelector('form');
// const inputField = document.querySelector('#input');
// const addButton = document.querySelector('#button');
// const listBox = document.querySelector('#printedList');
// inForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const newItem = inputField.value;
//   if (newItem !== '') {
//     const listItem = document.createElement('li');
//     listItem.textContent = newItem;
//     listBox.appendChild(listItem);
//     listItems.push(newItem);
//     localStorage.setItem('listItems', JSON.stringify(listItems));
//     inputField.value = '';
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   if (localStorage.getItem('listItems')) {
//     listItems = JSON.parse(localStorage.getItem('listItems'));
//     listItems.forEach((item) => {
//       const listItem = document.createElement('li');
//       listItem.textContent = item;
//       listBox.appendChild(listItem);
//     });
//   }
// });


// Check if there are any stored list items
// if (localStorage.getItem("listItems")) {
//   listItems = JSON.parse(localStorage.getItem("listItems"));
// }
// // Call displayList when the page loads
// displayList();
// const addToList = () => {
//   const input = document.getElementById("input");
//   const list = document.getElementById("printedList");
//   if (input.value !== "") {
//     const newItem = {
//       text: input.value
//     };
//     listItems.push(newItem);
//     localStorage.setItem("listItems", JSON.stringify(listItems));
//     displayList(); // Call displayList after adding a new item
//     input.value = "";
//   }
// };
// const displayList = () => {
//   const list = document.getElementById("printedList");
//   list.innerHTML = "";
//   listItems.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item.text;
//     list.appendChild(listItem);
//   });
// };
// document.getElementById("button").addEventListener("click", addToList);

// Check if there are any stored list items
// if (localStorage.getItem("listItems")) {
//   listItems = JSON.parse(localStorage.getItem("listItems"));
//   displayList();
// }
// const addToList = () => {
//   const input = document.getElementById("input");
//   const list = document.getElementById("printedList");
//   if (input.value !== "") {
//     const newItem = {
//       text: input.value
//     };
//     listItems.push(newItem);
//     localStorage.setItem("listItems", JSON.stringify(listItems));
//     displayList(); // Call displayList after adding a new item
//     input.value = "";
//   }
// };
// const displayList = () => {
//   const list = document.getElementById("printedList");
//   list.innerHTML = "";
//   listItems.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item.text;
//     list.appendChild(listItem);
//   });
// };
// document.getElementById("button").addEventListener("click", addToList);

// Check if there are any stored list items
// if (localStorage.getItem("listItems")) {
//   listItems = JSON.parse(localStorage.getItem("listItems"));
//   displayList();
// }
// const addToList = () => {
//   const input = document.getElementById("input");
//   const list = document.getElementById("printedList");
//   if (input.value !== "") {
//     const newItem = {
//       text: input.value
//     };
//     listItems.push(newItem);
//     localStorage.setItem("listItems", JSON.stringify(listItems));
//     const listItem = document.createElement("li");
//     listItem.textContent = input.value;
//     list.appendChild(listItem);
//     input.value = "";
//   }
// };
// const displayList = () => {
//   const list = document.getElementById("printedList");
//   list.innerHTML = "";
//   listItems.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item.text;
//     list.appendChild(listItem);
//   });
// };
// document.getElementById("button").addEventListener("click", addToList);

// const addToList = () => {
//   const input = document.getElementById("input");
//   const list = document.getElementById("printedList");
//   if (input.value !== "") {
//     const newItem = document.createElement("li");
//     newItem.textContent = input.value;
//     list.appendChild(newItem);
//     input.value = "";
//   }
// };
// document.getElementById("button").addEventListener("click", addToList);


// let btn = document.querySelector('#button');
// btn.addEventListener("click", () => alert('Button was clicked'));