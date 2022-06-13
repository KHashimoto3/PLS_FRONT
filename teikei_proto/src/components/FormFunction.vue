<template>
  <div class="cf_area" v-show="form_isShow">
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
        <br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style5"
          @focus="textarea_focus(4)"
          v-model="textarea_obj.textarea5"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style6"
          @focus="textarea_focus(5)"
          v-model="textarea_obj.textarea6"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style7"
          @focus="textarea_focus(6)"
          v-model="textarea_obj.textarea7"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style8"
          @focus="textarea_focus(7)"
          v-model="textarea_obj.textarea8"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style9"
          @focus="textarea_focus(8)"
          v-model="textarea_obj.textarea9"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style10"
          @focus="textarea_focus(9)"
          v-model="textarea_obj.textarea10"
        ></textarea
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
          <tr :style="hint_style1">
            <td class="left">{{ hint_show_obj.hint1 }}</td>
            <td class="right"><button>サンプル</button></td>
          </tr>
          <tr :style="hint_style2">
            <td class="left">{{ hint_show_obj.hint2 }}</td>
            <td class="right"><button>サンプル</button></td>
          </tr>
          <tr :style="hint_style3">
            <td class="left">{{ hint_show_obj.hint3 }}</td>
            <td class="right"><button>サンプル</button></td>
          </tr>
          <tr :style="hint_style4">
            <td class="left">{{ hint_show_obj.hint4 }}</td>
            <td class="right"><button>サンプル</button></td>
          </tr>
          <tr :style="hint_style5">
            <td class="left">{{ hint_show_obj.hint5 }}</td>
            <td class="right"><button>サンプル</button></td>
          </tr>
          <tr :style="hint_style6">
            <td class="left">{{ hint_show_obj.hint6 }}</td>
            <td class="right"><button>サンプル</button></td>
          </tr>
          <tr :style="hint_style7">
            <td class="left">{{ hint_show_obj.hint7 }}</td>
            <td class="right"><button>サンプル</button></td>
          </tr>
          <tr :style="hint_style8">
            <td class="left">{{ hint_show_obj.hint8 }}</td>
            <td class="right"><button>サンプル</button></td>
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
      form_isShow: false,
      //各テキストエリアの保持
      textarea_obj: {
        textarea1: "",
        textarea2: "",
        textarea3: "",
        textarea4: "",
        textarea5: "",
        textarea6: "",
        textarea7: "",
        textarea8: "",
        textarea9: "",
        textarea10: "",
      },
      //現在ハイライト中のテキストエリアを記録
      now_focus: null,
      //学籍番号
      student_id: "",
      //ヒントの表示オブジェクト
      hint_show_obj: {
        hint1: "", //インクルード
        hint2: "", //関数
        hint3: "", //変数宣言
        hint4: "", //入力
        hint5: "", //代入,計算処理
        hint6: "", //関数利用,返却値
        hint7: "", //代入,計算処理
        hint8: "", //返却値に応じた処理
      },
      //ヒントオブジェクト
      hint_obj: {
        hint1: "インクルード、マクロ",
        hint2: "関数の定義",
        hint3: "変数, 配列の宣言",
        hint4: "データの入力/ループによる入力",
        hint5: "代入/計算処理",
        hint6: "関数の利用/返却値の格納",
        hint7: "代入/計算処理",
        hint8: "返却値に応じた処理（代入/計算/出力）",
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
      textarea_style6: {
        background: "#ffffff",
      },
      textarea_style7: {
        background: "#ffffff",
      },
      textarea_style8: {
        background: "#ffffff",
      },
      textarea_style9: {
        background: "#ffffff",
      },
      textarea_style10: {
        background: "#ffffff",
      },
      //ヒントリストの各trスタイル設定
      hint_style1: {
        background: "#ffffff",
      },
      hint_style2: {
        background: "#ffffff",
      },
      hint_style3: {
        background: "#ffffff",
      },
      hint_style4: {
        background: "#ffffff",
      },
      hint_style5: {
        background: "#ffffff",
      },
      hint_style6: {
        background: "#ffffff",
      },
      hint_style7: {
        background: "#ffffff",
      },
      hint_style8: {
        background: "#ffffff",
      },
    };
  },
  methods: {
    //フォームの表示
    show_form: function () {
      this.form_isShow = true;
    },
    //フォームの非表示
    no_show_form: function () {
      this.form_isShow = false;
    },
    //学籍番号のセット
    set_student_id: function (id) {
      this.student_id = id;
    },
    //入力したコードを取り出し、結合して実行フォームに送る
    send_code: function () {
      const code =
        this.textarea_obj.textarea1 +
        "\n" +
        this.textarea_obj.textarea2 +
        "\n" +
        this.textarea_obj.textarea3 +
        "\n" +
        this.textarea_obj.textarea4 +
        "\nint main(void){\n" +
        this.textarea_obj.textarea5 +
        "\n" +
        this.textarea_obj.textarea6 +
        "\n" +
        this.textarea_obj.textarea7 +
        "\n" +
        this.textarea_obj.textarea8 +
        "\n" +
        this.textarea_obj.textarea9 +
        "\n" +
        this.textarea_obj.textarea10 +
        "\n}\n";
      console.log(code);
      //CodeRunコンポーネントに送信
      this.$refs.codeInput.insertCode(code);
      this.$refs.codeInput.set_student_id(this.student_id);
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
          case 4:
            this.textarea_style5.background = "#ffffff";
            this.hint_style3.background = "#ffffff";
            break;
          case 5:
            this.textarea_style6.background = "#ffffff";
            this.hint_style4.background = "#ffffff";
            break;
          case 6:
            this.textarea_style7.background = "#ffffff";
            this.hint_style5.background = "#ffffff";
            break;
          case 7:
            this.textarea_style8.background = "#ffffff";
            this.hint_style6.background = "#ffffff";
            break;
          case 8:
            this.textarea_style9.background = "#ffffff";
            this.hint_style7.background = "#ffffff";
            break;
          case 9:
            this.textarea_style10.background = "#ffffff";
            this.hint_style8.background = "#ffffff";
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
        //変数、配列宣言
        case 4:
          this.textarea_style5.background = "#fffed7";
          this.hint_style3.background = "#fffed7";
          this.hint_show_obj.hint3 = this.hint_obj.hint3;
          break;
        //データの入力
        case 5:
          this.textarea_style6.background = "#fffed7";
          this.hint_style4.background = "#fffed7";
          this.hint_show_obj.hint4 = this.hint_obj.hint4;
          break;
        //代入,計算処理
        case 6:
          this.textarea_style7.background = "#fffed7";
          this.hint_style5.background = "#fffed7";
          this.hint_show_obj.hint5 = this.hint_obj.hint5;
          break;
        //関数利用,返却値の格納
        case 7:
          this.textarea_style8.background = "#fffed7";
          this.hint_style6.background = "#fffed7";
          this.hint_show_obj.hint6 = this.hint_obj.hint6;
          break;
        //代入,計算処理
        case 8:
          this.textarea_style9.background = "#fffed7";
          this.hint_style7.background = "#fffed7";
          this.hint_show_obj.hint7 = this.hint_obj.hint7;
          break;
        case 9:
          this.textarea_style10.background = "#fffed7";
          this.hint_style8.background = "#fffed7";
          this.hint_show_obj.hint8 = this.hint_obj.hint8;
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
  height: 1100px;
  float: left;
}
div.cf_right {
  width: 50%;
  height: 1100px;
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