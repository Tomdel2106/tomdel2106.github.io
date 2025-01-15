// Sélectionner le formulaire et le paragraphe où on veut afficher le message
const form = document.getElementById('form-prenom');
const message = document.querySelector('h1'); // Adapte le sélecteur si ton élément h1 n'a pas d'ID

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer la valeur saisie dans le champ
  const prenom = document.getElementById('prenom').value;

  // Mettre à jour le message avec le prénom saisi
  message.textContent = `Bonjour, ${prenom} !`;
});
