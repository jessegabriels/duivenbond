const filterButtons = document.querySelectorAll('.filter-btn');
const vluchten = document.querySelectorAll('.vlucht');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Knoppen styling active maken
    filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
    filterButtons.forEach(btn => btn.classList.add('btn-secondary'));
    button.classList.add('btn-primary');
    button.classList.remove('btn-secondary');

    vluchten.forEach(vlucht => {
    if (filter === 'all' || vlucht.getAttribute('data-fond') === filter) {
        vlucht.style.display = '';
    } else {
        vlucht.style.display = 'none';
    }
    });
});
});