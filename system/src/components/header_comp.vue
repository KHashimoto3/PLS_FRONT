<template>
  <div class="header">
    <div class="headerLeft">
      {{ title }}
    </div>
    <div class="headerRight">
      {{ loginUserName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "header_comp",
  data() {
    return {
      title: "ヘッダタイトル",
      loginUserName: "ログイン",
    };
  },
  methods: {},
};
</script>

<style scoped>
div.header {
  width: 100%;
  height: 60px;
  margin: 0;
}
div.headerLeft {
  width: 70%;
  height: 100%;
  float: left;
  background: #56ea00;
}
div.headerRight {
  width: 30%;
  height: 100%;
  margin-left: 70%;
  background: #ea6900;
}
</style>
