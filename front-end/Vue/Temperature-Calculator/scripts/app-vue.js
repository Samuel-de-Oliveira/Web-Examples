import { ref, createApp } from '../node_modules/vue';

// Components
const Components = {
  Setup() {
    return {
      hello: ref('Hello!'),
    }
  }
};

// Start
createApp(Components).mount('#App');