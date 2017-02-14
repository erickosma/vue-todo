<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  color: #42b983;
}
</style>
