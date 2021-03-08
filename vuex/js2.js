Vue.component('titulo', {
  template: //html
  `
  <div class="bg-dark text-white p-3">
    <h1>El dato global es: {{$store.state.numero}}</h1>
    <h1>El dato global simplificado: {{numero}}</h1>
      <button class="btn btn-primary" @click="aumentar">+</button>
      <button class="btn btn-danger" @click="disminuir">-</button>
    <br/>
    <hijo />
  </div>
  
  `,
  computed: {
    numero(){
      return store.state.numero
    },
  },
  methods: {
    ...Vuex.mapMutations(['aumentar', 'disminuir'])
  }
})

Vue.component('hijo', {
  template: //html
    `
    <div class="bg-success p-3 mt-4">
    <p>hijo</p>
      <hr/>
      <button class="btn btn-primary" @click="aumentar">+</button>
      <button class="btn btn-danger" @click="disminuir">-</button>
        <h3>El numero global es: {{$store.state.numero}}</h3>
        <h3>El dato global a traves del mapState {{numero}}</h3>
        <hr/>
        <h2>Actions para peticiones a una API</h2>
        <button class="btn btn-info" @click="obtenerCursos">cursos</button>
        <ul>
        <li v-for="item of cursos">
          {{item.nombre}}
        </li>
        </ul>
    </div>
    `
    ,
    computed: {
      ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
      ...Vuex.mapMutations(['aumentar', 'disminuir']),
      ...Vuex.mapActions(['obtenerCursos'])
    }
})

const store = new Vuex.Store({
  // En el state se encuentra el dato que sera consumido de forma global
  state: {
    numero: 10,
    cursos : []
  },
  mutations: {
    aumentar(state){
      state.numero++
    },
    disminuir(state){
      state.numero--
    },
    cursosAPI(state, DATA){
      state.cursos = DATA
    }
  },
  actions:{
    obtenerCursos: async function({commit}){
      const res = await fetch('api.json')
      const DATA = await res.json()
      commit('cursosAPI', DATA)
    }
  }
})


const app = new Vue({
  el: '#app2',
  store: store
})