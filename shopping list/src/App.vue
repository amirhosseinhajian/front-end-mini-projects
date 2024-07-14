<template>
  <main>
    <MobileComponent>
      <template #top>
        <div class="container">
          <h1><b>Shoping List</b></h1>
          <p>This is my today's shopping list.</p>
        </div>
        <figure>
          <img id="edit-icon" src="@/assets/images/edit.png" alt="" />
        </figure>
      </template>
      <template #body>
        <ItemContainerComponent>
          <template #item>
            <ItemHeadComponent :heads="heads">
              <template #sub-item></template>
            </ItemHeadComponent>
          </template>
        </ItemContainerComponent>
      </template>
      <template #bottom>
        <input type="text" placeholder="Write some title" v-model="title" />
        <input type="text" placeholder="Write some item" v-model="item" />
        <button @click="addItem">Add item</button>
      </template>
    </MobileComponent>
  </main>
</template>

<script setup>
import MobileComponent from "./components/MobileComponent.vue";
import ItemContainerComponent from "./components/ItemContainerComponent.vue";
import ItemHeadComponent from "./components/ItemHeadComponent.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();
const items = computed(() => store.state.items);
let title = ref(""),
  item = ref("");

const addItem = () => {
  if (title.value.length > 0 && item.value.length > 0) {
    let isExistHeader = false;
    items.value.forEach((element) => {
      if (element.title === title.value) {
        isExistHeader = true;
        if (!element.tasks.some((task) => item.value === task)) {
          store.commit("addWithExistHeader", {
            title: title.value,
            task: item.value,
          });
          title.value = "";
          item.value = "";
        }
      }
    });
    if (!isExistHeader) {
      store.commit("addWithNewHeader", {
        title: title.value,
        tasks: [item.value],
        color: randomNColor(),
      });
      title.value = "";
      item.value = "";
    }
  }
};

const headerColors = [
  "red",
  "green",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "gray",
  "tan",
  "blue",
];
const randomNColor = () => {
  return headerColors[Math.floor(Math.random() * 10)];
};
</script>

<style lang="css">
@font-face {
  font-family: "roboto";
  src: url("@/assets/fonts/roboto-medium.ttf") format("truetype");
  font-weight: 500;
}

@font-face {
  font-family: "roboto";
  src: url("@/assets/fonts/roboto-regular.ttf") format("truetype");
  font-weight: normal;
}

body {
  background-color: #9fa8da;
}

main {
  padding-top: 15px;
}

h1 {
  font-family: roboto;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1;
}

p {
  margin: 10px 0;
}

.container p {
  color: #403f3f;
  font-family: roboto;
  font-weight: normal;
  font-size: 0.8rem;
}

.container::after {
  content: "Today";
  background-color: #1976d2;
  color: white;
  font-family: roboto;
  font-size: 0.6rem;
  padding: 3px 13px;
  position: absolute;
  top: 25px;
  left: 145px;
  border-radius: 10px;
}

figure {
  margin: 0;
  text-align: end;
}

#edit-icon {
  width: 45%;
  min-width: 25px;
  min-height: 25px;
}

input[type="text"] {
  width: 96%;
  border-radius: 5px;
  padding: 14px 5px;
  border: none;
  background-color: #e6e6e6;
  font-size: 0.7rem;
  margin-bottom: 6px;
}

button {
  width: 100%;
  border-radius: 5px;
  padding: 10px 5px;
  color: white;
  background-color: #1976d2;
  border: none;
  cursor: pointer;
}
</style>
