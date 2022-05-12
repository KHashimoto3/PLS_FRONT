const App = {
  data() {
    return {
      message: "読み込み完了！",
      box1: "",
      //タイマー
      timer1: null,
    };
  },
  methods: {
    //box1がフォーカスされたら
    box1_focus: function () {
      console.log("box1がフォーカスされました。");
      //タイマーを設定
      this.timer1 = setTimeout(this.show_hint1, 10000);
    },
    show_hint1: function () {
      console.log("ここには変数の宣言が入ります。");
    },
    cancel_hint1: function () {
      clearTimeout(this.timer1);
      console.log("ヒントの表示が取り消されました。");
    },
  },
};

Vue.createApp(App).mount("#app");
