document.addEventListener("DOMContentLoaded", () => {
    // const jsonData = [
    //     {
    //         "id": 1,
    //         "status": "To Do",
    //         "assignee": "John Doe",
    //         "reporter": "Jane Smith",
    //         "importance": "High",
    //         "task_id": "19823123"
    //     },
    //     { 
    //         "id": 2,
    //         "status": "Completed",
    //         "assignee": "Alice Johnson",
    //         "reporter": "Bob Brown",
    //         "importance": "Medium",
    //         "task_id": "19823191"
    //     },
    //     {
    //         "id": 3,
    //         "status": "In Progress",
    //         "assignee": "Brian Griffin",
    //         "reporter": "Peter Griffin",
    //         "importance": "Very urgent",
    //         "task_id": "19823190"
    //     }
    // ];

    // // task details
    // const task = jsonData[0];
    // document.getElementById("status").innerText = task.status;
    // document.getElementById("assignee").innerText = task.assignee;
    // document.getElementById("reporter").innerText = task.reporter;
    // document.getElementById("importance").innerText = task.importance;
    // document.getElementById("task_id").innerText = task.task_id;


    // Tab switching 
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(tab.dataset.view).classList.add("active");
        });
    });

    // Add subtask
    document.getElementById("add-subtask").addEventListener("click", () => {
        const subtaskList = document.getElementById("subtask-list");

        
        const newSubtaskDiv = document.createElement("div");
        newSubtaskDiv.classList.add("new-subtask");

        newSubtaskDiv.innerHTML = `
            <input type="text" class="subtask-input" placeholder="Enter your subtask here...">
            <button class="save-btn">Save</button>
        `;
        
        subtaskList.appendChild(newSubtaskDiv);

        // Save button functionality
        const saveBtn = newSubtaskDiv.querySelector(".save-btn");
        saveBtn.addEventListener("click", () => {
            const subtaskInput = newSubtaskDiv.querySelector(".subtask-input");
            const subtaskText = subtaskInput.value.trim();

            if (subtaskText) {
                // new list item
                const li = document.createElement("li");
                li.classList.add("subtask");
                li.innerHTML = `
                    <button class="delete-btn"><img class="delete" src="assets/icon-delete.svg" alt="Delete"></button>
                    <span>${subtaskText}</span>
                `;
                subtaskList.appendChild(li);

                // delete
                const deleteBtn = li.querySelector(".delete-btn");
                deleteBtn.addEventListener("click", () => {
                    li.remove();
                });

                // remove the input field and save button after saving
                newSubtaskDiv.remove();
            } else {
                alert("Please enter a valid subtask.");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    fetch("https://gist.githubusercontent.com/suhejbmorina99/1a10af1bba3e38435350fc73e55cfff0/raw/imbus-board.json")
        .then(response => response.json())
        .then(data => {
            // Assuming you want to display the first task
            const task = data[0]; 

            // Update the HTML elements with JSON values
            document.getElementById("status").innerText = task.status;
            document.getElementById("assignee").innerText = task.assignee;
            document.getElementById("reporter").innerText = task.reporter;
            document.getElementById("importance").innerText = task.importance;
            document.getElementById("task_id").innerText = task.task_id;
        })
        .catch(error => console.error("Error fetching data:", error));
});