/// Vue objects ///
const vue_objects = {
setup() {
  return {}
},

beforeMount() {
  console.log('Hello, world!')
},

methods: {},
};

Vue.createApp(vue_objects).mount('body'); // Run Vue
