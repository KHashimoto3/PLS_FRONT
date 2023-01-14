<template>
  <div>
    <header-comp ref="hdComp" />
    <div class="manageArea">
      <div class="accountInfoArea">
        <div class="iconArea">
          <img class="userIcon" src="@/assets/user.png" alt="user_icon" />
        </div>
        <div class="nameArea">
          <h1>{{ userName }}</h1>
        </div>
        <div class="menuArea">
          <a class="menuButton"
            ><font-awesome-icon icon="fa-solid fa-list" />ダッシュボード</a
          ><br />
          <a class="menuButton">取り組み履歴</a><br />
          <a class="menuButton">設定</a><br />
        </div>
        <div class="buttonArea">
          <button class="css-button-rounded--login">ログイン</button>
        </div>
      </div>
      <div class="contentArea">
        <div class="contentAreaInner">
          <h1>コンテンツがここにきます！</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
  name: "LoginPage",
  components: {
    HeaderComp,
  },
  data() {
    return {
      userName: "ゲストユーザー",
    };
  },
  mounted() {
    this.$refs.hdComp.setUpHeader(
      "ホーム",
      "index.html",
      "アカウント管理",
      "ログイン"
    );
  },
  methods: {},
};
</script>

<style scoped>
div.manageArea {
  width: 90%;
  height: auto;
  margin: 100px auto 0 auto;
}
div.accountInfoArea {
  font-family: sans-serif;
  width: 30%;
  height: 700px;
  float: left;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px; /* ボックスの四つ角を丸くする */
}
div.iconArea,
div.nameArea,
div.buttonArea {
  width: 70%;
  height: auto;
  margin: 30px auto;
  text-align: center;
}

div.menuArea {
  width: 70%;
  height: auto;
  margin: 30px auto;
  text-align: left;
  font-size: 20pt;
}

div.contentArea {
  width: 70%;
  margin-left: 30%;
  height: 1000px;
}
div.contentAreaInner {
  width: 80%;
  height: auto;
  margin: 20px;
}

.menuButton,
a.menuButton {
  color: #000000;
  background-color: #ffffff;
  display: inline-block;
  width: 300px;
  height: 45px;
  padding: 10px;
  transition: all 0.3s ease;
}
.menuButton:hover,
a.menuButton:hover {
  color: #fff;
  background: #57cc99;
}

button.css-button-rounded--login {
  font-size: 18pt;
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #57cc99;
  background: #57cc99;
}
button.css-button-rounded--login:hover {
  background: #fff;
  color: #57cc99;
}
button.css-button-rounded--login:disabled {
  color: #fff;
  border: 2px solid #a7cfbe;
  background: #a7cfbe;
}
img.userIcon {
  width: 100px;
  height: auto;
}
</style>
