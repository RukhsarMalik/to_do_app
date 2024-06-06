#! /usr/bin/env node

import inquirer from "inquirer"
let todos = [];
let condition = true;

while(condition)
{
    let todo = await inquirer.prompt
    (
        {
            name: "firstQ",
            type: "list",
            message: "What you want to do",
            choices: ["Add task", "Delete task", "Check your todo list", "Exit"]
        }
    
    )
    if (todo.firstQ === "Add task")
        {
            let todoQ = await inquirer.prompt
            (
                {
                    name: "task1",
                    type: "input",
                    message: "What you want to add in your todos?"
        
                }
            )
            todos.push(todoQ.task1)
        }
    else if(todo.firstQ === "Delete task")
        {
            let todoD = await inquirer.prompt
            (
                {
                    name: "delet",
                    type: "list",
                    choices : todos,
                    message: "Select what you want to delet from your todos."
        
                }
            )
            let i = todos.indexOf(todoD.delet)
            todos.splice(i,1)

        }


    else if (todo.firstQ === "Check your todo list"){
        console.log(todos)
    }
    else if (todo.firstQ === "Exit"){
        console.log("Here is Your Final To do List.....!")
        for(todo of todos){
            console.log(todo)
        }
    
        condition = false
    }





}