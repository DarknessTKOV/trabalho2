const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => {
    item.classList.remove('on');
    const video = item.querySelector('video');
    if (video) {
      video.pause();
    }
  });
}

function showSlider() {
    slider[currentSlide].classList.add('on');
    const video = slider[currentSlide].querySelector('video');
    if (video) {
        video.currentTime = 0;
        video.play().catch(e => console.log("Erro ao reproduzir vídeo:", e));
    }
}

function nextSlider() {
  hideSlider();
  if(currentSlide === slider.length -1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if(currentSlide === 0) {
    currentSlide = slider.length -1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    nextSlider();
  } else if (e.key === 'ArrowLeft') {
    prevSlider();
  }
});

let autoplayInterval;
const tempoMudanca = 8000; 

function iniciarAutoplay() {
    autoplayInterval = setInterval(nextSlider, tempoMudanca);
}

function pararAutoplay() {
    clearInterval(autoplayInterval);
}


iniciarAutoplay();
document.querySelector('.container-images').addEventListener('mouseenter', pararAutoplay);
document.querySelector('.container-images').addEventListener('mouseleave', iniciarAutoplay);