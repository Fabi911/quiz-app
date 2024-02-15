const main =document.querySelector('main')
const form = document.querySelector('[data-js="form"]');
const questionsAdded=[];
const textAnswerButton="Show Answer";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  let data = Object.fromEntries(formData);
  questionsAdded.unshift(data);
 
  console.log(questionsAdded[0].question_form)
  newQuestion(questionsAdded);
  
});

function newQuestion(array){
  const newCard=document.createElement('section');
  newCard.classList.add('cards');
  main.appendChild(newCard);

  const newBookmark=document.createElement('img');
  newBookmark.classList.add('bookmark');
  newBookmark.src='./img/bookmark_wh.png';
  newCard.appendChild(newBookmark);

  console.log(newBookmark.attributes[0])

  const newQuestionText=document.createElement('article');
  newQuestionText.classList.add("question");
  newQuestionText.textContent= array[0].question_form;
  newCard.appendChild(newQuestionText);

  const newButton=document.createElement('button');
  newButton.classList.add('answer__button');
  newButton.textContent=textAnswerButton;
  newCard.appendChild(newButton);

  const newAnswer=document.createElement('p');
  newAnswer.classList.add("answer__text");
  newAnswer.hidden.add('true');
  newAnswer.textContent=array[0].answer_form;
  newCard.appendChild(newAnswer);

}

