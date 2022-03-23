const Fighter = require("./src/Fighter.js")
const Fight = require("./src/Fight.js")

/** Création d'Héraclès  */
const heracles = new Fighter("🧔 Heracles", 20, 6)

/** Création de l'adversaire  */
const lion = new Fighter("🦁 The Nemean Lion", 11, 13)

/** Lancement du combat */
const fight = new Fight(heracles, lion)
fight.launch()