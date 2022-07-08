const App = {
  data() {
    return {
      txt: "",
      result: "",
    };
  },
  methods: {
    check_pattern: function () {
      //正規表現をチェック
      //const result = this.txt.match(/^\d{3}-?\d{4}$/);
      const result = this.txt.match(
        /(^\sint\s\w+;)|(^\sint\s\w+\s=\s[0-9]+;)|(^\sdouble\s\w+;)|(^\sdouble\s\w+\s=\s([0-9]|\.)+;)|(^\schar\s\w+;)/
      );
      if (result == null) {
        this.result = "不正";
      } else {
        this.result = "適合";
      }
    },
  },
};

Vue.createApp(App).mount("#app");
