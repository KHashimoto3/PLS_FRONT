const App = {
  data() {
    return {
      message: "読み込み完了！",
      box1: "",
      //ヒント使用フラグ
      hint1_showed: 0,

      //ヒント
      hint1_txt: "",
      timer1: null,
      timer2: null,
      timer3: null,

      //吹き出しのstyle
      hint1_style: {
        position: "absolute",
        background: "#6cb913d3",
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
      //タイマー1を設定
      if (this.hint1_showed == 0) {
        this.timer1 = setTimeout(this.show_hint1, 10000);
      }
    },
    show_hint1: function () {
      this.hint1_txt = "この行は　変数を宣言します。";
      this.hint1_style.display = "inline-block";
      this.hint1_showed = 1;
      //タイマー2を設定
      this.timer2 = setTimeout(this.show_hint2, 10000);
    },
    show_hint2: function () {
      this.hint1_txt = "ここには　変数の型 が入ります。";
      this.hint1_style.display = "inline-block";
      this.hint1_style.background = "#e67b34";
      //タイマー3を設定
      this.timer3 = setTimeout(this.show_hint3, 10000);
    },
    show_hint3: function () {
      this.hint1_txt = "変数宣言のサンプルはこちら。";
      this.hint1_style.display = "inline-block";
      this.hint1_style.background = "#b913a3d3";
    },
    cancel_hint1: function () {
      clearTimeout(this.timer1);
      console.log("ヒントの表示が取り消されました。");
    },
  },
};

Vue.createApp(App).mount("#app");
