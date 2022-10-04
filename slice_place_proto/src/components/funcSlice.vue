<template>
  <div class="funcSliceArea">
    <h1>関数</h1>
    <div class="codeArea">
      <pre>
                <input type="text" size="10" @focus="showHint1" @blur="closeHint1"><div class="drag-and-drop" :style="hintStyleObj.hint1">{{hintObj.hint1}}</div> <input type="text" size="15">(<input type="text" size="10">, <input type="text" size="10">) {
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
      hintObj: {
        hint1: "変数の型",
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
</style>
