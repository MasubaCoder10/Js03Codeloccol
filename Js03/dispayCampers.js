/*
Exercice 03: displayCampers
Ecrire une function qui affichera "Codeloccol Campers" dans la console 
en vous servant de l'objet de l'exercice precedant.
 */
import {
    codeloccol,

} from './changeProperty.js'; // cette function permet d'importer l'objet codeloccol qui est dans le fichier changeProperty.js


const affiche = function() {
    console.log(`'${codeloccol.friends}'`);
}
affiche();