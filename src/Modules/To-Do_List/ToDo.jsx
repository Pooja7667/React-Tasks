// To-Do List Application
// This application allows users to create, manage, and categorize tasks. 
// Users can add new tasks, change their progress status, and reset the input field. 
// Tasks are organized into four categories: UPCOMING, INPROGRESS, COMPLETED, and DELETED.

import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import MyForm from "./MyForm";

const ToDo = () => {
  const progressType = ["UPCOMING", "INPROGRESS", "COMPLETED", "DELETED"];
  const [allToDos, setAllToDos] = useState([]);

  const changeType = (id, newType) => {
    setAllToDos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, progress: newType } : task
      )
    );
  };

  return (
    <div className="mt-10 lg:w-[80%] m-auto">
      <h1 className="lg:text-3xl text-xl text-center font-bold">To Do List</h1>
      <MyForm setAllToDos={setAllToDos} />
      <div className="mt-5 w-full">
        {progressType.map((type) => (
          <div className="mb-10 p-3" key={type}>
            <h1 className="m-2 lg:text-2xl">{type}</h1>
            {allToDos
              .filter((task) => task.progress === type)
              .map((task) => (
                <SingleTodo task={task} changeType={changeType} key={task.id} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
