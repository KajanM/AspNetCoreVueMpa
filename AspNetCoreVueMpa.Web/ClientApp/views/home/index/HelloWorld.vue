<template>
  <div class="test-global-css test-scoped-css">
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

<style scoped lang="scss">
$fontColor: #FFF;
.test-scoped-css {
  color: $fontColor;
}

</style>