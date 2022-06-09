<template>
  <div class="cf_area">
    <div class="cf_left">
      <div class="form_area">
        <textarea cols="70" rows="5"></textarea><br />
        <textarea cols="70" rows="5"></textarea><br />
        <textarea cols="70" rows="5"></textarea><br />
        <textarea cols="70" rows="5"></textarea><br />
        <textarea cols="70" rows="5"></textarea><br />
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
            <td class="left">ヒント1</td>
            <td class="right">ボタン1</td>
          </tr>
          <tr>
            <td class="left">ヒント1</td>
            <td class="right">ボタン1</td>
          </tr>
          <tr>
            <td class="left">ヒント1</td>
            <td class="right">ボタン1</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodingRoop",
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
  background: #ffe4e4;
  float: left;
}
div.cf_right {
  width: 50%;
  height: 1000px;
  margin-left: 50%;
  background: #ddfffc;
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