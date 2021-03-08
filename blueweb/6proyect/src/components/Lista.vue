<template>
  <div>
  <ul>
  <li   
    v-for="(item, index) of frutas"  
    :key="item.id"
    v-on:click="aumentar(index)"
    class="list-group-item d-flex justify-content-between align-items-center">
    {{item.nombre}}
    <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
  </li>
</ul>
<button
  @click="reset" 
  class="btn btn-danger btn-block">Reiniciar</button>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
  name: 'Lista',
  computed: {
    ...mapState(['frutas'])
    // arrayOreders(){
    //   return this.frutas.sort((a, b) => b.cantidad - a.cantidad)
    // }
  },
  methods:{
    ...mapMutations(['aumentar','reset'])
  }
}
</script>