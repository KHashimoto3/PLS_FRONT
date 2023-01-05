<template>
  <div>
    <select name="type">
      <option value="equal">==（等しい）</option>
      <option value="notEqual">!=（等しくない）</option>
      <option value="small">&lt;（小さい）</option>
      <option value="large">>（大きい）</option>
      <option value="less">&lt;=（以下）</option>
      <option value="more">>=（以上）</option>
    </select>
    <!--<div class="drag-and-drop" :style="hintStyleObj.hint2">{{hintObj.hint2}}</div>-->
  </div>
</template>

<script>
export default {
  name: "ConditionSelect.vue",
  data() {
    return {};
  },
};
</script>

<style scoped>
input {
  font-size: 18pt;
}
div {
  display: inline;
}
select {
  display: inline;
}
</style>
