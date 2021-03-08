import { createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";
//const [todoList, setTodoList] = useState([])

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, actions) => {
      state.todoList = actions.payload;
    },
    setCheck: (state, actions) => {
      // state.todoList.map(item => {
      //   if(actions.payload === item.id)
      //     item.done = !item.done
      //     //item.done === true ? item.done = false : item.done = true
      //   }
      // )
      (async () => {
        const queryRef = db.collection("post").doc(actions.payload);
        const query = await queryRef.get()
        query.data().done ? await queryRef.update({done: false}) : await queryRef.update({done: true});
      })();
    },
  },
});



export const { saveTodo, setCheck } = todoSlice.actions;

export const selectTodoLista = (state) => state.todos.todoList;

export default todoSlice.reducer;
