import { createStore } from 'vuex';

import tareasNombre from '../modules/tareas'
import contadorNombre from '../modules/contador'

export default createStore({
  state: {
    frutas: [
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Mango', cantidad: 3},
      {nombre: 'Pera', cantidad: 0}
    ]
  },
  mutations: {
    aumentar(state, n){
      state.frutas[n].cantidad++;
    },
    reset(state){
      state.frutas.forEach(item => {
        item.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
    tareasNombre,
    contadorNombre
  }
})
