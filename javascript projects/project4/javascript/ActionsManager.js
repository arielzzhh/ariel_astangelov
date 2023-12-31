export default class ActionManager {
    constructor() {
        this.balance = 0;
        this.actions = [];
    }






    addAction(action) {
        this.actions.push(action);
        this.calcBalance();
        const serializedAction = JSON.stringify(action);
        localStorage.setItem('action' + this.actions.length, serializedAction);
    }




    delateAction(actionId) {
        let indexToDelete = this.actions.findIndex((action) => action.id == actionId)
        localStorage.removeItem('action' + (indexToDelete + 1))

        this.actions.splice(indexToDelete, 1);
        this.calcBalance();















    }



    updateAction(actionId, newAmount) {
        let indexToUpdate = this.actions.findIndex((action) => action.id == actionId);
        this.actions[indexToUpdate].amount =

            this.actions[indexToUpdate].type == "income" ? newAmount : -newAmount;

        this.calcBalance();










    }



    calcBalance() {
        this.balance = 0;
        for (let action of this.actions) {
            this.balance += action.amount;
        }

        document.getElementById("balance").innerText = `balance: ${this.balance}`;
    }


}