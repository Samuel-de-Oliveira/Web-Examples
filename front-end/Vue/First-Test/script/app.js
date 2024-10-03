//////////// Main app ////////////
const MyNameApp = {
   data() {
      return {
         name: "Samuel",
         age:  19,
         version: "v0.1",
         num: Vue.ref(0),
      }
   }
};

Vue.createApp(MyNameApp).mount('#app');
//////////////////////////////////
