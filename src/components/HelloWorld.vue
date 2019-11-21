<template>
  <div>
      <carousel></carousel>
      <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Carousel: () => import('@/components/Carousel.vue'),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
