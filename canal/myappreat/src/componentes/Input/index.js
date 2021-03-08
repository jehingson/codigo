import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";
import { db } from "../../firebase";
import "./styles.css";

export const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("post").add({
      item: input,
      done: false,
      timestamp: Date.now(),
    });
    setInput("");
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendPost}>Enviar</button>
    </div>
  );
};
