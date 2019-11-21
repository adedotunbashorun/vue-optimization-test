<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>
<script>
export default {
  components:{
    NavBar: () => import('@/components/Navbar.vue'),
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
