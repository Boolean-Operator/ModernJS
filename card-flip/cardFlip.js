var cards = document.querySelectorAll('.card');
for (let index = 0; index < cards.length; index++) {
  cards[index].addEventListener('click', function () {
    cards[index].classList.toggle('is-flipped');
  });
  
}