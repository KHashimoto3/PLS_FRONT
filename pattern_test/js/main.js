const App = {
  data() {
    return {
      txt: "",
      result: "",
    };
  },
  methods: {
    check_pattern: function () {
      this.result = "未確認";
    },
  },
};

Vue.createApp(App).mount("#app");
