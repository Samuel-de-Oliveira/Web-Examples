// App Constants
const App = {
  data() {
    return {
      hello: 'Hello!',
    }
  }
};

// Page style //
const page = document.querySelector('#root');
page.style.fontSize   = '16pt';
page.style.fontFamily = 'Arial';
page.style.padding    = '5pt';

Vue.createApp(App).mount('#root');
