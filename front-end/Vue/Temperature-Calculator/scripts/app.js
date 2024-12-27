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
    showTemperature() {
      var text = `Hello world ${this.counter}`;
      this.counter++;
      document.querySelector("#text").innerHTML = text;
    },

    Cel2Fah() {},
    Fah2Cel() {},
    Cel2Kel() {},
    Kel2Cel() {},
    Fah2Kel() {},
    Kel2Fah() {},
  },
};

// Start
Vue.createApp(Components).mount('#app');
