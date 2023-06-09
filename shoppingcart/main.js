import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
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

onValue(shoppingListInDB, function (snapshot) {
  if (snapshot.exists()) {
    let listItems = Object.entries(snapshot.val());
    clearInput();
    clearShoppingList();

    for (let item of listItems) {
      addListItem(item);
    }
  } else {
    listEl.innerHTML = "No items here...yet";
  }
});

function clearInput() {
  inputEl.value = "";
}

function clearShoppingList() {
  listEl.innerHTML = "";
}

function addListItem(item) {
  // create 2 variables, 1 for itemID, itemValue
  let itemID = item[0];
  let itemValue = item[1];

  // create a new li el
  let newListItem = document.createElement("li");

  newListItem.textContent = itemValue;

  // append new li el to our ul
  listEl.append(newListItem);

  // add eventlistener to new list item
  newListItem.addEventListener("dblclick", function () {
    let selectedItemInDB = ref(database, `shoppingList/${itemID}`);
    remove(selectedItemInDB);
  });
}
