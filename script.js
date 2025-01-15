function addItem() {
  const item = document.getElementById('item').value;
  const category = document.getElementById('category').value;
  const quantity = document.getElementById('quantity').value;
  const shoppingList = document.getElementById('shoppingList');

  if (item && category) {
    const li = document.createElement('li');
    li.textContent = `${quantity} ${item} (${category})`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.onclick = () => {
      shoppingList.removeChild(li);
    };
    li.appendChild(deleteButton);
    shoppingList.appendChild(li);

    // Réinitialiser les champs
    document.getElementById('item').value = '';
    document.getElementById('quantity').value = '';
  } else {
    alert('Veuillez remplir les champs "Élément" et "Catégorie".');
  }
}
