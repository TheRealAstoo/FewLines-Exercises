const readline = require("readline");
​
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
​
const tasks = [
  {
    taskName: "Lessive",
    done: true
  },
  {
    taskName: "Cuisine",
    done: false
  },
];
​
const askForTask = () => {
  reader.question("Ajouter une tâche\n> ", (taskName) => {
    const task = {
      taskName,
      done: false
    };
​
    tasks.push(task);
    menu();
  })
}
​
const presentTask = (task, i) => {
  console.log(`${i + 1} - ${task.done ? "[X]" : "[ ]"} ${task.taskName}`);
}
​
function presentTasks() {
  tasks.forEach(presentTask);
  menu();
}
​
function menu() {
  console.log("1 - show tasks");
  console.log("2 - add a task");
  console.log("3 - quit");
  reader.question("Choose an action\> ", (choice) => {  
    switch (choice) {
      case "1":
        presentTasks();
        break;
      case "2":
        askForTask();
        break;
      case "3":
        console.log("Bye!");
        reader.close();
        break;
      default:
        console.log("command unknown");
        menu();
    }
  })  
}
​
menu();