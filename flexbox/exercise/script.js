const gridItems = document.querySelectorAll('.grid-item');
const modal = document.getElementById('modal');

gridItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});

modal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
