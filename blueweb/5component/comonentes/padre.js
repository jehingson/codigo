Vue.component('padre', {

  template: //html 
  ` 
  <div class="p-4 bg-dark text-white">
    <h2>Componente Padre: {{numeroPadre}}</h2>
    <button class="btn btn-primary" @click="numeroPadre++">+</button>
    <button class="btn btn-danger" @click="numeroPadre--">-</button>
    <br/>
    <hijo :numero="numeroPadre" @nombreHijo="nombrepadre = $event"/>
    <h3>{{nombrepadre}}</h3>
  </div>
  `
  ,  
  data(){
    return{
      numeroPadre: 0,
      nombrepadre: ''
    }
  }

})