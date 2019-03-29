const {pokemon} = require('./built/pokemon.js');

let pikatchu = new Pokemon("pikatchu", 25, 25);
let ronflex = new Pokemon("ronflex", 2, 50);

describe('plusRapide', () => {
    it('should return pikatchu', ()=> {
        expect(plusRapide(pikatchu, ronflex)).toBe(pikatchu);
    });
});

describe('attaquer', () => {
    it('should return 50', ()=> {
        expect(attaquer(pikatchu, ronflex)).toBe(50);
    });

    it('should return 75', ()=> {
        expect(attaquer(pikatchu, ronflex)).toBe(75);
    });
});