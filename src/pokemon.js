"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(nom, vitesse, vie, puissance_attaque) {
        this.vie = 100;
        this.nom = nom;
        this.vitesse = vitesse;
        this.vie = vie;
        this.puissance_attaque = puissance_attaque;
    }
    Pokemon.prototype.plusRapide = function (p1, p2) {
        if (p1.vitesse > p2.vitesse)
            return p1;
        else
            return p2;
    };
    Pokemon.prototype.attaquer = function (p1, p2) {
        var tableau_pokemons = new Array(p1.nom, p2.nom);
        var premier_a_attaquer = tableau_pokemons[Math.floor(Math.random() * tableau_pokemons.length)];
        if (premier_a_attaquer === p1.nom) {
            p2.vie = p2.vie - p1.puissance_attaque;
            return p2.vie;
        }
        else {
            p1.vie = p1.vie - p2.puissance_attaque;
            return p1.vie;
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
