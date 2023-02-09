/*
Exercice 00 dispayPersonInfo
Créer un objet personne avec des propriétés suivant : son nom Mariam 
et 30ans d'âge, et écrire une fonction qui affiche ces informations
*/
const personne = {
    nom: "Mariam",
    Age: 30
}

const affiche = function() { // la fonction qui permet l'affichage
    console.log("nom:", personne.nom);
    console.log("Age:", personne.Age);
}

affiche(); // Appelle de la fonction