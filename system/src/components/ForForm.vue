<template>
  <div>
    <h1>繰り返し（for）フォーム</h1>
    <h2>＜プログラム＞</h2>
    <div class="codeArea">
      <pre class="comment">
          //<textarea v-model="commentTxt" cols="50" rows="1">//ここに処理の説明を書きます</textarea>
        </pre>
      <pre>
          //以下に、カウント変数の宣言を記述
          <select v-model="variableType" name="type" @focus="showHint1" @blur="closeHint1"><option value="int">int（整数型）</option><option value="float">float（4バイト実数）</option><option value="double">double（8バイト実数）</option><option value="char">char（符号付き整数、1バイト文字）</option></select><div class="drag-and-drop" :style="hintStyleObj.hint1">{{hintObj.hint1}}</div> <input v-model="variableNameDef" type="text" size="5" @focus="showHint2" @blur="closeHint2"><div class="drag-and-drop" :style="hintStyleObj.hint2">{{hintObj.hint2}}</div>;
          //以下に、カウント変数の初期化; 処理の継続条件の式; カウント変数の増減; を記述
          for (<input v-model="variableName" type="text" size="5" @focus="showHint3" @blur="closeHint3"><div class="drag-and-drop" :style="hintStyleObj.hint3">{{hintObj.hint3}}</div>; <input v-model="left" type="text" size="5" @focus="showHint4" @blur="closeHint4"><div class="drag-and-drop" :style="hintStyleObj.hint4">{{hintObj.hint4}}</div> <select v-model="compareType" name="type" @focus="showHint5" @blur="closeHint5"><option value="==">==（等しい）</option><option value="!=">!=（等しくない）</option><option value="<">&lt;（小さい）</option><option value=">">>（大きい）</option><option value="<=">&lt;=（以下）</option><option value=">=">>=（以上）</option></select><div class="drag-and-drop" :style="hintStyleObj.hint5">{{hintObj.hint5}}</div> <input v-model="right" type="text" size="5" @focus="showHint6" @blur="closeHint6"><div class="drag-and-drop" :style="hintStyleObj.hint6">{{hintObj.hint6}}</div>; <input v-model="incrementVariable" type="text" size="5" @focus="showHint7" @blur="closeHint7"><div class="drag-and-drop" :style="hintStyleObj.hint7">{{hintObj.hint7}}</div><select v-model="incrementType" name="type" @focus="showHint8" @blur="closeHint8"><option value="++">++（1ずつ増やす）</option><option value="--">--（1ずつ減らす）</option></select><div class="drag-and-drop" :style="hintStyleObj.hint8">{{hintObj.hint8}}</div>) {
            <codemirror
                v-model="bodyTxt"
                placeholder="コードを書く"
                :style="{
                  width: '1300px',
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
    </div>
    <button type="button" @click="connectCode()">結合！</button>
  </div>
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";

export default {
  name: "ForForm.vue",
  components: {
    Codemirror,
  },
  data() {
    return {
      hintObj: {
        hint1: "変数の型",
        hint2: "変数（カウント用）の宣言",
        hint3: "変数（カウント用）の初期化",
        hint4: "変数名（カウント用）",
        hint5: "比較演算子",
        hint6: "変数名（比較先）",
        hint7: "変数名（カウント用）",
        hint8: "変数（カウント用）の増減",
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
        hint5: {
          position: "absolute",
          background: "#6cb913d3",
          color: "white",
          "font-size": "0.8em",
          "border-radius": "0.5em",
          padding: "10px",
          margin: "-0.8em 0.5em 0 1em",
          display: "none",
        },
        hint6: {
          position: "absolute",
          background: "#6cb913d3",
          color: "white",
          "font-size": "0.8em",
          "border-radius": "0.5em",
          padding: "10px",
          margin: "-0.8em 0.5em 0 1em",
          display: "none",
        },
        hint7: {
          position: "absolute",
          background: "#6cb913d3",
          color: "white",
          "font-size": "0.8em",
          "border-radius": "0.5em",
          padding: "10px",
          margin: "-0.8em 0.5em 0 1em",
          display: "none",
        },
        hint8: {
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

      //記述内容を格納
      commentTxt: "ここに説明（コメント）を書きます",
      variableType: "",
      variableNameDef: "",
      variableName: "",
      left: "",
      compareType: "",
      right: "",
      incrementVariable: "",
      incrementType: "",
      bodyTxt: "",

      //codemirrorの設定
      extensions: [cpp(), keymap.of([indentWithTab])],
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
    showHint5: function () {
      this.hintStyleObj.hint5.display = "inline-block";
    },
    closeHint5: function () {
      this.hintStyleObj.hint5.display = "none";
    },
    showHint6: function () {
      this.hintStyleObj.hint6.display = "inline-block";
    },
    closeHint6: function () {
      this.hintStyleObj.hint6.display = "none";
    },
    showHint7: function () {
      this.hintStyleObj.hint7.display = "inline-block";
    },
    closeHint7: function () {
      this.hintStyleObj.hint7.display = "none";
    },
    showHint8: function () {
      this.hintStyleObj.hint8.display = "inline-block";
    },
    closeHint8: function () {
      this.hintStyleObj.hint8.display = "none";
    },

    connectCode: function () {
      let connectedCode = "";
      //コメント
      connectedCode = connectedCode + "//" + this.commentTxt + "\n";
      //カウント変数定義
      connectedCode =
        connectedCode + this.variableType + " " + this.variableNameDef + ";\n";
      //継続条件
      connectedCode =
        connectedCode +
        "for (" +
        this.variableName +
        "; " +
        this.left +
        " " +
        this.compareType +
        " " +
        this.right +
        "; " +
        this.incrementVariable +
        this.incrementType +
        ") {\n";
      //中身の処理
      connectedCode = connectedCode + this.bodyTxt + "\n}";
      this.copyToClipboard(connectedCode);
    },
    copyToClipboard: function (text) {
      // テキストコピー用の一時要素を作成
      const pre = document.createElement("pre");
      // テキストを選択可能にしてテキストセット
      pre.style.webkitUserSelect = "auto";
      pre.style.userSelect = "auto";
      pre.textContent = text;
      // 要素を追加、選択してクリップボードにコピー
      document.body.appendChild(pre);
      document.getSelection().selectAllChildren(pre);
      const result = document.execCommand("copy");
      // 要素を削除
      document.body.removeChild(pre);
      return result;
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
input {
  font-size: 18pt;
}
textarea {
  font-size: 18pt;
}
</style>
