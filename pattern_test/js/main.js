const App = {
  data() {
    return {
      txt4: "",
      txt5: "",
      result: "",
    };
  },
  methods: {
    check_pattern: function (id) {
      //正規表現をチェック
      //const result = this.txt.match(/^\d{3}-?\d{4}$/);
      if (id == 4) {
        const result = this.txt4.match(
          /(^\sint\s\w+;)|(^\sint\s\w+\s=\s[0-9]+;)|(^\sdouble\s\w+;)|(^\sdouble\s\w+\s=\s([0-9]|\.)+;)|(^\schar\s\w+;)|(^\schar\s\w+\s=\s'\w';)/
        );
        if (result == null) {
          this.result = "不正";
        } else {
          this.result = "適合";
        }
        return;
      }
      if (id == 5) {
        const result = this.txt5.match(/^\s(scanf)\(".+"(,\s\w)+\);/);
        if (result == null) {
          this.result = "不正";
        } else {
          this.result = "適合";
        }
        return;
      }
    },
  },
};

Vue.createApp(App).mount("#app");
