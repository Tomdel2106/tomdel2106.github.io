function ajouterItem() {
  const liste = document.getElementById('listeCourses');
  const nouvelItem = document.getElementById('nouvelItem').value;
  const quantite = document.getElementById('quantite').value;

  if (nouvelItem !== '') {
    const li = document.createElement('li');
    li.textContent = `${quantite} x ${nouvelItem}`;
    liste.appendChild(li);

    // Ajouter un bouton "Supprimer" (facultatif)
    const supprimerBtn = document.createElement('button');
    supprimerBtn.textContent = 'Supprimer';
    li.appendChild(supprimerBtn);
  }
}
