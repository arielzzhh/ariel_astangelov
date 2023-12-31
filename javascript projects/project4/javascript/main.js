import Action from "./Action.js"
import ActionManager from "./ActionsManager.js";
let amountOfItems = localStorage.length;
let nextAction;




window.onload = function () {


    for (let i = 1; i <= amountOfItems; i++) {
        nextAction = JSON.parse(localStorage.getItem('action' + i))
        console.log(nextAction)
        manager.addAction(nextAction)
        showActionsInTable()

    }




}








window.addActionToManager = function () {




    let type = document.getElementById("type").value
    let description = document.getElementById("description").value
    let amount = +document.getElementById("amount").value



    let action = new Action(type, description, amount);


    manager.addAction(action);
    showActionsInTable();


    document.getElementById("description").value = ""
    document.getElementById("amount").value = ""



}


window.deleteActionFromManager = function (actionId) {

    if (confirm("Are you sure?")) {

        manager.delateAction(actionId);

        showActionsInTable();

    }

};


window.updateActionInManager = function (actionId) {
    let newAmount = prompt("please enter the changed value")
    if (newAmount == null || newAmount == "") alert("somthing went wrong ")
    else {
        manager.updateAction(actionId, +newAmount);
        showActionsInTable();

    }

}










function showActionsInTable() {

    document.getElementById("actions").innerHTML = "";

    for (let action of manager.actions) {

        document.getElementById("actions").innerHTML += `<tr class=${action.type == "income" ? "text-success" : "text-danger"}> <td>

        ${action.description} </td> <td>

        ${action.amount} </td>


        <td> <a onclick="updateActionInManager(${action.id})">
        <i class="fa-regular fa-pen-to-square"></i> </a> </td>

        <td> <a onclick="deleteActionFromManager(${action.id})">
        <i class="fa-solid fa-trash"></i> </a> </td>

        </tr>`;

    }

}








let manager = new ActionManager();


