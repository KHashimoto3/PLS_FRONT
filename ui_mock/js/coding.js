const App = {
  data() {
    return {
      box1: "",
      //ヒント使用フラグ
      box1_showed: 0,
      box2_showed: 0,
      box3_showed: 0,
      box4_showed: 0,

      //ヒント
      box1_hint_txt: "",
      box1_t1: null,
      box1_t2: null,
      box1_t3: null,
      box1_link: "sample1.html",

      box2_hint_txt: "",
      box2_t1: null,
      box2_t2: null,
      box2_t3: null,
      box2_link: "sample2.html",

      box3_hint_txt: "",
      box3_t1: null,
      box3_t2: null,
      box3_t3: null,
      box3_link: "sample3.html",

      box4_hint_txt: "",
      box4_t1: null,
      box4_t2: null,
      box4_t3: null,
      box4_link: "sample4.html",

      //吹き出しのstyle
      box1_style: {
        position: "absolute",
        background: "#6cb913d3",
        color: "white",
        "font-size": "0.8em",
        "border-radius": "0.5em",
        padding: "10px",
        margin: "-0.8em 0.5em 0 1em",
        display: "none",
      },
      box2_style: {
        position: "absolute",
        background: "#6cb913d3",
        color: "white",
        "font-size": "0.8em",
        "border-radius": "0.5em",
        padding: "10px",
        margin: "-0.8em 0.5em 0 1em",
        display: "none",
      },
      box3_style: {
        position: "absolute",
        background: "#6cb913d3",
        color: "white",
        "font-size": "0.8em",
        "border-radius": "0.5em",
        padding: "10px",
        margin: "-0.8em 0.5em 0 1em",
        display: "none",
      },
      box4_style: {
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
      if (this.box1_showed == 0) {
        this.box1_t1 = setTimeout(this.show_box1_hint1, 10000);
      }
    },
    show_box1_hint1: function () {
      this.box1_hint_txt = "この行は　変数を宣言します。";
      this.box1_style.display = "inline-block";
      this.box1_showed = 1;
      //タイマー2を設定
      this.box1_t2 = setTimeout(this.show_box1_hint2, 10000);
    },
    show_box1_hint2: function () {
      this.box1_hint_txt = "ここには　変数の型 が入ります。";
      this.box1_style.display = "inline-block";
      this.box1_style.background = "#e67b34";
      //タイマー3を設定
      this.box1_t3 = setTimeout(this.show_box1_hint3, 10000);
    },
    show_box1_hint3: function () {
      this.box1_hint_txt = "変数宣言のサンプルはこちら。";
      this.box1_style.display = "inline-block";
      this.box1_style.background = "#b913a3d3";
    },
    cancel_box1: function () {
      clearTimeout(this.box1_t1);
      console.log("ヒントの表示が取り消されました。");
    },

    //box2がフォーカスされる
    box2_focus: function () {
      console.log("box2がフォーカスされました。");
      //タイマー1を設定
      if (this.box2_showed == 0) {
        this.box2_t1 = setTimeout(this.show_box2_hint1, 10000);
      }
    },
    show_box2_hint1: function () {
      this.box2_hint_txt = "この行は　配列を宣言します。";
      this.box2_style.display = "inline-block";
      this.box2_showed = 1;
      //タイマー2を設定
      this.box2_t2 = setTimeout(this.show_box2_hint2, 10000);
    },
    show_box2_hint2: function () {
      this.box2_hint_txt = "ここには　配列名 が入ります。";
      this.box2_style.display = "inline-block";
      this.box2_style.background = "#e67b34";
      //タイマー3を設定
      this.box2_t3 = setTimeout(this.show_box2_hint3, 10000);
    },
    show_box2_hint3: function () {
      this.box2_hint_txt = "配列宣言のサンプルはこちら。";
      this.box2_style.display = "inline-block";
      this.box2_style.background = "#b913a3d3";
    },
    cancel_box2: function () {
      clearTimeout(this.box2_t1);
      console.log("ヒントの表示が取り消されました。");
    },

    //box3がフォーカスされる
    box3_focus: function () {
      console.log("box3がフォーカスされました。");
      //タイマー1を設定
      if (this.box3_showed == 0) {
        this.box3_t1 = setTimeout(this.show_box3_hint1, 10000);
      }
    },
    show_box3_hint1: function () {
      this.box3_hint_txt = "この行は　繰り返しを設定します。";
      this.box3_style.display = "inline-block";
      this.box3_showed = 1;
      //タイマー2を設定
      this.box3_t2 = setTimeout(this.show_box3_hint2, 10000);
    },
    show_box3_hint2: function () {
      this.box3_hint_txt = "ここには　繰り返し条件 が入ります。";
      this.box3_style.display = "inline-block";
      this.box3_style.background = "#e67b34";
      //タイマー3を設定
      this.box3_t3 = setTimeout(this.show_box3_hint3, 10000);
    },
    show_box3_hint3: function () {
      this.box3_hint_txt = "繰り返しのサンプルはこちら。";
      this.box3_style.display = "inline-block";
      this.box3_style.background = "#b913a3d3";
    },
    cancel_box3: function () {
      clearTimeout(this.box3_t1);
      console.log("ヒントの表示が取り消されました。");
    },

    //box4がフォーカスされる
    box4_focus: function () {
      console.log("box4がフォーカスされました。");
      //タイマー1を設定
      if (this.box4_showed == 0) {
        this.box4_t1 = setTimeout(this.show_box4_hint1, 10000);
      }
    },
    show_box4_hint1: function () {
      this.box4_hint_txt = "この行は　要素を出力します。";
      this.box4_style.display = "inline-block";
      this.box4_showed = 1;
      //タイマー2を設定
      this.box4_t2 = setTimeout(this.show_box4_hint2, 10000);
    },
    show_box4_hint2: function () {
      this.box4_hint_txt = "ここには　関数名 が入ります。";
      this.box4_style.display = "inline-block";
      this.box4_style.background = "#e67b34";
      //タイマー3を設定
      this.box4_t3 = setTimeout(this.show_box4_hint3, 10000);
    },
    show_box4_hint3: function () {
      this.box4_hint_txt = "入出力のサンプルはこちら。";
      this.box4_style.display = "inline-block";
      this.box4_style.background = "#b913a3d3";
    },
    cancel_box4: function () {
      clearTimeout(this.box4_t1);
      console.log("ヒントの表示が取り消されました。");
    },
  },
};

Vue.createApp(App).mount("#app");
