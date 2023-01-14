<template>
  <div class="header">
    <div class="headerLeft">
      <div class="headerLeftInner" @click="backPage()">
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
      backButtonURL: "index.html",
      title: "ヘッダタイトル",
      loginUserName: "ログイン",
    };
  },
  methods: {
    //ヘッダのセットアップ
    setUpHeader: function (buttonTxt, backURL, title, userName) {
      //buttonTxtつまりbackButtonTxtは、トップページだと存在しないためエラーチェックは不要
      if (title == "" || userName == "") {
        return;
      }
      this.backButtonTxt = buttonTxt;
      this.backButtonURL = backURL;
      this.title = title;
      this.loginUserName = userName;
    },
    backPage: function () {
      const url = this.backButtonURL;
      window.location.href = url;
    },
    gotoLoginPage: function () {
      const url = "account.html";
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
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
div.headerLeft:hover {
  cursor: pointer;
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
