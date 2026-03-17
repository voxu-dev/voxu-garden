document.querySelectorAll('.carousel-container').forEach(container => {
  const wrapper = container.querySelector('.carousel-wrapper');
  const items = wrapper.querySelectorAll('.carousel-item');
  const prevBtn = container.querySelector('.carousel-prev');
  const nextBtn = container.querySelector('.carousel-next');
  let current = 0;

  function showSlide(index) {
    current = index;
    wrapper.style.transform = `translateX(${-current * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    showSlide((current - 1 + items.length) % items.length);
  });

  nextBtn.addEventListener('click', () => {
    showSlide((current + 1) % items.length);
  });

  let startX = 0;
  container.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  container.addEventListener('touchend', e => {
    let diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) showSlide((current - 1 + items.length) % items.length);
    else if (diff < -50) showSlide((current + 1) % items.length);
  });
});