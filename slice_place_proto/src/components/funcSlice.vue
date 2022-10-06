<template>
  <div class="funcSliceArea">
    <h1>関数</h1>
    <div class="codeArea">
      <pre>
                <input type="text" size="10" @focus="showHint1" @blur="closeHint1"><div class="drag-and-drop" :style="hintStyleObj.hint1">{{hintObj.hint1}}</div> <input type="text" size="15">(<input type="text" size="10" v-show="argIsUsed" @focus="showHint3" @blur="closeHint3"><div class="addArgTextArea" v-for="i of addArgCnt" :key="i">,<input type="text" size="10" @focus="showHint3" @blur="closeHint3"></div><div class="drag-and-drop" :style="hintStyleObj.hint3">{{hintObj.hint3}}</div>) {
                    //処理
                }
        </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "funcSlice",
  data() {
    return {
      addArgCnt: 2,
      argIsUsed: true,
      hintObj: {
        hint1: "変数の型",
        hint2: "関数名",
        hint3: "関数の引数",
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
