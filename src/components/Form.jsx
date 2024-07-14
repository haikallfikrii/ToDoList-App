// Form.jsx
import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  return (
    <div className="wrapper">
      <header>
        <h3>🔰 TODOLIST </h3>
      </header>

      <form className="input-box">
        <input type="text" ref={props.newTask} placeholder="Add Your Task" />
        <button type="submit" onClick={props.addTask}>
          Add Task
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  newTask: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default Form;
