//////////// Main app ////////////
const MyNameApp = {
   // Global data
   data() {
      return {
         name: "Samuel",
         age:  19,
         version: "v0.1",
         num: Vue.ref(0),
      }
   },
  
   // Methods
   methods: {
      increment() {
         this.num++;
         console.log(
           this.num
         );
      },
   },
};

Vue.createApp(MyNameApp).mount('#app');
//////////////////////////////////
