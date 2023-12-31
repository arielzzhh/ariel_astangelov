import { Mat } from "./Mat.js";
import { deck } from "./deck.js";
import { unit } from "./unit.js";

let ariel = new unit("ariel", 5, 2, 1, 1);
let dave = new unit("dave", 5, 2, 2, 1);
let pkak = new unit("ariel", 5, 3, 3, 1);
let shapino = new unit("shapino", 5, 1, 4, 1);
let lapoim = new unit("lapoim", 5, 4, 5, 1);
let tapiro = new unit("tapiro", 5, 7, 6, 1);
let tibo = new unit("tibo", 5, 2, 1, 1);
let tamin = new unit("tamin", 5, 2, 2, 1);
let cassio = new unit("cassio", 5, 3, 3, 1);
let tapir = new unit("tapir", 5, 1, 4, 1);
let tamana = new unit("tamana", 5, 4, 5, 1);
let shevrulet = new unit("shevrulet", 5, 7, 6, 1);








let userDeck = new deck(ariel, dave, pkak, shapino, lapoim, tapiro);
let enemyDeck = new deck(tibo, tamin, cassio, tapir, tamana, shevrulet);

userDeck.updateTeam();
enemyDeck.updateEnemyTeam();

class battleField {
    static pickAttacker(whichSlot) {

        if (userDeck.units[whichSlot - 1].isAlive) {
            userDeck.changeAttacker(whichSlot);

            for (let i = 1; i < 7; i++) {
                document.getElementById('chosen-label' + i).style.visibility = 'hidden'
                document.getElementById('status').textContent = ' '
                document.getElementById('choseHero').style.visibility = 'visible'
            }
            document.getElementById('chosen-label' + whichSlot).style.visibility = 'visible'


        }
    }





    static enemyPickAttacker() {
        enemyDeck.nextAttackerIndex = Mat.returnNumber(6);
        if (enemyDeck.units[enemyDeck.nextAttackerIndex - 1].isAlive) {
            document.getElementById('enemy-chosen-label' + enemyDeck.nextAttackerIndex).style.visibility = 'visible'
        }

        else {
            battleField.enemyPickAttacker();
        }




    }



    static chooseAttackers() {
        document.getElementById('youTeam').style.visibility = 'hidden'


    }

    static completeTurn() {



        userDeck.units[userDeck.nextAttackerIndex - 1].losehp(enemyDeck.units[enemyDeck.nextAttackerIndex - 1].dmg);
        enemyDeck.units[enemyDeck.nextAttackerIndex - 1].losehp(userDeck.units[userDeck.nextAttackerIndex - 1].dmg);





        if (userDeck.units[userDeck.nextAttackerIndex - 1].isAlive == false) {
            document.getElementById('dead-Label' + userDeck.nextAttackerIndex).style.visibility = 'visible'
        }

        if (enemyDeck.units[enemyDeck.nextAttackerIndex - 1].isAlive == false) {
            document.getElementById('enemy-Dead-label' + (enemyDeck.nextAttackerIndex)).style.visibility = 'visible'
        }





        console.log()







        //clear 

        enemyDeck.nextAttackerIndex = 0;
        userDeck.nextAttackerIndex = 0;
        document.getElementById('completeround').style.visibility = 'hidden'
        document.getElementById('status').textContent = 'choose one of your card (above)'



        for (let i = 1; i < 7; i++) {
            document.getElementById('chosen-label' + i).style.visibility = 'hidden'
            document.getElementById('enemy-chosen-label' + i).style.visibility = 'hidden'
        }






        //update

        userDeck.updateTeam();
        enemyDeck.updateEnemyTeam();







    }

}

for (let i = 1; i < 7; i++) {
    document.getElementById('yourCard' + i).addEventListener('click', function () { battleField.pickAttacker(i) });
}



document.getElementById('choseHero').addEventListener('click', function () {

    battleField.enemyPickAttacker();
    document.getElementById('choseHero').style.visibility = 'hidden'
    document.getElementById('completeround').style.visibility = 'visible'

})




document.getElementById('completeround').addEventListener('click', () => {


    battleField.completeTurn();





})













