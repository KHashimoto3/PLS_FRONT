<template>
  <div class="header">
    <div class="headerLeft">
      <div class="headerLeftInner">
        <p>{{ backButtonTxt }}</p>
      </div>
    </div>
    <div class="headerMiddle">
      <div class="headerMiddleInner">
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="headerRight">
      <div class="headerRightInner" @click="gotoLoginPage()">
        <p>{{ loginUserName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      backButtonTxt: "ホーム",
      title: "ヘッダタイトル",
      loginUserName: "ログイン",
    };
  },
  methods: {
    gotoLoginPage: function () {
      const url = "login.html";
      window.location.href = url;
    },
  },
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
div.header p {
  font-family: sans-serif;
  margin: 0;
}
div.headerLeft {
  width: 20%;
  height: 100%;
  background: #ffffff;
  display: flex;
  text-align: left;
  float: left;
}
div.headerMiddle {
  width: 60%;
  height: 100%;
  margin-left: 0;
  background: #ffffff;
  display: flex;
  float: left;
  text-align: center;
}
div.headerRight {
  width: 20%;
  height: 100%;
  margin-left: 60%;
  color: #ffffff;
  background: #57cc99;
  display: flex;
  text-align: center;
}
div.headerRight:hover {
  cursor: pointer;
}
div.headerLeftInner {
  width: 90%;
  height: 70%;
  margin: auto;
}
div.headerMiddleInner {
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
