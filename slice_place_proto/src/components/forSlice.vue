<template>
  <div class="funcSliceArea">
    <h1>繰り返し（for）</h1>
    <div class="codeArea">
      <pre>
                <input type="text" size="10" @focus="showHint1" @blur="closeHint1"><div class="drag-and-drop" :style="hintStyleObj.hint1">{{hintObj.hint1}}</div>;
                for (<input type="text" size="10" @focus="showHint2" @blur="closeHint2"><div class="drag-and-drop" :style="hintStyleObj.hint2">{{hintObj.hint2}}</div>; <input type="text" size="10" @focus="showHint3" @blur="closeHint3"><div class="drag-and-drop" :style="hintStyleObj.hint3">{{hintObj.hint3}}</div>; <input type="text" size="10" @focus="showHint4" @blur="closeHint4"><div class="drag-and-drop" :style="hintStyleObj.hint4">{{hintObj.hint4}}</div>) {
                    //処理を書く
                }
        </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "forSlice",
  data() {
    return {
      //コーディングフォームから、引数の有無や引数の数（追加数）が渡される
      addArgCnt: 2,
      argIsUsed: true,
      hintObj: {
        hint1:
          "添字の宣言：繰り返すうちの何番目かを表す「添字」用として変数を宣言",
        hint2:
          "添字の初期化：繰り返すうちの何番目なのかを表す添字変数を、初期状態にする",
        hint3: "繰り返す条件（条件式）",
        hint4: "添字の更新（インクリメント）",
      },

      hintStyleObj: {
        hint1: {
          position: "absolute",
          background: "#6cb913d3",
          color: "white",
          "font-size": "0.8em",
          "border-radius": "0.5em",
          padding: "10px",
          margin: "-0.8em 0.5em 0 1em",
          display: "none",
        },
        hint2: {
          position: "absolute",
          background: "#6cb913d3",
          color: "white",
          "font-size": "0.8em",
          "border-radius": "0.5em",
          padding: "10px",
          margin: "-0.8em 0.5em 0 1em",
          display: "none",
        },
        hint3: {
          position: "absolute",
          background: "#6cb913d3",
          color: "white",
          "font-size": "0.8em",
          "border-radius": "0.5em",
          padding: "10px",
          margin: "-0.8em 0.5em 0 1em",
          display: "none",
        },
        hint4: {
          position: "absolute",
          background: "#6cb913d3",
          color: "white",
          "font-size": "0.8em",
          "border-radius": "0.5em",
          padding: "10px",
          margin: "-0.8em 0.5em 0 1em",
          display: "none",
        },
      },
    };
  },
  methods: {
    showHint1: function () {
      this.hintStyleObj.hint1.display = "inline-block";
    },
    closeHint1: function () {
      this.hintStyleObj.hint1.display = "none";
    },
    showHint2: function () {
      this.hintStyleObj.hint2.display = "inline-block";
    },
    closeHint2: function () {
      this.hintStyleObj.hint2.display = "none";
    },
    showHint3: function () {
      this.hintStyleObj.hint3.display = "inline-block";
    },
    closeHint3: function () {
      this.hintStyleObj.hint3.display = "none";
    },
    showHint4: function () {
      this.hintStyleObj.hint4.display = "inline-block";
    },
    closeHint4: function () {
      this.hintStyleObj.hint4.display = "none";
    },
  },
};
</script>

<style>
pre {
  font-size: 18pt;
}
input {
  font-size: 18pt;
}
div.addArgTextArea {
  display: inline;
}
</style>
