import React, {useEffect } from "react";
import "./App.css";
import { Input } from "./componentes/Input";
import { ListaItem } from "./componentes/ListaItem";
import { useSelector, useDispatch} from "react-redux";
import { selectTodoLista} from "./features/todoSlice";
import { Login } from "./componentes/Login";
import { db, auth } from "./firebase";
import { saveTodo } from "./features/todoSlice";
import { loginn, selectUser, logout } from "./features/userSlice";

function App() {
  const todoList = useSelector(selectTodoLista);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(loginn({
          email: userAuth.email,
          name: userAuth.displayName,
          uid: userAuth.uid
        }))
      }else{
        dispatch(logout())
      }
    })
  },[])
 
  useEffect(() => {
    console.log('re render')
    db.collection("post")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        dispatch(saveTodo(snapshot.docs.map(doc => ({
          id: doc.id,
          item: doc.data().item,
          done: doc.data().done
        }))))
      });
  }, []);

  const salir = () => {
    dispatch(logout())
    auth.signOut()
  }
  
  return (
    <div className="App">
     
      <div className="container">
      
        {user ? (
          <>
            <button className="salir" onClick={salir}>Salir</button>
            <div className="listas">
              {todoList.map((item) => (
                <ListaItem
                  key={item.id}
                  item={item.item}
                  done={item.done}
                  id={item.id}
                />
              ))}
            </div>
            <Input />
          </>
        ) : (
          <>
          <Login /> 
          </>
        )}
      </div>
    </div>
  );
}

export default App;
