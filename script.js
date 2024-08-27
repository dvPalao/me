const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')
const home = document.querySelector('.home');

document.addEventListener('scroll', function() {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})


window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
  });

  window.location.href = window.location.href + '#';

  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });
  
  document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      e.preventDefault();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.keyCode == 83) {
      e.preventDefault();
    }
  });

  const parallax = document.querySelector('.parallax');
const images = parallax.querySelectorAll('img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  images.forEach((image, index) => {
    const speed = 0.5 + (index * 0.1);
    const offset = scrollPosition * speed;
    image.style.transform = `translateY(${offset}px) scale(${1 + (offset / 100)})`;
  });
});

const audio = new Audio('audio/ 100-grandkids-sample.wav');
audio.play();

