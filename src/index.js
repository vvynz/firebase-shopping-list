// import * as firebase from "/firebase";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const appSettings = {
  dbURL: "https://shoppinglist-50282-default-rtdb.europe-west1.firebasedatabase.app/",
  projectID: "shoppinglist-50282"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

console.log(app);

const inputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputEl.value;

  push(shoppingListInDB, inputValue)

  console.log(`${inputValue} was added!`);
});
