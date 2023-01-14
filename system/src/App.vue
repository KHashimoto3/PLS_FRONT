<template>
  <div>
    <header-comp ref="hdComp" />
    <div class="contentsArea">
      <div class="mainTextArea">
        <h1>コーディングスタイル学習システム</h1>
      </div>
      <div class="formListArea">
        <div class="formListAreaInner">
          <h2>単元を選ぶ</h2>
          <div v-for="i of formListDataObj" :key="i">
            <p>
              <a @click="selectForm(i.id)">{{ i.name }}</a>
            </p>
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
div.contentsArea {
  width: 100%;
  height: auto;
}
div.mainTextArea {
  width: 100%;
  height: 400px;
  background-image: linear-gradient(
    90deg,
    rgba(89, 173, 241, 1),
    rgba(207, 253, 157, 1)
  );
}
div.mainTextArea h1 {
  text-align: center;
  color: #ffffff;
  padding: 150px;
  font-size: 40pt;
  font-family: sans-serif;
}
</style>
