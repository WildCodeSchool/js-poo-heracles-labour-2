const Fighter = require("./src/Fighter.js");

/** Création d'Héraclès  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Création de l'adversaire  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/**
 * Permet d'afficher le résultat de l'affrontement
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Permet de déterminer le winner et le looser du combat
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    looser: fighter2,
  } : {
    winner: fighter2,
    looser: fighter1
  };
};
