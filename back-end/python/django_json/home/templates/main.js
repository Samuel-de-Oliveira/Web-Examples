/// Functions ///
// wait
function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
  }
}

/// Vue objects ///
const vue_objects = {
  setup() {
    return {
      R_Number: Vue.ref(Math.floor(Math.random() * 10)),
      Text: Vue.ref('Hello, world!'),
    }
  },

  beforeMount() {
    //wait(5000);
    this.Text = 'Goodbye, world!';
  },

  methods: {},
};

Vue.createApp(vue_objects).mount('#My_App'); // Run Vue
