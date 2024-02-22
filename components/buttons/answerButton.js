export async function showOrHideAnswer() {
    const card = await new Promise(resolve => setTimeout(() => resolve(document.querySelector('.cards')), 500));
    const answerTexts = await new Promise(resolve => setTimeout(() => resolve(document.querySelectorAll('.answer__text')), 500));
    const answerButtons = await new Promise(resolve => setTimeout(() => resolve(document.querySelectorAll('[data-js="answerButton"]')), 500));
    
   

    answerButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          if (button.textContent.includes('Show Answer')) {
              showAnswer(index);
          } else {
              hideAnswer(index);
          }
      });
  });
  
  function hideAnswer(index) {
      answerTexts[index].setAttribute("hidden", "");
      answerButtons[index].textContent = 'Show Answer';
  }
  
  function showAnswer(index) {
      answerTexts[index].removeAttribute('hidden');
      answerButtons[index].textContent = 'Hide Answer';
  }   

  }