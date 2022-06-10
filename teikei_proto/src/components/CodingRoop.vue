<template>
  <div class="cf_area">
    <div class="cf_left">
      <div class="form_area">
        <textarea cols="82" rows="5" :style="textarea_style_array[0]"></textarea
        ><br />
        <textarea cols="82" rows="5" :style="textarea_style_array[1]"></textarea
        ><br />
        <textarea cols="82" rows="5" :style="textarea_style_array[2]"></textarea
        ><br />
        <textarea cols="82" rows="5" :style="textarea_style_array[3]"></textarea
        ><br />
        <textarea cols="82" rows="5" :style="textarea_style_array[4]"></textarea
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
      textarea_style_array: [
        [{ background: "#ffffff" }],
        [{ background: "#ffffff" }],
        [{ background: "#ffffff" }],
        [{ background: "#ffffff" }],
        [{ background: "#ffffff" }],
      ],
      /*textarea1_style_object: {
        background: "#ffffff",
      },
      textarea2_style_object: {
        background: "#ffffff",
      },
      textarea3_style_object: {
        background: "#ffffff",
      },
      textarea4_style_object: {
        background: "#ffffff",
      },
      textarea5_style_object: {
        background: "#ffffff",
      },
      */
    };
  },
  methods: {},
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
  background: #ff4343;
}
</style>