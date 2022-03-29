const MAX_LIFE = 100

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }


    // Lance un combat
    fight(defender) {
        let attackPoints = this.getRandomInt(this.strength)

        let damages = Math.max(attackPoints - defender.dexterity, 0)

        defender.life = Math.max(defender.life - damages, 0)
    }


    // Génère une valeur aléatoire entre 1 et max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Permet de déterminer si un combattant est encore en vie
    isAlive() {
        return this.life > 0
    }
}

module.exports = Fighter