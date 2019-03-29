var Pokemon = /** @class */ (function () {
    function Pokemon(nom) {
        this.nom = nom;
    }
    Pokemon.prototype.saluer_pokemon = function () {
        return "Hello, " + this.nom;
    };
    return Pokemon;
}());
