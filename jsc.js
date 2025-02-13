let ct = 0;

document.addEventListener('DOMContentLoaded', () => {
  const flap = document.querySelector('.flap');
  const valentines = document.querySelector('.valentines');
  const shadow = document.getElementById('shadowid')
  const nextbutton = document.getElementById('nextbutton');
  const backbutton = document.getElementById('backbutton');
  const p1 = document.getElementById('p1');
  
  valentines.addEventListener('click', () => {
    if (!flap.classList.contains('open')) {
      flap.classList.toggle('open');
    }
    else if (!valentines.classList.contains('open')) {
      valentines.classList.toggle('open');
      shadow.style.animationPlayState = 'paused';
    }
  })

  nextbutton.onclick = function() {
    if (ct <= 22) ct = ct + 1;
    p1.style.backgroundImage = `url("img/p${ct + 1}.png")`;
  }

  backbutton.onclick = function() {
    if (ct > 0) {
      ct--;
      p1.style.backgroundImage = `url("img/p${ct + 1}.png")`;
    }
  }
});
