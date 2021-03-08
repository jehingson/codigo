<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Ejemplo1 />
  </div>
</template>

<script>
// @ is an alias to /src
import Ejemplo1 from '../components/Ejemplo1.vue';

export default {
  name: 'Ejs',
  components: {
    Ejemplo1,
  }
}
</script>
