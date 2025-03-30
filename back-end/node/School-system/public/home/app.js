const objects = {
  setup () {
    return {
      hello: Vue.ref('Hello, world!'),
    }
  },
  methods: {
    helloClick() {
      //window.alert('Hello, world!');
      Swal.fire('Hello, world');
      this.hello = Vue.ref('Goodbye, world!');
    },
  },
};

Vue.createApp(objects).mount('#app');
