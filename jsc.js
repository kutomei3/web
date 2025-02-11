document.addEventListener('DOMContentLoaded', () => {
  const flap = document.querySelector('.flap');
  const valentines = document.querySelector('.valentines');
  
  valentines.addEventListener('click', () => {
    if (!flap.classList.contains('open')) {
      flap.classList.toggle('open');
    }
    else if (valentines.classList.contains('open')) {
      valentines.classList.remove('open');
      valentines.classList.toggle('close');
    }
    else {
      valentines.classList.remove('close');
      valentines.classList.toggle('open');
    }
  })
});
