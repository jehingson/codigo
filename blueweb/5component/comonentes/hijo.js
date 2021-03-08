Vue.component('hijo', {
  template: //html 
  `
  <div class="p-4 bg-success">
    <h4>Componente Hijo</h4>
    <h4>Numero: {{numero}}</h4>
    <h4>Nombre: {{nombre}}</h4>
  </div>
  `,
  props: ['numero'],
  data(){
    return{
      nombre: 'json dev'
    }
  },
  mounted(){
    this.$emit('nombreHijo', this.nombre)
  }
})