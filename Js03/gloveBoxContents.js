/*
Accédez à l'objet myStorage et affectez le contenu de la propriété glove
box à la variable gloveBoxContents. Utilisez la notation par points pour 
toutes les propriétés lorsque cela est possible, sinon utilisez la notation 
par crochets. Tout ceci dans une fonction gloveBoxContents().
const myStorage = {
 car: {
 inside: {
 'glove box': 'maps',
 'passenger seat': 'crumbs',
 },
 outside: {
 trunk: 'jack',
 },
 },
};
const gloveBoxContents = undefined // A modifier
 */

const myStorage = {
    car: {
        inside: {
            'glove box': 'maps',
            'passenger seat': 'crumbs',
        },
        outside: {
            trunk: 'jack',
        },
    },
};
const gloveBoxContents = function() {
    console.log(myStorage.car.inside["glove box"]);
}

gloveBoxContents();