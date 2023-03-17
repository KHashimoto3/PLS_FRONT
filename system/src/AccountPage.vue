<template lang="html">
  <div class="centerx">
  <div>
    <!--ログインモーダル-->
    <vs-prompt
      color="success"
      title="ログイン"
      @cancel="inputUserName='',inputPassword=''"
      @accept="login()"
      accept-text="ログイン"
      cancel-text="キャンセル"
      @close="close"
      v-model:active="loginModalIsShow">
       <div class="con-exemple-prompt">
       ユーザ名とパスワードを入力して、ログインをクリックしてください。
         <vs-input placeholder="ユーザ名"  v-model="inputUserName" />
         <vs-input placeholder="パスワード" v-model="inputPassword" />
       </div>
     </vs-prompt>
    <!--<div class="loginModalArea">
      <div class="loginModal">
        <div class="loginModalInner">
          <div class="modalUpperArea">
            <h1>ログイン</h1>
            <p>
              ユーザ名とパスワードを入力して、ログインをクリックしてください。
            </p>
            <label for="userName">ユーザ名: </label
            ><input type="text" id="userName" v-model="inputUserName" /><br />
            <label for="pass">パスワード : </label
            ><input type="password" id="pass" v-model="inputPassword" /><br />
          </div>
          <div class="modalButtonArea">
            <button class="css-button-rounded--sand" @click="closeLoginModal()">
              戻る
            </button>
            <button
              class="css-button-rounded--green"
              @click="login()"
              :disabled="loginButtonIsDisabled"
            >
              ログイン
            </button>
          </div>
        </div>
      </div>
    </div>
    -->
    <div class="addAccountModalArea" v-show="addAccountModalIsShow">
      <div class="addAccountModal">
        <div class="addAccountModalInner">
          <div class="modalUpperArea">
            <h1>アカウントの作成</h1>
            <p>
              ユーザ名とパスワードを入力して、登録するをクリックしてください。
            </p>
            <label for="userName">ユーザ名: </label
            ><input type="text" id="userName" v-model="inputUserName" /><br />
            <label for="pass">パスワード : </label
            ><input type="password" id="pass" v-model="inputPassword" /><br />
          </div>
          <div class="modalButtonArea">
            <button
              class="css-button-rounded--sand"
              @click="closeAddAccountModal()"
            >
              戻る
            </button>
            <button
              class="css-button-rounded--green"
              @click="addAccount()"
              :disabled="addAccountButtonIsDisabled"
            >
              登録する
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="completedModalArea" v-show="completedModalIsShow">
      <div class="completedModal">
        <div class="completedModalInner">
          <div class="modalUpperArea">
            <h1>登録完了</h1>
            <p>
              ようこそ！アカウント新規登録が完了しました。完了をクリックして、学習を始めましょう。
            </p>
          </div>
          <div class="modalButtonArea">
            <button
              class="css-button-rounded--green"
              @click="closeCompletedModal()"
            >
              完了
            </button>
          </div>
        </div>
      </div>
    </div>
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
          <button
            v-show="!loginNow"
            class="css-button-rounded--login"
            @click="openLoginModal()"
          >
            ログイン
          </button>
          <br />
          <button
            v-show="!loginNow"
            class="css-button-rounded--login"
            @click="openAddAccountModal()"
          >
            新規登録
          </button>
          <button
            v-show="loginNow"
            class="css-button-rounded--logout"
            @click="logout()"
          >
            ログアウト
          </button>
        </div>
      </div>
      <div class="contentArea">
        <div class="contentAreaInner">
          <h1>コンテンツがここにきます！</h1>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

import { useCookies } from "vue3-cookies";

export default {
  name: "LoginPage",
  components: {
    HeaderComp,
  },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      loginNow: false,
      loginModalIsShow: false,
      addAccountModalIsShow: false,
      loginButtonIsDisabled: false,
      completedModalIsShow: false,
      addAccountButtonIsDisabled: false,

      userName: "ゲストユーザー",

      inputUserName: "",
      inputPassword: "",
    };
  },
  mounted() {
    //ログイン状態を確認
    if (!this.cookies.isKey("user")) {
      this.$refs.hdComp.setUpHeader(
        "ホーム",
        "index.html",
        "アカウント管理",
        "ログイン"
      );
      this.loginNow = false;
      return;
    }
    const userName = this.cookies.get("user");
    this.$refs.hdComp.setUpHeader(
      "ホーム",
      "index.html",
      "アカウント管理",
      userName
    );
    this.userName = userName;
    this.loginNow = true;
  },
  methods: {
    login: async function () {
      if (this.inputUserName == "" || this.inputPassword == "") {
        alert("ユーザ名とパスワードを両方入力してください。");
        return;
      }
      //this.loginButtonIsDisabled = true;
      this.$vs.loading();
      //ログイン処理
      //const url = "http://localhost:8080/api/login";
      const url = "/api/login";
      const dataObj = {
        name: this.inputUserName,
        pass: this.inputPassword,
      };

      let errMsg;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataObj),
        });
        if (!response.ok) {
          switch (response.status) {
            default:
              errMsg = "何らかの理由でエラーが発生しました。";
              this.$vs.loading.close();
              throw new Error(errMsg);
          }
        } else {
          const responseData = await response.json();
          if (responseData.result == "NG") {
            alert("ユーザ名またはパスワードが間違っています。");
            this.loginButtonIsDisabled = false;
            return;
          }
          //cookieに登録（有効期限：1ヶ月）
          this.cookies.set("user", this.inputUserName, 60 * 60 * 24 * 30);
          //this.loginButtonIsDisabled = false;
          this.$vs.loading.close();
          //リロード
          window.location.reload();
        }
      } catch (errMsg) {
        alert(errMsg);
      }
    },
    logout: function () {
      //cookieを削除
      this.cookies.remove("user");
      //リロード
      window.location.reload();
    },
    addAccount: async function () {
      if (this.inputUserName == "" || this.inputPassword == "") {
        alert("ユーザ名とパスワードを両方入力してください。");
        return;
      }
      this.addAccountButtonIsDisabled = true;
      //新規登録処理
      //const url = "http://localhost:8080/api/addAc";
      const url = "/api/addAc";
      const dataObj = {
        name: this.inputUserName,
        pass: this.inputPassword,
      };

      let errMsg;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataObj),
        });
        if (!response.ok) {
          switch (response.status) {
            default:
              errMsg = "何らかの理由でエラーが発生しました。";
              throw new Error(errMsg);
          }
        } else {
          const responseData = await response.json();
          if (responseData.result == "Already") {
            alert("すでにこのユーザ名でアカウントが登録されています。");
            this.addAccountButtonIsDisabled = false;
            return;
          }
          //cookieに登録（有効期限：1ヶ月）
          this.cookies.set("user", this.inputUserName, 60 * 60 * 24 * 30);
          this.loginButtonIsDisabled = false;
          //登録完了モーダルを出す
          this.closeAddAccountModal = false;
          this.openCompletedModal();
        }
      } catch (errMsg) {
        alert(errMsg);
      }
    },
    openLoginModal: function () {
      this.loginModalIsShow = true;
    },
    closeLoginModal: function () {
      this.loginModalIsShow = false;
    },
    openAddAccountModal: function () {
      this.addAccountModalIsShow = true;
    },
    closeAddAccountModal: function () {
      this.addAccountModalIsShow = false;
    },
    openCompletedModal: function () {
      this.completedModalIsShow = true;
    },
    closeCompletedModal: function () {
      this.completedModalIsShow = false;
      //リロード
      window.location.reload();
    },
  },
};
</script>

<style scoped>
div.loginModalArea,
div.addAccountModalArea,
div.completedModalArea {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  margin: 0;
  background: #868686;
  z-index: 999;
  font-family: sans-serif;
}
div.loginModal,
div.addAccountModal {
  width: 600px;
  height: 300px;
  margin: auto;
  background: #ffffff;
}
div.completedModal {
  width: 600px;
  height: 250px;
  margin: auto;
  background: #ffffff;
}
div.loginModalInner,
div.addAccountModalInner,
div.completedModalInner {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
div.modalUpperArea {
  width: 100%;
  height: auto;
  margin: 0 auto;
}
div.modalUpperArea input {
  font-size: 18pt;
  width: 200px;
  height: 30px;
}
div.modalUpperArea label {
  font-size: 18pt;
}
div.modalUpperArea h1 {
  text-align: center;
}
div.modalButtonArea {
  width: 90%;
  height: auto;
  text-align: center;
}

div.manageArea {
  width: 90%;
  height: auto;
  margin: 150px auto 0 auto;
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

button.css-button-rounded--logout {
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
  border: 2px solid #adb5bd;
  background: #adb5bd;
}
button.css-button-rounded--logout:hover {
  background: #fff;
  color: #adb5bd;
}
button.css-button-rounded--logout:disabled {
  color: #fff;
  border: 2px solid #d6d6d6;
  background: #d6d6d6;
}

img.userIcon {
  width: 100px;
  height: auto;
}

button.css-button-rounded--green {
  font-size: 16pt;
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
button.css-button-rounded--green:hover {
  background: #fff;
  color: #57cc99;
}
button.css-button-rounded--green:disabled {
  color: #fff;
  border: 2px solid #a7cfbe;
  background: #a7cfbe;
}
button.css-button-rounded--sand {
  font-size: 16pt;
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
  border: 2px solid #adb5bd;
  background: #adb5bd;
}
button.css-button-rounded--sand:hover {
  background: #fff;
  color: #adb5bd;
}
button.css-button-rounded--sand:disabled {
  color: #fff;
  border: 2px solid #d6d6d6;
  background: #d6d6d6;
}

/*ログインモーダル*/
.vs-input {
  width: 100%;
  margin-top: 10px;
}
</style>
