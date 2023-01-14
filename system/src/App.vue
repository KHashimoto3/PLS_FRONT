<template>
  <div>
    <header-comp ref="hdComp" />
    <div class="contentsArea">
      <div class="mainTextArea">
        <h1>コーディングフォームを用いたプログラミング学習</h1>
      </div>
      <div class="formListArea">
        <div class="formListAreaInner">
          <h1>すべてのフォーム</h1>
          <div class="formCard" v-for="i of formListDataObj" :key="i">
            <div class="formCardImg"></div>
            <div class="formCardTitle">
              <h1>{{ i.name }}</h1>
            </div>
            <div class="formCardButton">
              <button
                class="css-button-rounded--green"
                @click="selectForm(i.id)"
              >
                始める
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
  },
  data() {
    return {
      formListDataObj: null,
    };
  },
  created: async function () {
    const pullFormUrl = "./data/formlist.json";
    //const pullFormUrl = "/api/getformlist";
    let errMsg;
    try {
      const response = await fetch(pullFormUrl, {
        method: "GET",
      });
      if (!response.ok) {
        switch (response.status) {
          default:
            errMsg =
              "何らかの理由でエラーが発生しました。（E: " +
              response.status +
              ")";
            throw new Error(errMsg);
        }
      } else {
        const responseData = await response.json();
        this.formListDataObj = responseData.formList;
        //this.formListDataObj = responseData;
        if (this.formListDataObj == null) {
          alert("フォームリストデータがありません。");
        }
      }
    } catch (errMsg) {
      alert(errMsg);
    }
  },
  mounted() {
    this.$refs.hdComp.setUpHeader("", "", "ホーム", "ログイン");
  },
  methods: {
    selectForm: function (id) {
      //選択された問題リスト名とともにフォーム画面へ遷移
      const url =
        "codingform.html?formName=" + this.formListDataObj[id - 1].link;
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
h1,
p {
  font-family: sans-serif;
}
div.contentsArea {
  width: 100%;
  height: auto;
}
div.mainTextArea {
  width: 100%;
  height: 200px;
  /*background-image: linear-gradient(
    90deg,
    rgba(89, 173, 241, 1),
    rgba(207, 253, 157, 1)
  );*/
  background: #57cc99;
}
div.mainTextArea h1 {
  text-align: center;
  color: #ffffff;
  padding: 60px;
  font-size: 40pt;
}

div.formListArea {
  width: 100%;
  height: auto;
}
div.formListAreaInner {
  width: 70%;
  height: auto;
  margin: 0 auto;
}
div.formCard {
  width: 400px;
  height: 400px;
  background: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px; /* ボックスの四つ角を丸くする */
  margin: 60px;
  float: left;
}
div.formCardImg {
  width: 100%;
  height: 40%;
  background-image: linear-gradient(135deg, #79f1a4 10%, #0e5cad 100%);
}
div.formCardTitle {
  width: 100%;
  height: 40%;
}
div.formCardButton {
  width: 100%;
  height: 20%;
  text-align: center;
}

button.css-button-rounded--green {
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
button.css-button-rounded--green:hover {
  background: #fff;
  color: #57cc99;
}
button.css-button-rounded--green:disabled {
  color: #fff;
  border: 2px solid #a7cfbe;
  background: #a7cfbe;
}
</style>
