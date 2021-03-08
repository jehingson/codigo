const app = new Vue({
  el: '#app',
  data: {
    title: 'Hola mundo',
    mesagges:'Hola mundo ',
    frutas: [
      {nombre: 'mango', cantidad: 0},
      {nombre: 'fresa', cantidad: 5},
      {nombre: 'pera', cantidad: 5},
    ],
    nuevaFruta: [{
      nombre: '',
      cantidad: 0
    }],
    total: 0
  }, 
  methods: {
    agregarFrutas(){
      this.frutas.push({
        nombre: this.nuevaFruta.nombre,
        cantidad: this.nuevaFruta.cantidad
      })
    },
    
  },
  computed: {
    totalFruta(){
      this.total = 0;
      for(fruta of this.frutas){
        this.total = this.total + fruta.cantidad
      }
      return this.total
    }
  }
})