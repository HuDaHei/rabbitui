<template>
  <div id="app">
  <r-input v-model="rData" class="a-r-input"></r-input>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      rData: 'x'
    }
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a-r-input {
  width: 180px;
}
</style>
