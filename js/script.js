const form = document.getElementById('nameForm');
const greeting = document.querySelector('h1'); // Select the h1 element

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const userName = nameInput.value;

  greeting.textContent = `Bonjour, ${userName} !`;
});
