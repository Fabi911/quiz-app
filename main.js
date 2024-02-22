import { createNewCards } from "./components/Card/card.js";
import { showOrHideAnswer } from "./components/buttons/answerButton.js";
import { bookmarkButtonToggle } from "./components/buttons/bookmarkButton.js";

const bodyElement=document.querySelector('[data-js="body"]');
const lightButton = document.querySelector('[data-js="light-mode"]');

 // switch between light and dark mode
 lightButton.addEventListener("click", () => {
  bodyElement.classList.toggle("light-mode");
  });


//create new quiz cards from an api

  createNewCards()

// show or hide answer
  showOrHideAnswer();
  
//change Bookmark-Button
  bookmarkButtonToggle()

  



















