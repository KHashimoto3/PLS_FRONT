<template>
  <div class="cf_area">
    <div class="cf_left"></div>
    <div class="cf_right"></div>
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
</style>