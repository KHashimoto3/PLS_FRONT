const App = {
  data() {
    return {
      message: "読み込み完了！",
      box1: "",
      //タイマー
      timer1: null,

      //吹き出しのstyle
      timer1_hint_style: {
        position: "absolute",
        "background-color": "#808080",
        color: "white",
        "font-size": "0.8em",
        "border-radius": "0.5em",
        padding: "10px",
        margin: "-0.8em 0.5em 0 1em",
        display: "none",
      },
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
      this.timer1_hint_style.display = "inline-block";
    },
    cancel_hint1: function () {
      clearTimeout(this.timer1);
      console.log("ヒントの表示が取り消されました。");
      this.timer1_hint_style.display = "none";
    },
  },
};

Vue.createApp(App).mount("#app");
