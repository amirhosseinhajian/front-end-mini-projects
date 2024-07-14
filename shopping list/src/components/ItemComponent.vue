<template>
  <div>
    <label :for="id">
      <input type="checkbox" :id="id" />
      <span><slot name="item"></slot></span>
    </label>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  id: String,
});
</script>
<style lang="css" scoped>
label {
  padding: 10px 20px;
  width: 86%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  font-family: roboto;
  font-weight: normal;
  cursor: pointer;
}

input[type="checkbox"] {
  margin: 0;
  transform: scale(0);
}

input[type="checkbox"]:checked {
  transform: scale(1);
  color: rebeccapurple;
}

input[type="checkbox"]:checked + span {
  text-decoration: line-through;
}
</style>
