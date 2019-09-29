<template>
  <div id="app">
  <r-input :values.sync="rData"></r-input>
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
    input(v) {
      console.log(v, 'input')
    }
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
</style>
