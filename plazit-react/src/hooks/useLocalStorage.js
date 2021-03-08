import { useState } from "react";

export function useLocalStorage(key, initialValuel){
  const [storaValue, setValue] = useState(() => {
    try{
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValuel;
    } catch(error){
      return false
    }
  })

  const setLocalStorage = value =>{
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }
  return [storaValue, setLocalStorage]
}
