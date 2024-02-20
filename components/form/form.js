const main =document.querySelector('.main__form')
const form = document.querySelector('[data-js="form"]');
const questionsAdded=[];

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

function newQuestion(array){
  const newCard=document.createElement('section');
    newCard.classList.add('cards');
    newCard.innerHTML=`
            <div class="bookmark">
              <input class="bookmark__button" type="button">
            </div>
            <article class="question" aria-label="question" data-js="question">
                ${array[array.length-1].question_form}
                
            </article>
            <button class="answer__button">
                Show Answer
            </button>
            <p class="answer__text" hidden="">
                ${array[array.length-1].answer_form}
            </p>
            <section class="cat_tags">

            </section>
    `
    main.appendChild(newCard);
    
    createNewTag(tags);

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
}

