// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.

// script.js
// Section 2: App State Variables
let tasks = [];
// script.js
// Section 3: Cached Element References
const taskForm = null;
const taskTable = null;
// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    const
taskName = document.getElementById('taskName').value

    
    alert('Task name and deadline are required!')

    tasks.push({ name:
        taskName, description: taskDescription, deadline: taskDeadline })
    render();
}
// Function to render tasks in the table
function render() {
    taskTable.innerHTML = tasks.map(task => `
    <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
    </tr>
`).join('');
}
// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}
// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);
// Call the init function to set up the initial state of the app
init();