// Components
const Components = {
  // App Data
  data() {
    return {
      hello: Vue.ref('Hello!'),
      counter: Vue.ref(0),
    }
  },

  // App Methods
  methods: {
    sayHello() {
      var text = `Hello world ${this.counter}`;
      this.counter++;
      document.querySelector("#text").innerHTML = text;
    },
  },
};

// Start
Vue.createApp(Components).mount('#app');
