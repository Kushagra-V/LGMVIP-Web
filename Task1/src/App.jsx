import React, { useState } from "react";
import "./Components/index.css";
import ToDoList from "./ToDoList";

const app = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <div className="center">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <br />
          <br />
          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  itemval={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default app;
