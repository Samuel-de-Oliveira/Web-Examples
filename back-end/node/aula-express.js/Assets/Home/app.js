const vue = require('vue')

var objects = {
  setup() {
    console.log(
      'Ceci n\'est pas une Javascript code...'
    );
  },
};

vue.createApp(objects).mount('body')
