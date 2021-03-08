<template>
  <div>
    <v-layout :wrap="true">
      <v-flex x12>
        <v-card>  
          <v-row justify="center">
            <v-date-picker 
              v-model="fecha"
              full-width
              locale="es-cl"
              :min="minimo"
              :max="maximo"
              @change="getDolar(fecha)"
              ></v-date-picker>
          </v-row>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center"> USD {{dolar}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Home",
  data: () => ({
    fecha: new Date().toISOString().substr(0, 10),
    minimo: '1984',
    maximo: new Date().toISOString().substr(0, 10),
    dolar: null
  }),
  methods: {
    ...mapMutations(['mostrarLoader', 'ocultarLoading']),
    async getDolar(dia){
      try {
      this.mostrarLoader({titulo: "Accediendo a informacion", color: 'accent'})
      this.dolar = null
      let arrayFecha = dia.split(['-'])
      let ddmmyy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0]
      let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
        if(datos.data.serie.length > 0){
          this.dolar = datos.data.serie[0].valor
        }else{
          this.valor = 'Sin resultado'
        }
      } catch (error) {
        console.log(error)
      }
      finally{
        this.ocultarLoading()
      }
    }
  },
  created(){
    this.getDolar(this.fecha)
  }
};
</script>
