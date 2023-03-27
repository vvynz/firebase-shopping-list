import { add } from "./functions.js"

const appSettings = {
  dbURL: "https://shopping-cart-c5c06-default-rtdb.firebaseio.com/",
}

console.log(add(2,4))

const inputEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", addToCart);

function addToCart() {
  let inputValue = inputEl.value;

  console.log(inputValue);
}