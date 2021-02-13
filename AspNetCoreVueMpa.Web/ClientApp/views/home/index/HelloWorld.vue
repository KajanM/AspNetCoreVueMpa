<template>
  <div class="test-global-css">
    Hello {{ name }} from Vue! 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "world",
    }
  },
}
</script>

<style scoped>

</style>