<template>
  <div>
    <h1>条件分岐（if）フォーム</h1>
    <h2>＜プログラム＞</h2>
    <div class="codeArea">
      <pre class="comment">
          //<textarea v-model="commentTxt" cols="50" rows="1">//ここに処理の説明を書きます</textarea>
          //以下に、処理を実行する条件の式を記述
        </pre>
      <pre v-if="conditionMode == 1">
          if (<input v-model="leftVariable" type="text" size="5" @focus="showHint1" @blur="closeHint1"><div class="drag-and-drop" :style="hintStyleObj.hint1">{{hintObj.hint1}}</div> <select v-model="compareType" name="type" @focus="showHint2" @blur="closeHint2"><option value="==">==（等しい）</option><option value="!=">!=（等しくない）</option><option value="<">&lt;（小さい）</option><option value=">">>（大きい）</option><option value="<=">&lt;=（以下）</option><option value="=>">>=（以上）</option></select><div class="drag-and-drop" :style="hintStyleObj.hint2">{{hintObj.hint2}}</div> <input v-model="rightVariable" type="text" size="5" @focus="showHint3" @blur="closeHint3"><div class="drag-and-drop" :style="hintStyleObj.hint3">{{hintObj.hint3}}</div>) {
          </pre>
      <pre v-if="conditionMode == 2">
          if (<input v-model="variable" type="text" size="10" @focus="showHint4" @blur="closeHint4"><div class="drag-and-drop" :style="hintStyleObj.hint4">{{hintObj.hint4}}</div>) {
          </pre>
      <pre v-if="conditionMode == 3">
          if (<div class="conditionArea" v-for="i of conditionCnt" :key="i">(<input v-model="leftVariableList[i]" type="text" size="5" @focus="showHint1" @blur="closeHint1"><div class="drag-and-drop" :style="hintStyleObj.hint1">{{hintObj.hint1}}</div> <select v-model="compareTypeList[i]" name="type" @focus="showHint2" @blur="closeHint2"><option value="==">==（等しい）</option><option value="!=">!=（等しくない）</option><option value="<">&lt;（小さい）</option><option value=">">>（大きい）</option><option value="<=">&lt;=（以下）</option><option value=">=">>=（以上）</option></select><div class="drag-and-drop" :style="hintStyleObj.hint2">{{hintObj.hint2}}</div> <input v-model="rightVariableList[i]" type="text" size="5" @focus="showHint3" @blur="closeHint3"><div class="drag-and-drop" :style="hintStyleObj.hint3">{{hintObj.hint3}}</div>) <select v-model="connectCompareTypeList[i]" name="type" v-if="i < conditionCnt"><option value="&&">&&（かつ）</option><option value="||">||（または）</option></select><span v-if="i == conditionCnt">)</span><br>              </div>{
        </pre>
      <pre v-show="!elseIsUsed">
            //条件が成立したときに実行する処理
            <codemirror
                v-model="ifBodyTxt"
                placeholder="コードを書く"
                :style="{
                  width: '1200px',
                  height: 'auto',
                  'font-size': '18pt',
                  'margin-left':'140px'
                }"
                :autofocus="false"
                :indent-with-tab="false"
                :tab-size="4"
                :extensions="extensions"
              />
          }
        </pre>
      <pre v-show="elseIsUsed">
            //条件が成立したときに実行する処理
            <codemirror
                v-model="ifBodyTxt"
                placeholder="コードを書く"
                :style="{
                  width: '1200px',
                  height: 'auto',
                  'font-size': '18pt',
                  'margin-left':'140px'
                }"
                :autofocus="false"
                :indent-with-tab="false"
                :tab-size="4"
                :extensions="extensions"
              />
          } else {
            //条件が成立しなかったときに実行する処理
            <codemirror
                v-model="elseBodyTxt"
                placeholder="コードを書く"
                :style="{
                  width: '1000px',
                  height: 'auto',
                  'font-size': '18pt',
                  'margin-left':'140px'
                }"
                :autofocus="false"
                :indent-with-tab="false"
                :tab-size="4"
                :extensions="extensions"
              />
          }
        </pre>
      <button type="button" @click="connectCode()">結合！</button>
    </div>
  </div>
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";

export default {
  name: "if_form.vue",
  components: {
    Codemirror,
  },
  data() {
    return {
      //記述内容を格納
      commentTxt: "ここに説明（コメント）を書きます",
      leftVariable: "",
      compareType: "",
      rightVariable: "",
      variable: "",
      leftVariableList: [],
      compareTypeList: [],
      rightVariableList: [],
      connectCompareTypeList: [],
      ifBodyTxt: "",
      elseBodyTxt: "",

      /*
      conditionMode：条件式のモードがコーディングフォームから渡される
      1：１つの条件（比較元＋比較演算子＋比較先）
      2：比較演算子なし（C言語の場合は0とNULLがfalse、0以外がtrue  これを調べる）
      3: 複数条件記述
      */
      conditionMode: 1,
      conditionCnt: 2,
      elseIsUsed: false,

      hintObj: {
        hint1: "変数名（比較元）",
        hint2: "比較演算子",
        hint3: "変数名（比較先）",
        hint4: "判定用の変数名または関数名",
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

      //codemirrorの設定
      extensions: [cpp(), keymap.of([indentWithTab])],
    };
  },
  methods: {
    //親コンポーネントからのフォーム設定処理
    setUpForm: function (data) {
      const mode = data.mode;
      const cnt = data.cnt;
      const elseIsUsed = data.elseIsUsed;
      //例外処理
      if (mode < 1 || mode > 3) return;
      if (cnt < 1) return;
      if (elseIsUsed != true && elseIsUsed != false) return;

      this.conditionMode = mode;
      this.conditionCnt = cnt;
      this.elseIsUsed = elseIsUsed;
      return;
    },

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

    connectCode: function () {
      let connectedCode = "";
      //コメント
      connectedCode = connectedCode + "//" + this.commentTxt + "\n";
      //分岐条件
      if (this.conditionMode == 1) {
        connectedCode =
          connectedCode +
          "if (" +
          this.leftVariable +
          " " +
          this.compareType +
          " " +
          this.rightVariable +
          ") {\n";
      } else if (this.conditionMode == 2) {
        connectedCode = connectedCode + "if (" + this.variable + ") {\n";
      } else if (this.conditionMode == 3) {
        connectedCode += "if (";
        /*
          比較元+比較演算子+比較先を順番に取り出して確認する
          leftVariableList、compareTypeList、rightVariableList、connectCompareTypeListの0番目は、nullが格納されているため、添字は1から始める
          最後のものは、ループ外で取得するため、1つ手前でループを終了
          */
        let connectedCondition = "";
        for (let i = 1; i < this.conditionCnt; i++) {
          connectedCondition =
            connectedCondition +
            "(" +
            this.leftVariableList[i] +
            " " +
            this.compareTypeList[i] +
            " " +
            this.rightVariableList[i] +
            ") " +
            this.connectCompareTypeList[i] +
            "\n   ";
        }
        connectedCondition =
          connectedCondition +
          "(" +
          this.leftVariableList[this.conditionCnt] +
          " " +
          this.compareTypeList[this.conditionCnt] +
          " " +
          this.rightVariableList[this.conditionCnt] +
          "))\n{\n";
        connectedCode += connectedCondition;
      }
      //中身の処理（if）
      connectedCode = connectedCode + this.ifBodyTxt + "\n}";
      //中身の処理（else）
      if (this.elseIsUsed) {
        connectedCode = connectedCode + " else {\n" + this.elseBodyTxt + "\n}";
      }
      return connectedCode;
    },
  },
};
</script>

<style scoped>
pre {
  font-size: 18pt;
  margin: 0;
}
pre.comment {
  color: #007d28;
}
pre.comment textarea {
  color: #007d28;
}
div.conditionArea {
  display: inline;
}
input {
  font-size: 18pt;
}
textarea {
  font-size: 18pt;
}
</style>
