const Fighter = require("./src/Fighter.js");

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Create the opponent  */
const nemean = new Fighter("🦁 The Nemean Lion", 11, 13);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
    return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
    return fighter1.isAlive() ? {
        winner: fighter1,
        loser: fighter2,
    } : {
        winner: fighter2,
        loser: fighter1
    };
};



// Let's fight !!!
{
    let round = 0;

    while (heracles.isAlive() && nemean.isAlive()) {
        console.log(`🕛 Round #${round}`);

        heracles.fight(nemean);
        console.log(roundDisplay(heracles, nemean));

        nemean.fight(heracles);
        console.log(roundDisplay(nemean, heracles));

        round++;
    }

    const result = score(heracles, nemean);

    console.log(`💀 ${result.loser.name} is dead`);
    console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
}
