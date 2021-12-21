// CREATE MODAL

const button = document.querySelector('.btn');
const modal = document.querySelector('#myModal');
const close = document.querySelector('.c-modal__close');

button.addEventListener('click', () => {
  modal.classList.add('c-modal__active');
});

close.addEventListener('click', () => {
  modal.classList.remove('c-modal__active');
});
