import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import App from "./app.vue";

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    add(state) {
      state.count++;
    },
    sub(state) {
      state.count--;
    },
  },
});

const vm = new Vue({
  el: ".app",
  data: {},
  render: (c) => c(App),
  store,
});
