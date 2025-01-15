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
        const itemElement = shoppingListItems[i];

        // Supprimer toute classe "highlight" existante
        itemElement.classList.remove('highlight');

        if (itemText.includes(searchInput)) {
            const index = itemText.indexOf(searchInput);
            const textNode = itemElement.childNodes[0];
            const splitText = textNode.splitText(index);
            const highlightSpan = document.createElement('span');
            highlightSpan.className = 'highlight';
            highlightSpan.appendChild(splitText);
            itemElement.insertBefore(highlightSpan, splitText.nextSibling);
            itemElement.style.display = 'block';
        } else {
            itemElement.style.display = 'none';
        }
    }
}
