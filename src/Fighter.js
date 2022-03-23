const MAX_LIFE = 100

class Fighter {

    constructor(name, strength, dexterity, weapon = null, shield = null) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.weapon = weapon;
        this.shield = shield;
        this.life = MAX_LIFE;
    }


    /**
     * Lance un combat
     *
     * @param Fighter defender
     */
    fight(defender) {
        let attackPoints = this.getRandomInt(this.getDamage())
        let damages = Math.max(attackPoints - defender.getDefense(), 0)

        defender.life = Math.max(defender.life - damages, 0)

        return damages
    }


    /**
     * Associe une arme au combattant
     *
     * @param Weapon weapon
     */
    setWeapon(weapon) {
        this.weapon = weapon
    }


    /**
     * Associe une bouclier au combattant
     *
     * @param Shield shield
     */
     setShield(shield) {
        this.shield = shield
    }


    /**
     * Génère une valeur aléatoire entre 1 et max
     *
     * @param Number max
     * @returns Number
     */
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    /**
     * Permet de déterminer si un combattant est encore en vie
     *
     * @returns Boolean
     */
    isAlive() {
        return this.life > 0
    }


    /**
     * Permet de récupérer le niveau d'attaque combiné entre la strength
     * et les dégâts de weapon
     *
     * @returns Number
     */
    getDamage() {
        let power = this.strength

        if (this.weapon !== null) {
            power += this.weapon.damage
        }

        return power
    }


    /**
     * Permet de récupérer le niveau de protection combiné entre la dextérité
     * et la protection du shield
     *
     * @returns Number
     */
     getDefense(){
        let defense = this.dexterity

        if (this.shield !== null) {
            defense += this.shield.protection
        }

        return defense
    }
}

module.exports = Fighter