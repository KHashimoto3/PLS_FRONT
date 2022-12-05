<template>
  <div>
    <h1>関数定義フォーム</h1>
    <div class="commentArea">
      <pre>
          /*
          <textarea v-model="commentTxt" class="comment" cols="50" rows="5" @focus="showHint5" @blur="closeHint5">ここに関数の説明（コメント）を書きます</textarea><div class="drag-and-drop" :style="hintStyleObj.hint5">{{hintObj.hint5}}</div>
          */
        </pre>
    </div>
    <div class="codeArea">
      <pre v-if="mode == 1">
          <select v-model="retType" name="type" @focus="showHint1" @blur="closeHint1" ><option value="void">void（返し値なし）</option><option value="int">int（整数型）</option><option value="float">float（4バイト実数）</option><option value="double">double（8バイト実数）</option><option value="char">char（符号付き整数、1バイト文字）</option></select><div class="drag-and-drop" :style="hintStyleObj.hint1">{{hintObj.hint1}}</div> <input v-model="funcNameTxt" type="text" size="15" @focus="showHint2" @blur="closeHint2"><div class="drag-and-drop" :style="hintStyleObj.hint2">{{hintObj.hint2}}</div><div class="noArgDisp" v-show="!argIsUsed">( ) {</div>
        </pre>
      <pre v-if="mode == 2">
          <select v-model="retType" name="type" @focus="showHint1" @blur="closeHint1" ><option value="void">void（返し値なし）</option><option value="int">int（整数型）</option><option value="float">float（4バイト実数）</option><option value="double">double（8バイト実数）</option><option value="char">char（符号付き整数、1バイト文字）</option></select><div class="drag-and-drop" :style="hintStyleObj.hint1">{{hintObj.hint1}}</div> <input v-model="funcNameTxt" type="text" size="15" @focus="showHint2" @blur="closeHint2"><div class="drag-and-drop" :style="hintStyleObj.hint2">{{hintObj.hint2}}</div>
          (<div class="argArea" v-for="i in argCnt" :key="i"><select v-model="argType[i]" name="type" @focus="showHint3" @blur="closeHint3"><option value="int">int（整数型）</option><option value="float">float（4バイト実数）</option><option value="double">double（8バイト実数）</option><option value="char">char（符号付き整数、1バイト文字）</option><option value="int*">int* （整数型ポインタ）</option><option value="float*">float*（実数型ポインタ）</option><option value="double*">double*（実数型ポインタ）</option><option value="char">char*（符号付き整数、文字 ポインタ）</option></select><div class="drag-and-drop" :style="hintStyleObj.hint3">{{hintObj.hint3}}</div> <input v-model="argNameTxt[i]" type="text" size="15" @focus="showHint4" @blur="closeHint4"><div class="drag-and-drop" :style="hintStyleObj.hint4">{{hintObj.hint4}}</div>    //第{{i}}引数：<input v-model="argComment[i]" type="text" size="15"><span v-if="i < argCnt">, </span><br>           </div>
        </pre>
      <pre>
          ) {
            <codemirror
                v-model="bodyTxt"
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
            //返却値として設定した型の数値を結果として返却（return）する必要があります。
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
  name: "func_form.vue",
  components: {
    Codemirror,
  },
  data() {
    return {
      /*
      mode：引数のモードがコーディングフォームから渡される
      1：引数なし
      2：引数あり
      argCnt: 引数の個数がコーディングフォームから渡される（引数なしなら0）
      */
      mode: 2,
      argCnt: 2,

      hintObj: {
        hint1: "処理後に呼び出し元に返す値の型",
        hint2: "関数名",
        hint3: "関数に渡された値の型",
        hint4: "渡された値を受け取る変数名",
        hint5:
          "コメントの例-------\n関数名: sum\n内　容: 2つの整数の合計を求める\n引数1: 1つ目の値\n引数2: 2つ目の値\n返し値: 2つの値の合計値",
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
      },

      //記述内容を格納する
      commentTxt: "ここに関数の説明（コメント）を書きます",
      retType: "",
      funcNameTxt: "",
      argType: [],
      argNameTxt: [],
      argComment: [],
      bodyTxt: "",

      //codemirrorの設定
      extensions: [cpp(), keymap.of([indentWithTab])],
    };
  },
  methods: {
    //親コンポーネントからのフォーム設定処理
    setUpForm: function (mode, cnt) {
      //例外処理
      if (mode != 1 && mode != 2) return;
      if (cnt < 0) return;
      this.mode = mode;
      this.argCnt = cnt;
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
    showHint5: function () {
      this.hintStyleObj.hint5.display = "inline-block";
    },
    closeHint5: function () {
      this.hintStyleObj.hint5.display = "none";
    },

    connectCode: function () {
      let connectedCode = "";
      //コメント
      connectedCode = connectedCode + "/*\n" + this.commentTxt + "\n*/\n";
      //返し値と関数名
      connectedCode = connectedCode + this.retType + " " + this.funcNameTxt;
      //引数の型と名前
      if (this.mode == 1) {
        connectedCode += "() {\n";
      } else {
        connectedCode += "\n (\n";
        /*
        引数の型と名前を順番に取り出して確認する
        argTypeとargNameTxtの0番目は、nullが格納されているため、添字は1から始める
        最後の引数は、ループ外で取得するため、1つ手前でループを終了
        */
        let connectedArg = "";
        for (let i = 1; i < this.argCnt; i++) {
          connectedArg =
            connectedArg +
            this.argType[i] +
            " " +
            this.argNameTxt[i] +
            "     //第" +
            i +
            "引数: " +
            this.argComment[i] +
            ",\n       ";
        }
        connectedArg =
          connectedArg +
          this.argType[this.argCnt] +
          " " +
          this.argNameTxt[this.argCnt] +
          "     //第" +
          this.argCnt +
          "引数: " +
          this.argComment[this.argCnt] +
          "\n) {\n";
        connectedCode += connectedArg;
      }
      //中身の処理
      connectedCode = connectedCode + this.bodyTxt + "\n}";
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
input {
  font-size: 18pt;
}
div.noArgDisp {
  display: inline;
}
div.commentArea {
  color: #007d28;
}
div.commentArea input {
  color: #007d28;
}
div.commentArea textarea {
  color: #007d28;
}
div.commentArea select {
  color: #007d28;
}
div.argArea {
  display: inline;
}
textarea {
  font-size: 18pt;
}
</style>
