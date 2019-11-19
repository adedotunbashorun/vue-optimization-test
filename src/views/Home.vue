<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },
  data() {
    return{
      msg : "Welcome to Your Vue.js App"
    }
  }
}
</script>
