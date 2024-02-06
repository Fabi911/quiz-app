const bodyElement=document.querySelector('[data-js="body"]');
const cardText=document.querySelector('[data-js="question"]')
const lightButton = document.querySelector('[data-js="light-mode"]');

lightButton.addEventListener("click", () => {
    bodyElement.classList.toggle("light-mode");
  });