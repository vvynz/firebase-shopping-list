import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  projectId: "shoppinglist-68583",
  dbURL: "https://shoppinglist-68583-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const listEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", addToCart);

function addToCart() {
  let inputValue = inputEl.value;

  push(shoppingListInDB, inputValue);

  clearInput(inputEl);
}

onValue(shoppingListInDB, function(snapshot) {
  let listItems = Object.values(snapshot.val());
  clearInput();
  clearShoppingList();
  
  for (let item of listItems) {
    addListItem(item)
  }
})

function clearInput() {
  inputEl.value = "";
}

function clearShoppingList() {
  listEl.innerHTML = "";
}

function addListItem(listItem) {
  listEl.innerHTML += `<li>${listItem}</li>`;
}
