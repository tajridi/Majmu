const searchInput = document.getElementById('searchInput');
const kitabContainer = document.getElementById('kitabContainer');
const kitabCards = Array.from(kitabContainer.getElementsByClassName('kitab-card'));

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    kitabCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        if(name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
