// Components
const Components = {
  // App Data
  data() {
    return {
      information: Vue.ref('Please digit any value'),
      counter:     Vue.ref(15),
      Temperature: Vue.ref(""),
    }
  },

  // App Methods
  methods: {
    // Main Method
    showTemperature() {
      const input   = parseInt(document.querySelector("#getvalue").value);
      const getcovertion = document.querySelector("#getconvertion").value;

      if ((input || input == 0) && getcovertion) {
        var convertion = this[getcovertion];
        this.counter++;
        
        this.information = `Your value is ${input}`;
        this.Temperature = `Result ${convertion(input)}`;
      } else {
        this.information = `Invalid temperature value!`;
        this.Temperature = ``;
        window.alert('Please digit a valid value!');
      };
    },

    // Temperature Methods
    Cel2Fah(input) {
      var value = (9/5 * input) + 32;
      return `${value.toFixed(2)} Fº`;
    },
    Fah2Cel(input) {
      var value = (5/9 * (input - 32));
      return `${value.toFixed(2)} Cº`;
    },
    Cel2Kel(input) {
      var value = input + 273;
      return `${value.toFixed(2)} Kº`;
    },
    Kel2Cel(input) {
      var value = input - 273;
      return `${value.toFixed(2)} Cº`;
    },
    Fah2Kel(input) {
      // TODO: Consertar Conversor de Fah e Kel
      var value = ((input + 459) * 5) / 9;
      return `${value.toFixed(2)} Kº`;
    },
    Kel2Fah(input) {
      var value = ((input - 495) * 9) / 5;
      return `${value.toFixed(2)} Fº`;
    },
  },
};

// Start
Vue.createApp(Components).mount('#app');
