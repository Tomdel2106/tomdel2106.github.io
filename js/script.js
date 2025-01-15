// Séleconst form = document.getElementById('nameForm');
const greeting = document.getElementById('greeting');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const userName = nameInput.value;

  greeting.textContent = `Bonjour, ${userName} !`;
});
