# Labours of Heracles #2: the boar of Erymanthe

Prerequisite: clone this _repository_.

## State of the project

Heracles must now defeat the Erymanthian boar 🐗 a huge beast that terrifies the inhabitants of Mount Erymanthus in Arcadia.

## Your turn to play: A little bit of equipment to attack

The boar's strength and dexterity are far superior to yours, it's impossible to beat it in these conditions, your fists won't be enough! You will have to equip yourself accordingly!

First of all, you'll have to add a sword.

1. Create a new class `Weapon` in the *src/* folder.
2. This one will correspond to the weapon you will equip the fighters with. It must have a name and a `damage` property initialized to 10 and an image property using 'sword.svg'.
3. To add the weapon to the character, in the `Fighter` class, we create a `weapon` property. This will be initialized to `null`.
4. Create a `setWeapon()` method to assign this weapon to the fighter. This is called a *setter* in OOP. It will look like this:
   ```javascript
   setWeapon(weapon) {
	 this.weapon = weapon
   }
   ```
5. In the *index.js* file, instantiate an object of type `Weapon` with the name "Sword", a damage of 10 and the image "sword.svg" which is located in the images folder. Then associate it with Heracles via the `setWeapon()` method.
6. At the moment, the sword has been assigned but it doesn't give you any advantage. Back in the `Fighter` class, we'll modify the behavior of the `fight()` method a bit.
First, create a `getDamage()` method. This should return the strength (*strength*) of the Fighter, to which you will add the damage from the weapon (if it carries one).
7. In the `fight()` method, use this `getDamage()` method to determine the damage inflicted by the fighter. Thus the damage inflicted (via `rand()`) will be between 1 and `getDamage()` (the strength + the weapon damage) and not just the strength.

> All this calculation could be done directly in `fight()`, but using the `getDamage()` method simplifies the `fight()` method and moves the damage calculation logic elsewhere. Furthermore, it is now possible to use `getDamage()` independently of `fight()`, which will be useful later.


## And the defense in all this?

You will do almost the same thing to manage this time a shield. The steps are voluntarily given here in outline.

1. Create a `Shield` class with a `protection` property set to 10, and an image property using 'shield.svg'.
2. In `Fighter`, add a `shield` property with its associated *setter*. Then create a `getDefense()` method, adding dexterity and shield protection (if the hero is wearing one). This method will also be used in `fight()` (instead of the simple call to `defender.dexterity`) so that the shield can play its protective role.
3. As for the weapon, remember to instantiate a shield and associate it to Heracles with the setter.


## Ready to fight.

Refresh the page, you now do a lot more damage and you are better protected, you should win the fight without too much difficulty!
