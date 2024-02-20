import { fetchData } from "../Database/db.js";

const main =document.querySelector('.main')



    export async function createNewCards(){
        const questionsAndAnswer = await fetchData();
        console.log(questionsAndAnswer)
        await questionsAndAnswer.forEach((element) => {
    
            const newCard=document.createElement('section');
            newCard.classList.add('cards');
            newCard.innerHTML=
                        `<div class="bookmark">
                        <input class="bookmark__button" type="button">
                    </div>
                    <article class="question" aria-label="question" data-js="question">
                        ${element.question.text}
                        
                    </article>
                    <button class="answer__button">
                        Show Answer
                    </button>
                    <p class="answer__text" hidden="">
                        ${element.correctAnswer}
                    </p>
                    <section class="cat_tags">

                    </section>`
            main.appendChild(newCard);
        console.log(element.correctAnswer)
        });
    }


/* <p class="tags">
<label>#html</label>
</p>
<p class="tags">
<label>#flexbox</label>
</p>
<p class="tags">
<label>#css</label>
</p> */