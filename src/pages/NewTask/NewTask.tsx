import React from "react";

type Props = {};

function NewTask({}: Props) {
  return (
    <div className="newTask">
      <div className="container">
        <div className="titleBox">
          <h1>Add New Task</h1>
        </div>
        <form className="formBox">
          <div className="nameBox"></div>
          <div className="priorityBox"></div>
          <div className="complexityBox"></div>
          <div className="dateTimeBox"></div>
          <div className="subTaskBox"></div>
          <div className="tagBox"></div>
          <div className="subMitBox"></div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
