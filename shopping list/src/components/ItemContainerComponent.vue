<template>
  <div class="items">
    <div v-for="(element, index) in items" :key="index">
      <ItemHeadComponent :backGroundColor="element.color">
        <template #header>
          {{ element.title }}
        </template>
      </ItemHeadComponent>
      <ItemComponent
        v-for="(task, idx) in element.tasks"
        :key="idx"
        :id="element.title + task"
      >
        <template #item>
          {{ task }}
        </template>
      </ItemComponent>
    </div>
  </div>
</template>
<script setup>
import ItemHeadComponent from "./ItemHeadComponent.vue";
import ItemComponent from "./ItemComponent.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const items = computed(() => store.state.items);
</script>
<style lang="css">
.items {
  width: 100%;
  height: 280px;
  font-size: 0.9rem;
  overflow-y: scroll;
  position: relative;
}
</style>
