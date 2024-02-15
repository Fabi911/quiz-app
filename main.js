
 const bodyElement=document.querySelector('[data-js="body"]');
 const lightButton = document.querySelector('[data-js="light-mode"]');
 const main =document.querySelector('main')
 const form = document.querySelector('[data-js="form"]');
 const questionsAdded=[];
 const textAnswerButton="Show Answer"

 // switch between light and dark mode
  lightButton.addEventListener("click", () => {
  bodyElement.classList.toggle("light-mode");
  });


  // Read input value

 form.addEventListener("submit", (event) => {
   event.preventDefault()
   const formData = new FormData(event.target);
   let data = Object.fromEntries(formData);
   questionsAdded.push(data);
   newQuestion(questionsAdded);
   event.target.reset();
   event.target.question_form.focus();

   console.log(questionsAdded);

  
});

// --------------------------------------------create a new Card------------------------------------------

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
  newQuestionText.textContent= array[array.length-1].question_form;
  newCard.appendChild(newQuestionText);

  const newButton=document.createElement('button');
  newButton.classList.add('answer__button');
  newButton.textContent=textAnswerButton;
  newCard.appendChild(newButton);

  const newAnswer=document.createElement('p');
  newAnswer.classList.add("answer__text");
  newAnswer.hidden=true;
  newAnswer.textContent=array[array.length-1].answer_form;
  newCard.appendChild(newAnswer);

  const newTagBox=document.createElement('section');
  newTagBox.classList.add("cat_tags");
  newCard.appendChild(newTagBox);

  
    // save input from the tags-input in an array
    const tags = array[array.length-1].tags_form.split(',');
    console.log(tags)


      // create and add tags in the new Card with for-loop
      function createNewTag(array){
        for(let i=0; i <= array.length-1; i++){
        const newTag=document.createElement('p');
        newTag.classList.add('tags');
        newTag.textContent='#'+array[i];
        newTagBox.appendChild(newTag);
        console.log(array[i]);
      }
      }

   //call the function   
  createNewTag(tags);

//------------------------------ end create a new Card---------------------------------



// Function for show and hide the answer
function hideAnswer() {
newAnswer.setAttribute("hidden", "");
newButton.textContent='Show Answer';
}

function showAnswer() {
  newAnswer.removeAttribute('hidden');
  newButton.textContent='Hide Answer';
}

newButton.addEventListener("click", ()=>{
  if(newAnswer.hidden===true){
  showAnswer();
  }else{
    hideAnswer()
  }
})
// toggle the icon from the bookmark
newBookmarkButton.addEventListener("click", () => {
  newBookmarkButton.classList.toggle('bookmark__checked')
  });

}




