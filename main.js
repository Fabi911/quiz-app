 // Form for new Questions
 const bodyElement=document.querySelector('[data-js="body"]');
 const lightButton = document.querySelector('[data-js="light-mode"]');
 const main =document.querySelector('main')
 const form = document.querySelector('[data-js="form"]');
 const questionsAdded=[];
 const textAnswerButton="Show Answer"

  lightButton.addEventListener("click", () => {
  bodyElement.classList.toggle("light-mode");
  });

 form.addEventListener("submit", (event) => {
   event.preventDefault()
   const formData = new FormData(event.target);
   let data = Object.fromEntries(formData);
   questionsAdded.unshift(data);
   newQuestion(questionsAdded);
   event.target.reset();
   event.target.question_form.focus();
  
});

function newQuestion(array){
  const newCard=document.createElement('section');
  newCard.classList.add('cards');
  main.appendChild(newCard);

  const newBookmark=document.createElement('div');
  newBookmark.classList.add('bookmark');
  newCard.appendChild(newBookmark);

  const newBookmarkButton=document.createElement('input');
  newBookmarkButton.type='button';
  newBookmarkButton.classList.add('bookmark__button');
  newBookmark.appendChild(newBookmarkButton);


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
  newAnswer.hidden=true;
  newAnswer.textContent=array[0].answer_form;
  newCard.appendChild(newAnswer);

  const newTagBox=document.createElement('section');
  newTagBox.classList.add("cat_tags");
  newCard.appendChild(newTagBox);

  

  const tags = array[0].tags_form.split(',');
   console.log(tags)



   function createNewTag(array){
    for(let i=0; i <= array.length-1; i++){
     const newTag=document.createElement('p');
     newTag.classList.add('tags');
     newTag.textContent='#'+array[i];
     newTagBox.appendChild(newTag);
    console.log(array[i]);
   }
  }
  createNewTag(tags);




// Form for new Question end ----------------------------------------

function hideAnswer() {
newAnswer.setAttribute("hidden", "");
newButton.textContent='Show Answer';
}

function showAnswer() {
  newAnswer.removeAttribute('hidden');
  newButton.textContent='Hide Answer';
}




  newBookmarkButton.addEventListener("click", () => {
  newBookmarkButton.classList.toggle('bookmark__checked')
  });


newButton.addEventListener("click", ()=>{
  if(newAnswer.hidden===true){
  showAnswer();
  }else{
    hideAnswer()
  }

})

}




