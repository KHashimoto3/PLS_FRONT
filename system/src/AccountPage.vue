<template>
  <div>
    <header-comp ref="hdComp" />
    <div class="accountInfoArea">
      <div class="iconArea">
        <img class="userIcon" src="@/assets/user.png" alt="user_icon" />
      </div>
      <div class="nameArea">
        <h1>{{ userName }}</h1>
      </div>
      <div class="buttonArea">
        <button class="css-button-rounded--login">ログイン</button>
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
div.accountInfoArea {
  font-family: sans-serif;
  width: 80%;
  height: 400px;
  margin: 80px auto 10px auto;
}
div.iconArea {
  text-align: center;
  width: 20%;
  height: 100%;
  float: left;
}
div.nameArea {
  width: 50%;
  height: 100%;
  padding: 10px;
  float: left;
}
div.buttonArea {
  width: 30%;
  height: 100%;
  margin-left: 70%;
  padding-top: 30px;
  text-align: center;
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
