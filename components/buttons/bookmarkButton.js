
export async function bookmarkButtonToggle() {
    const bookmarkButton = await new Promise(resolve => setTimeout(() => resolve(document.querySelectorAll('.bookmark__button')), 500));
    
    
   

    bookmarkButton.forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.toggle('bookmark__checked')
      });
    });
  }
