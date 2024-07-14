<template lang="html">
  <main>
    <div>
      <CardComponent></CardComponent>
    </div>
  </main>
</template>

<script setup>
import CardComponent from "./components/card-component.vue";
</script>

<style lang="scss">
$bg-color: #cacae0;
$mobile-bg-color: #eaeaea;

body {
  background-color: $bg-color;

  main {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p,
  h1 {
    padding: 0;
    margin: 0;
  }
}
</style>
