<template>
  <default-layout>
    <b-container class="test-global-css test-scoped-css">
      Hello {{ name }} from Vue!
      <img src="../../../assets/images/kajan.png">
      <pre class="text-white">
        {{ JSON.stringify(viewModel, null, 2) }}
      </pre>
    </b-container>
  </default-layout>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "world",
      viewModel: viewModel,
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