import { createStore } from "vuex";

export default createStore({
  state: {
    items: [
      {
        title: "breakfast",
        tasks: ["tea", "bread", "butter"],
        color: "red",
      },
      {
        title: "lunch",
        tasks: ["rice"],
        color: "green",
      },
    ],
  },
  getters: {},
  mutations: {
    addWithExistHeader(state, params) {
      const index = state.items.findIndex((element) => {
        return element.title === params.title;
      });
      state.items[index].tasks.push(params.task);
    },

    addWithNewHeader(state, params) {
      state.items.push(params);
    },
  },
  actions: {},
  modules: {},
});
