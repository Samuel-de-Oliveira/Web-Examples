/// Vue objects ///
const vue_objects = {
  setup() {
    return {
      getMethodTime: new Date(),
    }
  },

  beforeMount() {
    console.log(`[${this.getMethodTime}] - Hello, world!`);
  },

  methods: {},
};

Vue.createApp(vue_objects).mount('#Vue-app'); // Run Vue
