const app = new Vue({
  el: '#app',
  data: {
    post: [],
    texto: '',
    color: true
  },
  methods: {
    nuevoPost(){
      console.log(this.texto)
      this.post.push({
        nombre: this.texto,
        estado: false
      })
      this.limpiarInput()
      localStorage.setItem('gym-vue', JSON.stringify(this.post))
    },
    limpiarInput(){
      this.texto = ''
    },
    eliminarPost(index){
      this.post.splice(index, 1)
      localStorage.setItem('gym-vue', JSON.stringify(this.post))
    },
  },
  created: function(){
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'))
    if(datosDB === null){
      this.post = []
    }else{
      this.post = datosDB
    }
  }

})