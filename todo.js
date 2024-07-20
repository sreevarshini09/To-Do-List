const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="removeTask(this)">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }
    function removeTask(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
    }
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });