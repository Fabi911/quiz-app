// const tags = array[array.length-1].tags_form.split(',');
// console.log(tags)


  // create and add tags in the new Card with for-loop
//   function createNewTag(array){
//     for(let i=0; i <= array.length-1; i++){
//     const newTag=document.createElement('p');
//     newTag.classList.add('tags');
//     newTag.textContent='#'+array[i];
//     newTagBox.appendChild(newTag);
//     console.log(array[i]);
//   }
//   }


  // function newQuestion(array){
//   const newCard=document.createElement('section');
//   newCard.classList.add('cards');
//   main.appendChild(newCard);

//   const newBookmark=document.createElement('div');
//   newBookmark.classList.add('bookmark');
//   newCard.appendChild(newBookmark);

//   const newBookmarkButton=document.createElement('input');
//   newBookmarkButton.type='button';
//   newBookmarkButton.classList.add('bookmark__button');
//   newBookmark.appendChild(newBookmarkButton);


//   const newQuestionText=document.createElement('article');
//   newQuestionText.classList.add("question");
//   newQuestionText.textContent= array[array.length-1].question_form;
//   newCard.appendChild(newQuestionText);

//   const newButton=document.createElement('button');
//   newButton.classList.add('answer__button');
//   newButton.textContent=textAnswerButton;
//   newCard.appendChild(newButton);

//   const newAnswer=document.createElement('p');
//   newAnswer.classList.add("answer__text");
//   newAnswer.hidden=true;
//   newAnswer.textContent=array[array.length-1].answer_form;
//   newCard.appendChild(newAnswer);

//   const newTagBox=document.createElement('section');
//   newTagBox.classList.add("cat_tags");
//   newCard.appendChild(newTagBox);


// export async function buttonCards(){
//     const showAnswerButton=card.querySelector('.answer__button')
//     const bookmarkButton=card.querySelector('.bookmark__button')
//     const answerText=card.querySelector('.answer__text')
  
//     function hideAnswer() {
//         answerText.setAttribute("hidden", "");
//         //answerButton.textContent='Show Answer';
//         }
        
//     function showAnswer() {
//           answerText.removeAttribute('hidden');
//           //answerButton.textContent='Hide Answer';
//         }
  
//     await showAnswerButton.addEventListener("click", ()=>{
//         if(answerText.hidden===true){
//         showAnswer();
//         }else{
//         hideAnswer()
//         }
//     })
//     await bookmarkButton.addEventListener("click", () => {
//         bookmarkButton.classList.toggle('bookmark__checked')
//     });
//   }