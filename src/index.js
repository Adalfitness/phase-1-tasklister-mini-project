
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // 

    
    const taskDescription = document.getElementById("new-task-description").value;

    
    if (taskDescription.trim() === "") {
      alert("Please enter a task description.");
      return; 
    }

    
    const listItem = document.createElement("li");
    listItem.textContent = taskDescription;

  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px"; 

    
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem); 
    });

    
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    
    form.reset();
  });
});