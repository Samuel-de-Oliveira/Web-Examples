// Components
const Components = {
  // App Data
  data() {
    return {
      hello: Vue.ref('Hello!'),
      counter: Vue.ref(15),
      Temperature: Vue.ref(0),
    }
  },

  // App Methods
  methods: {
    // Main Method
    showTemperature() {
      var input = parseInt(document.querySelector("#getvalue").value);
      var convertion = this['Cel2Fah'];
      this.counter++;
      this.Temperature = `Result ${convertion(input).toFixed(2)}`;
      this.hello = input;
    },

    // Temperature Methods
    Cel2Fah(input) {
      return (9/5 * input) + 32;
    },
    Fah2Cel(input) {
      return (5/9 * (input - 32));
    },
    Cel2Kel(input) {
      return input + 273;
    },
    Kel2Cel(input) {
      return input - 273;
    },
    Fah2Kel(input) {
      // TODO: Consertar Conversor de Fah e Kel
      return ((input + 459) * 5) / 9;
    },
    Kel2Fah(input) {
      return ((input - 495) * 9) / 5;
    },
  },
};

// Start
Vue.createApp(Components).mount('#app');
