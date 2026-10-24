import './App.css';
import { useState } from 'react';
function App(){
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');


  function handleAddTask(){
    if(taskName.trim()===''){
      return;
    }
    setTasks((prevTasks) => [
    ...prevTasks,
  {
    id: Date.now(),
    text: taskName,
    completed: false
  }
]);
  }


function handleToggleTask(id) {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}


function handleDeleteTask(id) {
  setTasks((prevTasks) =>
    prevTasks.filter((task) => task.id !== id)
  // filter means It means: keep all tasks whose IDs do not match the ID we want to delete
  );
}

// ust tell what is filter that re are checking completed or nit
// filter is the state variable that stores which filter the user selected:
const filteredTasks = tasks.filter((task) => {
  if (filter === 'pending') {
    return !task.completed;
  }

  if (filter === 'completed') {
    return task.completed;
  }

  return true;
});

const completedCount = tasks.filter(
  (task) => task.completed
).length;

const pendingCount = tasks.filter(
  (task) => !task.completed
).length;

  
  return(
    <div>
    <h1>My Task Manager</h1>
    <p>Organize Your Day</p>
    <div>
      <input type="text" 
      placeholder="Enter a new Task.."
      value={taskName}
      onChange={(event)=>setTaskName(event.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>

    

<div className="filters">
  <button
    className={filter === 'all' ? 'active' : ''}
    onClick={() => setFilter('all')}
  >
    All
  </button>

  <button
    className={filter === 'pending' ? 'active' : ''}
    onClick={() => setFilter('pending')}
  >
    Pending
  </button>

  <button
    className={filter === 'completed' ? 'active' : ''}
    onClick={() => setFilter('completed')}
  >
    Completed
  </button>
</div>



    <h2>My Tasks</h2>
    <p>Completed tasks: {completedCount}</p>
    <p>Pending tasks: {pendingCount}</p>
    
{filteredTasks.length === 0 ? (
  <p>No tasks yet. Add Your First Task!</p>
) : (
  <ul className='task-list'>
    {filteredTasks.map((task) => (
      <li key={task.id} className='task-item'>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={()=>handleToggleTask(task.id)}
        />
        <span>{task.text}</span>
        
        <button onClick={() => handleDeleteTask(task.id)}>
          Delete
        </button>

      </li>
    ))}
  </ul>
)}




  </div>
  );
 
    
}
export default App;