import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todoSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer
  },
});
