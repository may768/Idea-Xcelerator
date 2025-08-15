// Drag scroll
const slider = document.querySelector('.events-carousel');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => { isDown = false; slider.style.cursor = 'grab'; });
slider.addEventListener('mouseup', () => { isDown = false; slider.style.cursor = 'grab'; });
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  slider.scrollLeft = scrollLeft - (x - startX) * 2;
});

// Touch scroll
slider.addEventListener('touchstart', (e) => { isDown = true; startX = e.touches[0].pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; });
slider.addEventListener('touchend', () => isDown = false);
slider.addEventListener('touchmove', (e) => {
  if(!isDown) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  slider.scrollLeft = scrollLeft - (x - startX) * 2;
});

// Click-to-zoom modal
const eventImages = document.querySelectorAll('.event-image img');

const modal = document.createElement('div');
modal.id = 'image-modal';
const modalImg = document.createElement('img');
modal.appendChild(modalImg);
document.body.appendChild(modal);

eventImages.forEach(img => {
  img.addEventListener('click', () =>{
    modalImg.src = img.src;
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'all';
  });
});

modal.addEventListener('click', (e) => {
  if(e.target !== modalImg){
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
  }
});
