<template>
  <div class="run_area">
    <h1>ソースコードの実行</h1>
    <p>
      完成したプログラムは下記の通りです。確認したら「実行」をクリックしてください。<br />
      入力がある場合は、「入力」テキストエリアに入力し、実行してください。
    </p>
    <div class="source">
      <p>＜ソース＞</p>
      <textarea cols="80" rows="30" v-model="code"> </textarea><br />
    </div>
    <div class="input_output">
      <p>入力：</p>
      <textarea cols="70" rows="5" v-model="input"> </textarea><br />

      <button @click="run">実行！</button>
      <button @click="download">ダウンロード</button>
      <p>＜実行結果＞</p>
      <p>
        出力：<br />
        <textarea cols="70" rows="5" v-model="output_txt" disabled></textarea
        ><br />
      </p>

      <p>
        エラー：<br />
        <textarea cols="70" rows="5" v-model="err_txt" disabled></textarea
        ><br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeRun",
  data() {
    return {
      student_id: "", //学籍番号
      code: "",
      input: "",
      output_txt: "",
      err_txt: "",
    };
  },
  methods: {
    insertCode: function (code) {
      if (code != null) {
        this.code = code;
      }
    },
    //学籍番号のセット
    set_student_id: function (id) {
      this.student_id = id;
    },
    //実行
    run: async function () {
      if (this.code == "") {
        alert("コードを入力してから押してください！");
      } else {
        let data_obj;
        if (this.input != "") {
          data_obj = {
            code: this.code,
            stdin: this.input,
            options: "warning,gnu++1y",
            compiler: "gcc-head",
            "compiler-option-raw": "-Dx=hogefuga\n-O3",
          };
        } else {
          data_obj = {
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

        let err_msg;

        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data_obj),
          });
          if (!response.ok) {
            switch (response.status) {
              default:
                err_msg = "何らかの理由でエラーが発生しました。";
                throw new Error(err_msg);
            }
          } else {
            const response_data = await response.json();
            this.output_txt = response_data.program_output;
            this.err_txt = response_data.compiler_message;
            console.log(response_data);
          }
        } catch (err_msg) {
          alert(err_msg);
        }
      }
    },
    //cファイルを作成してダウンロードする関数
    download: async function () {
      if (this.code != null) {
        const data = this.code;
        //Blob APIを利用
        const blob = new Blob([data], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a); //擬似的にリンクを作成
        const file_name = this.student_id + "_test.c";
        a.download = file_name;
        a.href = url;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
    },
  },
};
</script>

<style>
div.run_area {
  width: 100%;
  height: auto;
  margin: 100px 30px;
}
div.source {
  width: 50%;
  height: auto;
  float: left;
}
div.input_output {
  width: 50%;
  height: auto;
  margin-left: 50%;
}
</style>