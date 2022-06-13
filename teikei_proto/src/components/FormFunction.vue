<template>
  <div class="cf_area">
    <div class="cf_left">
      <div class="form_area">
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style1"
          @focus="textarea_focus(0)"
          v-model="textarea_obj.textarea1"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style2"
          @focus="textarea_focus(1)"
          v-model="textarea_obj.textarea2"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style3"
          @focus="textarea_focus(2)"
          v-model="textarea_obj.textarea3"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style4"
          @focus="textarea_focus(3)"
          v-model="textarea_obj.textarea4"
        ></textarea
        ><br />
        <pre>int main(void){</pre>
        ><br />

        <pre>
}
        </pre>
      </div>
    </div>
    <div class="cf_right">
      <div class="hint_area">
        <table>
          <tr>
            <th class="left">ヒント</th>
            <th class="right">操作</th>
          </tr>
        </table>
        <button @click="send_code()">実行！</button>
      </div>
    </div>
    <CodeRun ref="codeInput" />
  </div>
</template>

<script>
import CodeRun from "./CodeRun.vue";

export default {
  name: "FormFunction",
  components: {
    CodeRun,
  },
  data() {
    return {
      //各テキストエリアの保持
      textarea_obj: {
        textarea1: "",
        textarea2: "",
        textarea3: "",
        textarea4: "",
      },
      //現在ハイライト中のテキストエリアを記録
      now_focus: null,
      //ヒントの表示オブジェクト
      hint_show_obj: {
        hint1: "", //インクルード
        hint2: "", //関数
      },
      //ヒントオブジェクト
      hint_obj: {
        hint1: "インクルード、マクロ",
        hint2: "関数の定義",
      },
      //各テキストエリアのスタイル設定
      textarea_style1: {
        background: "#ffffff",
      },
      textarea_style2: {
        background: "#ffffff",
      },
      textarea_style3: {
        background: "#ffffff",
      },
      textarea_style4: {
        background: "#ffffff",
      },
      textarea_style5: {
        background: "#ffffff",
      },
      //ヒントリストの各trスタイル設定
      hint_style1: {
        background: "#ffffff",
      },
      hint_style2: {
        background: "#ffffff",
      },
    };
  },
  methods: {
    //入力したコードを取り出し、結合して実行フォームに送る
    send_code: function () {
      const code = "";
      console.log(code);
      //CodeRunコンポーネントに送信
      this.$refs.codeInput.insertCode(code);
    },
    //フォーカスされたテキストエリアの背景を変更する関数
    textarea_focus: function (num) {
      //今、薄い黄色のテキストエリアがあったら、白に戻す
      if (this.now_focus != null) {
        switch (this.now_focus) {
          case 0:
            this.textarea_style1.background = "#ffffff";
            this.hint_style1.background = "#ffffff";
            break;
          case 1:
            this.textarea_style2.background = "#ffffff";
            this.hint_style2.background = "#ffffff";
            break;
          case 2:
            this.textarea_style3.background = "#ffffff";
            this.hint_style2.background = "#ffffff";
            break;
          case 3:
            this.textarea_style4.background = "#ffffff";
            this.hint_style2.background = "#ffffff";
            break;
        }
      }
      //フォーカスされたテキストエリアの背景を薄い黄色に変更
      switch (num) {
        //インクルード
        case 0:
          this.textarea_style1.background = "#fffed7";
          this.hint_style1.background = "#fffed7";
          this.hint_show_obj.hint1 = this.hint_obj.hint1;
          break;
        //関数
        case 1:
          this.textarea_style2.background = "#fffed7";
          this.hint_style2.background = "#fffed7";
          this.hint_show_obj.hint2 = this.hint_obj.hint2;
          break;
        case 2:
          this.textarea_style3.background = "#fffed7";
          this.hint_style2.background = "#fffed7";
          this.hint_show_obj.hint2 = this.hint_obj.hint2;
          break;
        case 3:
          this.textarea_style4.background = "#fffed7";
          this.hint_style2.background = "#fffed7";
          this.hint_show_obj.hint2 = this.hint_obj.hint2;
          break;
      }
      this.now_focus = num;
    },
  },
};
</script>

<style>
div.cf_area {
  width: 100%;
  height: auto;
}
div.cf_left {
  width: 50%;
  height: 1000px;
  float: left;
}
div.cf_right {
  width: 50%;
  height: 1000px;
  margin-left: 50%;
}
div.form_area {
  width: 80%;
  height: auto;
  margin: auto;
}
div.hint_area {
  width: 80%;
  height: auto;
  margin: auto;
}

/*テーブルの設定*/
table {
  border-collapse: collapse;
  margin-bottom: 30px;
}
table th.left,
table td.left {
  border: solid 1px black;
  padding: 10px;
  width: 500px;
}
table th.right,
table td.right {
  border: solid 1px black;
  padding: 10px;
  width: 100px;
}
</style>