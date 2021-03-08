Vue.component('titulo', {
  template: //html
  `
  <div>
     <h1>El numero global es: {{ $store.state.numero }} </h1>
     <hijo />
  </div>
  `
})

Vue.component('hijo', {
  template: //html
  `
  <div class="mt-4">
  <hr/>
  <p>$store.commit('aumnetar')</p>
    <button @click="$store.commit('aumentar')">+</button>
    <button @click="$store.commit('disminuir')">-</button>
  <hr/>
  <p>a travez del mapMutation</p>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
    <input type="number" v-model.number="numeroN"/>
    <button @click="aumentarN(numeroN)">+</button>
    <button @click="disminuirN(numeroN)">-</button>
  <hr/>
    <h3>El numero global es: {{ $store.state.numero }}</h3>
    <h2>El numero global simplificado : {{numero}}</h2>
    <h1>El numero global a traves del mapState: {{numero}}</h1>
  <hr/>
  <button @click="obtenerCursos">Obtener cursos</button>
  <ul class="mt-4">
    <li v-for="item of cursos">
      {{item.nombre}}
    </li>  
  </ul>
  </div>
  `
  ,
  data(){
    return{
      numeroN : 0
    }
  },
  computed: {
    // numero(){
    //   return store.state.numero
    // },
    ...Vuex.mapState(['numero', 'cursos'])
  },
  methods: {
    ...Vuex.mapMutations(['aumentar', 'disminuir', 'disminuirN', 'aumentarN']),
    ...Vuex.mapActions(['obtenerCursos'])
  }
})

const store = new Vuex.Store({
  state: {
    numero: 10,
    cursos: []
  },
  mutations: {
    aumentar(state){
      state.numero++
    },
    disminuir(state){
      state.numero--
    },
    disminuirN(state, n){
      state.numero = state.numero - n;
    },
    aumentarN(state, n){
      state.numero = state.numero + n;
    },
    cursosAPI(state, DATA){
      state.cursos = DATA
    }
  },
  actions: {
    obtenerCursos: async function({commit}){
      const res = await fetch('api.json');
      const DATA = await res.json()
      commit('cursosAPI', DATA)
    }
  }
})

const app = new Vue({
  el: '#app',
  store: store // store
})
