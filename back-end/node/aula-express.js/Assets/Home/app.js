// FIX: Try to fix express problem
import vue from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const objects = {
  setup () {
    return {
      message: vue.ref('Hello, world!'),
    }
  }
};

vue.createApp(objects).mount('#app');