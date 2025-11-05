// script.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close');

  // open modal on click
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      modal.classList.add('show');
      modalImg.src = img.src;
      document.body.style.overflow = 'hidden';
    });
  });

  // close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  });

  // click outside or press ESC
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
});
