function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  
  const tasks = [];
  
  function addTask() {
    const description = prompt("Enter task description:");
    const dueDate = prompt("Enter task due date:");
    const priority = prompt("Enter task priority:");
  
    const newTask = new Task(description, dueDate, priority);
    tasks.push(newTask);
    console.log("Task added successfully!");
  }
  
  function listTasks() {
    tasks.forEach((task, index) => {
      console.log(`Task ${index + 1}:`);
      console.log(`Description: ${task.description}`);
      console.log(`Due Date: ${task.dueDate}`);
      console.log(`Priority: ${task.priority}`);
      console.log(`Status: ${task.completed ? "Completed" : "Incomplete"}`);
      console.log("-------------------------");
    });
  }
  
  function listCompletedTasks() {
    const completedTasks = tasks.filter(task => task.completed);
    if (completedTasks.length === 0) {
      console.log("No completed tasks found.");
    } else {
      completedTasks.forEach((task, index) => {
        console.log(`Completed Task ${index + 1}:`);
        console.log(`Description: ${task.description}`);
        console.log(`Due Date: ${task.dueDate}`);
        console.log(`Priority: ${task.priority}`);
        console.log("-------------------------");
      });
    }
  }
  
  function markTaskAsCompleted() {
    const taskIndex = parseInt(prompt("Enter the index of the task to mark as completed:")) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks[taskIndex].completed = true;
      console.log("Task marked as completed!");
    } else {
      console.log("Invalid task index.");
    }
  }
  
  function deleteTask() {
    const taskIndex = parseInt(prompt("Enter the index of the task to delete:")) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      tasks.splice(taskIndex, 1);
      console.log("Task deleted successfully!");
    } else {
      console.log("Invalid task index.");
    }
  }
  
  function sortTasksByDueDate() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log("Tasks sorted by due date!");
  }
  
  function sortTasksByPriority() {
    tasks.sort((a, b) => a.priority - b.priority);
    console.log("Tasks sorted by priority!");
  }
  
  function clearAllTasks() {
    tasks.length = 0;
    console.log("All tasks cleared!");
  }
  
  function showMainMenu() {
    console.log("-------------------------");
    console.log("Welcome to JS TODO-APP By Batool");
    console.log("-------------------------");
    console.log("Select an action:");
    console.log("1) Add a new task");
    console.log("2) List all tasks");
    console.log("3) List completed tasks");
    console.log("4) Mark a task as completed");
    console.log("5) Delete a task");
    console.log("6) Sort tasks by due date");
    console.log("7) Sort tasks by priority");
    console.log("8) Clear all tasks");
    console.log("-------------------------");
    const choice = parseInt(prompt("What's your choice?"));
  
    switch (choice) {
      case 1:
        addTask();
        break;
      case 2:
        listTasks();
        break;
      case 3:
        listCompletedTasks();
        break;
      case 4:
        markTaskAsCompleted();
        break;
      case 5:
        deleteTask();
        break;
      case 6:
        sortTasksByDueDate();
        break;
      case 7:
        sortTasksByPriority();
        break;
      case 8:
        clearAllTasks();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
  
    showMainMenu();
  }
  
  const defaultTasks = [
    new Task("Finish project", "2023-05-22", 2),
    new Task("Buy groceries", "2023-05-24", 1),
    new Task("Call a friend", "2023-05-26", 3)
  ];
  
  tasks.push(...defaultTasks);
  
  showMainMenu();
  