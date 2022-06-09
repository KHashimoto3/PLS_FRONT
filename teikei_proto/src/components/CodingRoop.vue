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
      <div class="hint_area"></div>
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
</style>