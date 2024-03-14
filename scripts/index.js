let counter = 0;

document.querySelectorAll('.js-increase-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.js-counter')
    .innerHTML = ++counter;
    if(counter > 0) {
      document.getElementById('js-counter').style.color = 'green';
    }
    if(counter === 0) {
      document.getElementById('js-counter').style.color = 'black';
    }
  })
})

document.querySelectorAll('.js-decrease-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.js-counter').innerHTML = --counter;
    if(counter < 0) {
      document.getElementById('js-counter').style.color = 'red';
    }
    if(counter === 0) {
      document.getElementById('js-counter').style.color = 'black';
    }
  })
})

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    document.getElementById('js-counter').style.color = 'black';
    document.querySelector('.js-counter')
      .innerHTML = (counter = 0);
})