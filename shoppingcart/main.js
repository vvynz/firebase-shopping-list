import { initializeApp } from "firebase/app";
// "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref } from "firebase/database";
// "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  projectId: 'shoppinglist-50282',
  dbURL: "https://shoppinglist-50282-default-rtdb.europe-west1.firebasedatabase.app/",
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

console.log(app);

const inputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", addToCart);

function addToCart() {
  let inputValue = inputEl.value;


  console.log(`${inputValue} was added!`);
}