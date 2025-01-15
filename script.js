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
// ... (le reste de ton code JavaScript) ...

document.getElementById('search').addEventListener('input', searchItems);

function searchItems() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const shoppingListItems = document.getElementById('shoppingList').getElementsByTagName('li');

    for (let i = 0; i < shoppingListItems.length; i++) {
        const itemText = shoppingListItems[i].textContent.toLowerCase();
        if (itemText.includes(searchInput)) {
            shoppingListItems[i].style.display = 'block';
        } else {
            shoppingListItems[i].style.display = 'none';
        }
    }
}
