export class Pokemon {
    nom: string;
    vitesse: number;
    vie: number = 100;
    puissance_attaque: number;
    constructor(nom: string, vitesse: number, vie: number,  puissance_attaque: number) {
        this.nom = nom;
        this.vitesse = vitesse;
        this.vie = vie;
        this.puissance_attaque = puissance_attaque;
    }

   plusRapide(p1: Pokemon, p2: Pokemon) {  
        if(p1.vitesse > p2.vitesse) return p1;
        else return p2;
    }

    attaquer(p1: Pokemon, p2: Pokemon) {
    let tableau_pokemons = new Array(p1.nom, p2.nom); 
    let premier_a_attaquer = tableau_pokemons[Math.floor(Math.random() * tableau_pokemons.length)];

        if(premier_a_attaquer === p1.nom) 
        {
            p2.vie = p2.vie - p1.puissance_attaque;
            return p2.vie;
        }
        else 
        {
            p1.vie = p1.vie - p2.puissance_attaque;
            return p1.vie;
        }
    }
}