// const Fighter = require("./src/Fighter.mjs");
// const Weapon = require("./src/Weapon.mjs");

import {Fighter} from "./src/Fighter.mjs";
import {Weapon} from "./src/Weapon.mjs";
import {Shield} from "./src/Shield.mjs";

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);
const sword = new Weapon ("sword", 10)
heracles.weapon = sword.damage

const shield = new Shield ("shield", 1)
heracles.shield = shield.protect

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

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


for(let i = 1; heracles.life > 0 && boar.life > 0; i++) {

  heracles.fight(boar)
  boar.fight(heracles)
  console.log (roundDisplay(heracles, boar))
  console.log( score(heracles, boar))
}