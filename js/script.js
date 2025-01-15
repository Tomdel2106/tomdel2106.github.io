// Afficher un message dans la console du navigateur
console.log("Hello, world!");

// Changer la couleur d'un élément quand on passe la souris dessus
let bouton = document.getElementById("monBouton");
bouton.addEventListener("mouseover", function() {
  bouton.style.backgroundColor = "blue";
});
