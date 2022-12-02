<template>
  <div class="runArea" v-show="thisIsShow">
    <div class="runAreaLeft">
      <h1>プログラムの実行</h1>
      <p>
        連結したプログラムは下記の通りです。確認したら「実行」をクリックしてください。<br />
        入力がある場合は、「入力」テキストエリアに入力し、実行してください。
      </p>
      <div class="source">
        <p>＜連結したプログラム＞</p>
        <codemirror
          v-model="code"
          :style="codemirrorStyle"
          :autofocus="false"
          :indent-with-tab="true"
          :tab-size="4"
          :extensions="extensions"
          :disabled="true"
        />
        <!--<textarea cols="52" rows="30" v-model="code"> </textarea><br />-->
      </div>
    </div>
    <div class="runAreaRight">
      <div class="inputOutput">
        <p>＜入力＞</p>
        <textarea cols="40" rows="5" v-model="input"> </textarea><br />

        <button class="css-button-rounded--green" @click="run">実行！</button>

        <p>＜実行結果＞</p>
        <p :style="runResultStyle">{{ runResultTxt }}</p>
        <textarea cols="40" rows="5" v-model="outputErrTxt" disabled></textarea>
      </div>
      <div class="buttonArea">
        <button class="css-button-rounded--sand" @click="backForm()">
          フォームに戻る
        </button>
        <button class="css-button-rounded--green" @click="download">
          ダウンロード
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { oneDark } from "@codemirror/theme-one-dark";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";

export default {
  name: "CodeRun",
  components: {
    Codemirror,
  },
  data() {
    return {
      thisIsShow: false,

      //codemirrorの設定
      extensions: [cpp(), oneDark, keymap.of([indentWithTab])],

      code: "",
      input: "",
      outputErrTxt: "",
      runResultTxt: "まだ実行していません。",

      //スタイル
      codemirrorStyle: {
        width: "80%",
        height: "500px",
        "font-size": "14pt",
        overflow: scroll,
      },
      runResultStyle: {
        width: "200px",
        color: "#ffffff",
        background: "#3486eb",
      },
    };
  },
  methods: {
    /*
    insert_code: function (code) {
      if (code != null) {
        this.code = code;
      }
    },
    */
    insertCode: function (code) {
      this.code = "";
      this.code = code;
      this.thisIsShow = true;
    },
    //実行
    run: async function () {
      if (this.code == "") {
        alert("コードを入力してから押してください！");
      } else {
        let dataObj;
        if (this.input != "") {
          dataObj = {
            code: this.code,
            stdin: this.input,
            options: "warning,gnu++1y",
            compiler: "gcc-head",
            "compiler-option-raw": "-Dx=hogefuga\n-O3",
          };
        } else {
          dataObj = {
            code: this.code,
            options: "warning,gnu++1y",
            compiler: "gcc-head",
            "compiler-option-raw": "-Dx=hogefuga\n-O3",
          };
        }

        /*
        const data_obj = {
          code:
            '#include <iostream>\nint main() { int x = 0; std::cout << "hoge" << std::endl; }',
          options: "warning,gnu++1y",
          compiler: "gcc-head",
          "compiler-option-raw": "-Dx=hogefuga\n-O3",
        };*/

        const url = "https://wandbox.org/api/compile.json";

        let errMsg;

        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(dataObj),
          });
          if (!response.ok) {
            switch (response.status) {
              default:
                errMsg = "何らかの理由でエラーが発生しました。";
                throw new Error(errMsg);
            }
          } else {
            const responseData = await response.json();
            if (responseData.program_output != "") {
              this.outputErrTxt = responseData.program_output;
              this.runResultTxt = "実行成功";
              this.runResultStyle.background = "#42cf1f";
            } else if (responseData.compiler_message != "") {
              this.outputErrTxt = responseData.compiler_message;
              this.runResultTxt = "エラー";
              this.runResultStyle.background = "#ed1111";
            }
            console.log(responseData);
          }
        } catch (errMsg) {
          alert(errMsg);
        }
      }
    },
    //cファイルを作成してダウンロードする関数
    /*download: async function () {
      if (this.code != null) {
        const data = this.code;
        //問題名を取得
        let url = new URL(window.location.href); //現在のURLを取得
        //オブジェクトを取得
        const params = url.searchParams;
        //getメソッドでジャンルidを取得
        const form_id = params.get("id");
        //Blob APIを利用
        const blob = new Blob([data], { type: "text/plain" });
        url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a); //擬似的にリンクを作成
        let file_name = "cf_" + this.student_id + "_";

        //問題番号に応じてファイル名に追記
        if (form_id == 0) {
          file_name = file_name + "a.c";
        } else if (form_id == 1) {
          file_name = file_name + "b.c";
        }

        a.download = file_name;
        a.href = url;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
    },*/
    backForm: function () {
      //コードと実行結果をリセットする
      this.thisIsShow = false;
      this.input = "";
      this.outputErrTxt = "";
      this.runResultTxt = "まだ実行していません。";
      this.runResultStyle.background = "#3486eb";
    },
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
div.runArea {
  width: 100%;
  height: 1000px;
  top: 0;
  left: 0;
  position: fixed;
  background: #ffffff;
  padding: 30px;
}
div.runAreaLeft {
  width: 50%;
  height: auto;
  float: left;
}
div.source {
  width: 90%;
  height: auto;
}
div.runAreaRight {
  width: 50%;
  height: auto;
  margin-left: 50%;
}
div.inputOutput {
  width: 90%;
  height: auto;
  margin-top: 100px;
}
div.buttonArea {
  width: 90%;
  height: auto;
}

button.css-button-rounded--green {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #57cc99;
  background: #57cc99;
}
button.css-button-rounded--green:hover {
  background: #fff;
  color: #57cc99;
}
button.css-button-rounded--green:disabled {
  color: #fff;
  border: 2px solid #a7cfbe;
  background: #a7cfbe;
}
button.css-button-rounded--sand {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #adb5bd;
  background: #adb5bd;
}
button.css-button-rounded--sand:hover {
  background: #fff;
  color: #adb5bd;
}
button.css-button-rounded--sand:disabled {
  color: #fff;
  border: 2px solid #d6d6d6;
  background: #d6d6d6;
}
</style>