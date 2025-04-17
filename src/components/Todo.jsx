import { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");

  const [taskCounter, setTaskCounter] = useState(0);

  const [scheduledTask, setScheduledTask] = useState([]);

  function addTask(e) {
    e.preventDefault();

    let taskId = taskCounter + 1;

    setTaskCounter(taskId);

    setScheduledTask((task) => [
      ...task,
      {
        id: taskId,
        title: inputValue,
        status: false,
      },
    ]);

    setInputValue(""); // Clear input
  }

  function handleCheckBox(e) {
    const { id } = e.target;

    setScheduledTask((tasks) =>
      tasks.map((eachScheduledTask) =>
        eachScheduledTask.id == Number(id)
          ? { ...eachScheduledTask, status: true }
          : eachScheduledTask
      )
    );
  }

  const completedTask = scheduledTask.filter((task) => task.status);
  const ongoingTask = scheduledTask.filter((task) => !task.status);

  console.log(ongoingTask);

  console.log(completedTask);

  return (
    <div>
      <form>
        <label htmlFor="task">Task:</label>
        <br />
        <input
          type="text"
          name="task"
          id="task"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <button onClick={addTask}>Add Task</button>
      </form>
      <h2>Scheduled Tasks</h2>
      <ul>
        {ongoingTask.length === 0 ? (
          <p className="text-gray-500">No tasks yet!</p>
        ) : (
          ongoingTask.map((eachTask, index) => (
            <li key={eachTask.id} className="text-gray-800 py-1">
              <input
                type="checkbox"
                id={eachTask.id}
                onChange={handleCheckBox}
              />
              {eachTask.title}
            </li>
          ))
        )}
      </ul>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTask.length === 0 ? (
          <p className="text-gray-500">No tasks yet!</p>
        ) : (
          completedTask.map((task, index) => (
            <li key={task.id} className="text-gray-800 py-1">
              <input type="checkbox" id={task.id} onChange={handleCheckBox} />
              {task.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
