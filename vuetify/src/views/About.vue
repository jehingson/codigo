<template>
  <v-div>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati incidunt soluta sit aliquid, deserunt quod expedita unde ex doloribus pariatur quisquam, et temporibus voluptatem, adipisci illum velit voluptates iste repellendus?</p>
      </v-col>
      <v-col cols="12"  md="4">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati incidunt soluta sit aliquid, deserunt quod expedita unde ex doloribus pariatur quisquam, et temporibus voluptatem, adipisci illum velit voluptates iste repellendus?</p>
      </v-col>
    </v-row>
    <hr>
  </v-container>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Standard"
          :disabled="true"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          filled
          label="Filled style"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="Solo field"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
  </v-div>
</template>


<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
    computed: {
      consola(){
        console.log('Hola', this.items)
      }
    }
  }
</script>
