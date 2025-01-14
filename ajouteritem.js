function ajouterItem() {
  const liste = document.getElementById('listeCourses');
  const nouvelItem = document.getElementById('nouvelItem').value;
  const quantite = document.getElementById('quantite').value;

  if (nouvelItem !== '') {
    const li = document.createElement('li');
    li.textContent = `${quantite} x ${nouvelItem}`;
    liste.appendChild(li);
  }
}

function toggleTheme() {
  const themeSwitcher = document.getElementById('theme-switcher');
  const body = document.body;

  themeSwitcher.classList.toggle('dark-mode');

  if (themeSwitcher.classList.contains('dark-mode')) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}
function ajouterItem() {
  const liste = document.getElementById('listeCourses');
  const nouvelItem = document.getElementById('nouvelItem').value;
  const quantite = document.getElementById('quantite').value;

  if (nouvelItem !== '') {
    const li = document.createElement('li');
    li.textContent = `${quantite} x ${nouvelItem}`;

    // Bouton supprimer
    const supprimerBtn = document.createElement('button');
    supprimerBtn.textContent = 'Supprimer';
    supprimerBtn.onclick = function() {
      liste.removeChild(li);
    };
    li.appendChild(supprimerBtn);

    liste.appendChild(li);
  }
}
