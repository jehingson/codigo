<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item, index) in tareas" :key="index" >{{item}}</h2>
    <h3>{{contador}}</h3>
    <ul>
      <li v-for="(item, index) of frutas" :key="index" class="d-flex text-align-center"><h6>{{item.nombre}}</h6>
        <button @click="aumentarContador(1)">+</button>
      </li>
    </ul>
  </div>
</template>


<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    computed: {
      ...mapState('tareasNombre',['tareas']),
      ...mapState(['frutas']),
      ...mapState('contadorNombre', ['contador'])
    },
    methods: {
      ...mapMutations('contadorNombre', ['aumentarContador'])
    }
  }


</script>
