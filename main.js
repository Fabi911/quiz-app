import { createNewCards } from "./components/Card/card.js";

const bodyElement=document.querySelector('[data-js="body"]');
const lightButton = document.querySelector('[data-js="light-mode"]');

 // switch between light and dark mode
 lightButton.addEventListener("click", () => {
  bodyElement.classList.toggle("light-mode");
  });


//create new quiz cards from an api

  createNewCards()


    



















