import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './styles.css'
import { useDispatch } from "react-redux";
import { setCheck } from "../../features/todoSlice";
export const ListaItem = ({item, done, id}) => {

  const dispatch = useDispatch()
  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  return (
    <div className="listaItem">
      
      <Checkbox
            checked={done}
            onChange={handleCheck}
            value="checkedB"
            color="primary"
          />
      <p className={done ? 'listaItem--done' : ''}>{item}</p>
    </div>
  )
}
