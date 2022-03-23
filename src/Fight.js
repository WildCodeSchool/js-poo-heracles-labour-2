class Fight {

    constructor(attacker, defender) {
        this.attacker = attacker;
        this.defender = defender;
        this.round = 1
    }

    launch() {
        let damage

        do {
            console.log(`🕛 Round #${this.round}`)

            damage = this.attacker.fight(this.defender)
            console.log(this.roundDisplay(this.attacker, this.defender, damage))

            damage = this.defender.fight(this.attacker)
            console.log(this.roundDisplay(this.defender, this.attacker, damage))

            console.log("-----")

            this.round++

        } while(this.attacker.isAlive() && this.defender.isAlive())

        console.log(`🏆 The winner is ${this.score().winner.name} 🏆`);
        console.log(`💀 The looser is ${this.score().looser.name} 💀`);
    }

    roundDisplay(fighter1, fighter2, damage) {
        return `${fighter1.name} 🗡️  ${fighter2.name} => ${damage} points of damage 💙 ${fighter2.name} : ${fighter2.life}`
    }

    score(){
        return this.attacker.isAlive() ? {
            winner: this.attacker,
            looser: this.defender,
        } : {
            winner: this.defender,
            looser: this.attacker
        }
    }
}

module.exports = Fight