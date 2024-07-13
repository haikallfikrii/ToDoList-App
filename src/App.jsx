import { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const newTask = useRef("");
  const [tasks, setTask] = useState([]);
  function addTask(event) {
    event.preventDefault();
    if (newTask.current.value == "") {
      alert(`Kamu belum memasukkan kegiatanmu..!`);
      return false;
    }
    const data = {
      id: 1,
      task: newTask.current.value,
      completed: false,
    };
    console.log(`saya diklik isi ${newTask.current.value}`);
  }
  return (
    <>
      <Form addTask={addTask} newTask={newTask} />
      <ToDoList />
    </>
  );
}

export default App;
