<template>
  <div>
    <h1>Galeria de Fotos</h1>

    <router-link  
    v-for="(item, index) of fotosArray" 
    :to="{name: 'Fotos', params: {id : item}}"
    :key="index">
      <button>Foto {{item}}</button>
    </router-link>
    <FotosId />

    <hr>
    <button @click="home">Home</button>
    <button @click="Anterior">Anrerior</button> <button @click="Siguiente">Siguiente</button>
  </div>
</template>


<script>
import FotosId from "../components/FotosId.vue";

export default {
  name: 'Fotos',
  components: {
    FotosId
  },
  data(){
    return{
      fotosArray: [1,2,3,4]
    }
  },
  methods: {
    home(){
      this.$router.push('/')
    },
    Anterior(){
      this.$router.go(-1)
    },
    Siguiente(){
      this.$router.go(1)
    }
  }
}
</script>