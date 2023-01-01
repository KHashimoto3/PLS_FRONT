<template>
  <div class="header">
    <div class="headerLeft">
      <div class="headerLeftInner">
        {{ title }}
      </div>
    </div>
    <div class="headerRight">
      <div class="headerRightInner">
        {{ loginUserName }}
      </div>
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
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.5);
  font-size: 20pt;
}
div.headerLeft {
  width: 80%;
  height: 100%;
  float: left;
  background: #ffffff;
  display: flex;
  text-align: left;
}
div.headerRight {
  width: 20%;
  height: 100%;
  margin-left: 20%;
  background: #57cc99;
  display: flex;
  text-align: center;
}
div.headerLeftInner {
  width: 90%;
  height: 70%;
  margin: auto;
}
div.headerRightInner {
  width: 90%;
  height: 70%;
  margin: auto;
}
</style>
