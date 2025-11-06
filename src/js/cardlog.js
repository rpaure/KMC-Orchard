// cards logging
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.close');
  const cards = document.querySelectorAll('.card');
  let lastFocused = null;

  // Log card clicks
  cards.forEach(link => {
    link.addEventListener('click', e => {
      console.log(`Card clicked: ${link.querySelector('h3').textContent}`);
    });
  });
});
