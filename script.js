// Get the input and button elements
const taskInput = document.querySelector('#newtask input');
const addButton = document.querySelector('#push');
const tasksContainer = document.querySelector('#tasks');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText.length === 0) {
        alert("Please enter a new task.");
    } else {
        tasksContainer.innerHTML += `
        <div class="tasks">
            <span id="taskname">
                ${taskText}
            </span>
            <button class="delete">
                 <box-icon type='solid' name='trash-alt'></box-icon>
            </button>
        </div>
        `;
        taskInput.value = ""; // Clear input field
    }
}

// Add event listener for the "Add" button click
addButton.addEventListener('click', addTask);

// Add event listener for the "Enter" key press on the input field
taskInput.addEventListener('keydown', (e) => {
    // Check if the key pressed is "Enter"
    if (e.key === 'Enter') {
        addTask();
    }
});

// Event delegation for the delete button and task completion
tasksContainer.addEventListener('click', (e) => {
    // Check if the clicked element is the delete button or its child icon
    if (e.target.closest('.delete')) {
        const taskElement = e.target.closest('.tasks');
        if (taskElement) {
            taskElement.remove();
        }
    } else {
        // Toggle the 'completed' class on the clicked task
        const taskElement = e.target.closest('.tasks');
        if (taskElement) {
            taskElement.classList.toggle('completed');
        }
    }
});
taskInput.value = ""; // Clear input field