const Vue_Components = {
  data() {
    return {
      text: Vue.ref('Hello!'),
    }
  },
};

Vue.createApp(Vue_Components).mount("#app");
