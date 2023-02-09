/*
Exercice 01: displayBookInfo
Créer un objet book représentant le livre L'Enfant Noir de Camara Laye 
publié en 1953, et écrire une fonction qui affiche ces informations
*/
const book = { // obet book et ses proprietes
    Titre: "L'Enfant Noir",
    Auteur: "Camara Laye",
    annee: 1953
}

const affiche = function() { // la fonction qui permet l'affichage
    console.log("Titre:", book.Titre);
    console.log("Auteur:", book.Auteur);
    console.log("année:", book.annee);
}

affiche(); // Appelle de la fonction