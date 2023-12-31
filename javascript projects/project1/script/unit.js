export class unit {
    constructor(_name, _hp, _dmg, _icon, elment) {
        this.name = _name;
        this.hp = _hp;
        this.dmg = _dmg;
        this.icon = _icon;
        this.isAlive = true;
        this.elment = elment;
    }

    losehp(amount) {
        this.hp -= amount;

        if (this.hp <= 0) {
            this.isAlive = false;

        }
    }


    get unitDmg() {
        return this.dmg;

    }


    returnElment() {


    }


    updateInfromation(slot) {
        document.getElementById('name' + slot).textContent = this.name;
        document.getElementById('hp' + slot).textContent = 'hp : ' + this.hp;
        document.getElementById('dmg' + slot).textContent = 'dmg :' + this.dmg;
        document.getElementById('image' + slot).setAttribute('xlink:href', 'images/pirate/icon' + this.icon + '.png')
    }

    updateEnemyinformation(slot) {


        document.getElementById('enemyname' + slot).textContent = this.name;
        document.getElementById('enemyhp' + slot).textContent = 'hp : ' + this.hp;
        document.getElementById('enemydmg' + slot).textContent = 'dmg :' + this.dmg;
        document.getElementById('enemyimage' + slot).setAttribute('xlink:href', 'images/pirate/icon' + this.icon + '.png')



    }



}



let ariel = new unit("ariel", 5, 1, 1);
let dave = new unit("dave", 5, 1, 2);
let pkak = new unit("ariel", 5, 1, 3);
let shapino = new unit("shapino", 5, 1, 4);
let lapoim = new unit("lapoim", 5, 1, 5);
let tapiro = new unit("tapiro", 5, 1, 6);





ariel.updateEnemyinformation(3);



