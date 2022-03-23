const Fighter = require("./src/Fighter.js")
const Weapon = require("./src/Weapon.js")
const Shield = require("./src/Shield.js")
const Fight = require("./src/Fight.js")

/** Création d'Héraclès  */
const heracles = new Fighter("🧔 Heracles", 20, 6)

const sword = new Weapon("Sword", "/images/sword.svg", 20)
heracles.setWeapon(sword)

const shield = new Shield("Shield", "/images/shield.svg", 10)
heracles.setShield(shield)


/** Création de l'adversaire  */
const lion = new Fighter("🦁 The Nemean Lion", 11, 13)

/** Lancement du combat */
const fight = new Fight(heracles, lion)
fight.launch()