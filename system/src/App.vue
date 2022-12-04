<template>
  <div>
    <h1>コーディングスタイル学習システム</h1>
    <h2>単元を選ぶ</h2>
    <div v-for="i of formListDataObj" :key="i">
      <p>
        <a @click="selectForm(i.id)">{{ i.name }}</a>
      </p>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  /*components: {
    HelloWorld
  }*/
  data() {
    return {
      formListDataObj: null,
    };
  },
  created: async function () {
    const pullFormUrl = "./data/formlist.json";
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
        if (this.formListDataObj == null) {
          alert("フォームリストデータがありません。");
        }
      }
    } catch (errMsg) {
      alert(errMsg);
    }
  },
  methods: {
    selectForm: function (id) {
      //選択された問題リスト名とともにフォーム画面へ遷移
      const url =
        "codingform.html?formName=" + this.formListDataObj[id - 1].formLink;
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
