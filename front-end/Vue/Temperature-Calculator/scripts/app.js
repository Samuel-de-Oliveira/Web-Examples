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
      var convertion = this['Cel2Fah']
      this.counter++;
      document.querySelector("#text").innerHTML = text + ` ` + convertion(this.counter);
    },

    Cel2Fah(input) {
      return (5 * (input + 32)) / 9
    },
    Fah2Cel(input) {
      return (9 * (input - 32)) / 5
    },
    Cel2Kel(input) {
      return input + 273
    },
    Kel2Cel(input) {
      return input - 273
    },
    Fah2Kel(input) {
      return ((input + 459) * 5) / 9
    },
    Kel2Fah(input) {
      return ((input - 495) * 9) / 5
    },
  },
};

// Start
Vue.createApp(Components).mount('#app');
