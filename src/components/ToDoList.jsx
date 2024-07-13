import ToDoListButton from "./ToDoListButton";

function ToDoList(props) {
  props.task.sort((a, b) => b.id - a.id);
  return (
    <div className="wrapper">
      <ul>
        {props.tasks.map((item) => {
          return (
            <li key={item.id}>
              <div className="left">
                <button>✅</button>
              </div>
              <div className="center">{item.task}</div>
              <div className="right">
                <ToDoListButton />
              </div>
            </li>
          );
        })}
        <li>
          <div className="left">
            <button>✅</button>
          </div>
          <div className="center">bbb</div>
          <div className="right">
            <ToDoListButton />
          </div>
        </li>
        <li>
          <div className="left">
            <button>◻️</button>
          </div>
          <div className="center">aaa</div>
          <div className="right">
            <ToDoListButton />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ToDoList;
