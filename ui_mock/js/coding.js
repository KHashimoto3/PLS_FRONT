const App = {
  data() {
    return {
      message: "読み込み完了！",
      box1: "",
      //ヒント使用フラグ
      hint1_showed: 0,
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
      if (this.hint1_showed == 0) {
        this.timer1 = setTimeout(this.show_hint1, 10000);
      }
    },
    show_hint1: function () {
      this.timer1_hint_style.display = "inline-block";
      this.hint1_showed = 1;
    },
    cancel_hint1: function () {
      clearTimeout(this.timer1);
      console.log("ヒントの表示が取り消されました。");
    },
  },
};

Vue.createApp(App).mount("#app");
