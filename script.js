const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Changer l'icône du bouton en fonction du mode
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '';
});
