const dropdownLabels = document.querySelectorAll('.dropdown label');

dropdownLabels.forEach((label) => {
  label.addEventListener('click', () => {
    const cards = label.parentNode.querySelectorAll('.card');
    cards.forEach((card) => {
      card.style.display = card.style.display === 'none' ? 'block' : 'none';
    });
  });
});
