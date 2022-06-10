<template>
  <div class="cf_area">
    <div class="cf_left">
      <div class="form_area">
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style1"
          @focus="textarea_focus(0)"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style2"
          @focus="textarea_focus(1)"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style3"
          @focus="textarea_focus(2)"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style4"
          @focus="textarea_focus(3)"
        ></textarea
        ><br />
        <textarea
          cols="82"
          rows="5"
          :style="textarea_style5"
          @focus="textarea_focus(4)"
        ></textarea
        ><br />
      </div>
    </div>
    <div class="cf_right">
      <div class="hint_area">
        <table>
          <tr>
            <th class="left">ヒント</th>
            <th class="right">操作</th>
          </tr>
          <tr>
            <td class="left">ヒント1</td>
            <td class="right">ボタン1</td>
          </tr>
          <tr>
            <td class="left">ヒント2</td>
            <td class="right">ボタン2</td>
          </tr>
          <tr>
            <td class="left">ヒント3</td>
            <td class="right">ボタン3</td>
          </tr>
          <tr>
            <td class="left">ヒント4</td>
            <td class="right">ボタン4</td>
          </tr>
          <tr>
            <td class="left">ヒント5</td>
            <td class="right">ボタン5</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodingRoop",
  data() {
    return {
      //現在ハイライト中のテキストエリアを記録
      now_focus: null,
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
    };
  },
  methods: {
    //フォーカスされたテキストエリアの背景を変更する関数
    textarea_focus: function (num) {
      //今、薄い黄色のテキストエリアがあったら、白に戻す
      if (this.now_focus != null) {
        switch (this.now_focus) {
          case 0:
            this.textarea_style1.background = "#ffffff";
            break;
          case 1:
            this.textarea_style2.background = "#ffffff";
            break;
          case 2:
            this.textarea_style3.background = "#ffffff";
            break;
          case 3:
            this.textarea_style4.background = "#ffffff";
            break;
          case 4:
            this.textarea_style5.background = "#ffffff";
            break;
        }
      }
      //フォーカスされたテキストエリアの背景を薄い黄色に変更
      switch (num) {
        case 0:
          this.textarea_style1.background = "#fffed7";
          break;
        case 1:
          this.textarea_style2.background = "#fffed7";
          break;
        case 2:
          this.textarea_style3.background = "#fffed7";
          break;
        case 3:
          this.textarea_style4.background = "#fffed7";
          break;
        case 4:
          this.textarea_style5.background = "#fffed7";
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