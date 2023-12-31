import { unit } from "./unit.js";





export class deck {
    constructor(unit1, unit2, unit3, unit4, unit5, unit6) {

        this.nextAttackerIndex = 0;               //0-no one
        this.units = [unit1, unit2, unit3, unit4, unit5, unit6];
    }


    returnActiveDmg() {
        return this.units[this.nextAttackerIndex - 1].unitDmg;
    }


















    changeAttacker(amount) {
        this.nextAttackerIndex = amount;

    }

    changeEnemyAttacker(amount) {
        this.nextAttackerIndex = amount;

    }


    updateTeam() {
        for (let i = 0; i < this.units.length; i++) {
            this.units[0 + i].updateInfromation(i + 1)
        }
    }

    updateEnemyTeam() {
        for (let i = 0; i < this.units.length; i++) {
            this.units[0 + i].updateEnemyinformation(i + 1)
        }
    }














}



