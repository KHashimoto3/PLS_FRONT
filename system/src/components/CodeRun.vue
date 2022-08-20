<template>
  <div class="runArea" v-show="thisIsShow">
    <h1>ソースコードの実行</h1>
    <p>
      完成したプログラムは下記の通りです。確認したら「実行」をクリックしてください。<br />
      入力がある場合は、「入力」テキストエリアに入力し、実行してください。
    </p>
    <div class="source">
      <p>＜ソース＞</p>
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
    <div class="inputOutput">
      <p>入力：</p>
      <textarea cols="30" rows="5" v-model="input"> </textarea><br />

      <button @click="run">実行！</button>
      <button @click="download">ダウンロード</button>
      <p>＜実行結果＞</p>
      <p>
        出力：<br />
        <textarea cols="30" rows="5" v-model="outputTxt" disabled></textarea
        ><br />
      </p>

      <p>
        エラー：<br />
        <textarea cols="55" rows="8" v-model="errTxt" disabled></textarea><br />
      </p>
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
      outputTxt: "",
      errTxt: "",

      //スタイル
      codemirrorStyle: {
        width: "80%",
        height: "500px",
        "font-size": "14pt",
        overflow: scroll,
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
            this.outputTxt = responseData.program_output;
            this.errTxt = responseData.compiler_message;
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
  },
};
</script>

<style>
div.runArea {
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  position: fixed;
  background: #ffffff;
  padding: 30px;
}
div.source {
  width: 50%;
  height: auto;
  float: left;
}
div.inputOutput {
  width: 50%;
  height: auto;
  margin-left: 50%;
}
</style>