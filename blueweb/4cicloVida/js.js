const app = new Vue({
  el: '#app',
  data: {
    cicloVida: 'Soy ciclo de vida de Vue',
    cambio: 'Vamos con toda'
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    //Al crear los metodos, observadores y eventos, pero aun no accede al DOM
    console.log('created')
  },
  beforeMount(){
    // Se ejecuta antes de insertar al DOM    
    console.log('beforeMount')
  },
  mounted(){
    // Se ejecuta al insertar el DOM
    console.log('mounted')
  },
  updated(){
    //Al realizar los cambios
    console.log('updated')
  },
  beforeDestroy(){
    //Antes de destruir la instancia
    console.log('beforeDestroy')
  },
  destroyed(){
    //Se destruye toda la instancia :(
    console.log('destroyed')
  },
  methods: {
    destruir(){
      this.$destroy();
    }
  }
})