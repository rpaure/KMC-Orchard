// Accessible lightbox modal & cards logging
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.close');
  const galleryImgs = document.querySelectorAll('.gallery-grid img');
	
  // Open modal
  galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
      lastFocused = document.activeElement;
      modal.classList.add('show');
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalDesc.textContent = img.dataset.desc || ''; // add description text
      closeBtn.focus();
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  // Close button & ESC
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});

// Scroll animation trigger for gallery and card blocks
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});


