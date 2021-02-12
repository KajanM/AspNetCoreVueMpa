<template>
  <div>
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