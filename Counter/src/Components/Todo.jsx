// import React, { useState } from "react";

// function Todo() {
//   const [task, setTask] = useState(""); // Store new task input
//   const [tasks, setTasks] = useState([]); // Store list of tasks

//   // Function to add task
//   const addTask = () => {
//     if (task.trim() === "") return; // Prevent empty tasks
//     setTasks([...tasks, task]); // Add task to list
//     setTask(""); // Clear input field
//   };

//   return (
//     <div >
//       <h2>📝 Simple To-Do List</h2>

//       <input
//         type="text"
//         placeholder="Enter task..."
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button 
//         onClick={addTask} 
//       >
//         Add Task
//       </button>

//       <ul>
//         {tasks.map((t, index) => (
//           <li key={index} >
//             ✅{t}
//           </li>
//         ))}
//       </ul>


//     </div>
//   );
// }

// export default Todo;













import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        setTodos([...todos, todo])
        setTodo("")

    }
    return (
        <div>
            <h2>Simple todo</h2>
            <input type="text"
                name="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button onClick={addTodo}>Add todo</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                         ✅{todo}
                    </li>

                ))}
            </ul>


        </div>


    )
}

export default Todo










