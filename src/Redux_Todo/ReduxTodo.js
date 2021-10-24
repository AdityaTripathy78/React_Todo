import React, { useState } from "react";
import todo from "../todo.svg";
// import "../App.css";
import "../Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "./action";

// to get the data from LS

// const getLocalItmes = () => {
//   let list = localStorage.getItem("lists");
//   console.log(list);

//   if (list) {
//     return JSON.parse(localStorage.getItem("lists"));
//   } else {
//     return [];
//   }
// };

const ReduxTodo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducers.list);
  // const [items, setItems] = useState(getLocalItmes());
  // const [toggleSubmit, setToggleSubmit] = useState(true);
  // const [isEditItem, setIsEditItem] = useState(null);

  // const editItem = (id) => {
  //   let newEditItem = items.find((elem) => {
  //     return elem.id === id;
  //   });
  //   console.log(newEditItem);

  //   setToggleSubmit(false);

  //   setInputData(newEditItem.name);

  //   setIsEditItem(id);
  // };

  // add data to localStorage
  // useEffect(() => {
  //   localStorage.setItem("lists", JSON.stringify(items));
  // }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* clear all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span> CHECK LIST </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReduxTodo;

//TODO Please Subscribe to ThapaTechnical Youtube Channel
//TODO Click Here: https://www.youtube.com/thapatechnical
