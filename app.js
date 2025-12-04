#!/usr/bin/env node

import fs from "fs"

const [, , command,...args] = process.argv

if(!fs.existsSync("tasks.json")){
    fs.writeFileSync("tasks.json", "[]")
}
// console.log(args)

const readFile = () => {
    const rawData = fs.readFileSync("tasks.json", "utf8")
    return JSON.parse(rawData)

}

const saveFile = (tasks) => {
    fs.writeFileSync("tasks.json", JSON.stringify(tasks,null,4))
}

const listFunction = () => {
    const tasks = readFile()
    const status = args[0]
    
    const filteredTasks = tasks.filter(task => !status || task.status === status )
        
        if(filteredTasks.length === 0){
            console.log("No tasks with that status was found!")
            return
        }

        filteredTasks.forEach(task => {
            console.log(
                `Description: ${task.description}  | Status: ${task.status} | ID: ${task.id}`
            )
        })
    return
}
    
const updateFunction = () => {
    const tasks = readFile()

    const task = tasks.find(task => task.id === parseInt(args[0]))

    if(!task){
        console.log("The Task ID you provided is not available!");
        return;
    }

    task.description = args.join(" ")
    task.updatedAt = new Date().toISOString()

    saveFile(tasks)
}

const deleteFunction = () => {
    const tasks = readFile()

    const taskIndex = tasks.findIndex(task => task.id === parseInt(args[0]))

    if(taskIndex === -1){
        console.log("Task not found with that ID")
        return;
    }
    tasks.splice(taskIndex,1)

    saveFile(tasks)
}

const markDoneFunction = () => {
    const tasks = readFile()

    const task = tasks.find(task => task.id === parseInt(args[0]))

    if(!task){
        console.log("The Task ID you provided is not available!");
        return;
    }

    task.status = "done"
    task.updatedAt = new Date().toISOString()

    saveFile(tasks)
} 

const markInProgressFunction = () => {
    const tasks = readFile()

    const task = tasks.find(task => task.id === parseInt(args[0]))

    if(!task){
        console.log("The Task ID you provided is not available!");
        return;
    }

    task.status = "in-progress"
    task.updatedAt = new Date().toISOString()

    saveFile(tasks)
} 

const addFunction = () => {
    const tasks = readFile()

    const id = tasks.length + 1

    const newTask = {
        id,
        description: args.join(" "),
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    tasks.push(newTask)

    saveFile(tasks)

    console.log(`Task added successfully (ID: ${id})`)
}

if(command === "list"){
    listFunction()
}else if(command === "add"){
    addFunction()
}else if(command === "update"){
    updateFunction();
}else if(command === "delete"){
    deleteFunction();
}else if(command === "mark-in-progress"){
    markInProgressFunction()
}else if(command === "mark-done"){
    markDoneFunction()
}else{
    console.log("Wrong Command: ", command)
}



