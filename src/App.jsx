import { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const newTask = useRef("");
  const [tasks, setTasks] = useState([]);
  function setId() {
    const jumlahTask = tasks.length;
    return jumlahTask + 1;
  }
  function addTask(event) {
    event.preventDefault();
    if (newTask.current.value == "") {
      alert(`Kamu belum memasukkan kegiatanmu..!`);
      return false;
    }
    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false,
    };
    newTask.current.value = "";
    setTasks([...tasks, data]);
  }
  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <ToDoList tasks={tasks} />
    </>
  );
}

export default App;
