<template>
  <div class="head" :class="[backGroundColor]">
    <label>
      <slot name="header"></slot>
    </label>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  heads: Array,
  backGroundColor: String,
});
</script>
<style lang="css" scoped>
.head {
  margin-right: 80px;
  padding: 10px 20px;
  width: 86%;
  font-family: roboto;
  font-weight: normal;
  border-radius: 5px;
  color: white;
  position: sticky;
  top: 0;
  z-index: 3;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.purple {
  background-color: purple;
}
.orange {
  background-color: orange;
}
.pink {
  background-color: salmon;
}
.brown {
  background-color: brown;
}
.black {
  background-color: black;
}
.gray {
  background-color: gray;
}
.tan {
  background-color: saddlebrown;
}
.blue {
  background-color: blue;
}
</style>
