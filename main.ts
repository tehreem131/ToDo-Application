import inquirer from "inquirer";
import chalk from "chalk";

let TodoList:string [] = [];
let conditions = true;

console.log(chalk.magenta.bold("\n\t Wellcome to CodeWithHamza - Todo-List Application\n"))

let main = async () => {
    while (conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                massage: "Select an option you want to do:",
                choices: ["Add Task", "Delet Task", "Update Task", "View Todo-list", "Exit"],

            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if (option.choice === "Delet Task"){
            await deletTask()
        }
        else if(option.check === "update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo-list"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }

        
    }
}


//function to add new task to tha list 
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            massage: "Enter your new task :"
        }
    ]);
    TodoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfuly in Todo-list`);
}

// function to view all Todo-list tasks
let viewTask = () => {
    console.log("\n your Todo-List: \n");
    TodoList.forEach((task, index) => {
        console.log(`${index}: ${task}`)
    })
}

// function to delet a task from tha list 
let deletTask = async () => {
     await viewTask()
     let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            massage: "Enter tha `index n0.` of tha task you want to delete :",
        }
     ]);
     let deletedTask = TodoList.splice(taskIndex.index, 1);
     console.log(`\n${deletedTask} this task has been deleted successfuly from your Todo-list`);
}


// function to update a task
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            massage: "Enter tha index of tha task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            massage: "Now Enter new task name :",
        }
    ]);
    TodoList[update_task_index.index] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index} updated successfully [for updated list check option: "view TodoList"]`)
}

main();