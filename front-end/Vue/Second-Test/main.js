// App Constants
const App = {
  data() {
    return {
      hello: 'Hello!',
      conter: Vue.det(0),
    }
  }
};

// Page style //
const page = document.querySelector('#root');
page.style.fontSize   = '16pt';
page.style.fontFamily = 'Arial, sans-serif';
page.style.padding    = '5pt';

// Create app
Vue.createApp(App).mount('#root');
