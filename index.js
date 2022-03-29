const Fighter = require("./src/Fighter.js")

/** Création d'Héraclès  */
const heracles = new Fighter("🧔 Heracles", 20, 6)

/** Création de l'adversaire  */
const nemean = new Fighter("🦁 The Nemean Lion", 11, 13)

// Lancement du combat
{
    let round = 0

    do {
        console.log(`🕛 Round #${round}`)

        heracles.fight(nemean)
        console.log(roundDisplay(heracles, nemean))

        nemean.fight(heracles)
        console.log(roundDisplay(nemean, heracles))

        round++

    } while(heracles.isAlive() && nemean.isAlive())

    let result = score(heracles, nemean)

    console.log(`💀 ${result.looser.name} is dead`);
    console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
}

/**
 * Permet d'afficher le résultat de l'affrontement
 */
function roundDisplay(fighter1, fighter2) {
    return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`
}

/**
 * Permet de déterminer le winner et le looser du combat
 */
function score(fighter1, fighter2){
    return fighter1.isAlive() ? {
        winner: fighter1,
        looser: fighter2,
    } : {
        winner: fighter2,
        looser: fighter1
    }
}