import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from "../store";

function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();
  
  function onChange(e) {
    setText(e.target.value);
    }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(actionCreators.addToDo(text));
    setText("");
    }
    return (
      <div>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
          <button>
            Add
          </button>
        </form>
        <ul>
          {toDo.map(toDo => (
            <ToDo {...toDo} key={toDo.id} />
           ))}
        </ul>
      </div>
    );
  }
  
  export default Home;