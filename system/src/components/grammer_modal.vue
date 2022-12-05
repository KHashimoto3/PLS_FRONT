<template>
  <div v-show="grammarFormInfoIsShow" class="grammarFormInfo">
    <div class="grammarModal">
      <div class="grammardModalInner">
        <div class="modalUpperArea">
          <h1>文法フォームの使い方</h1>
          <p>
            文法フォームを使ってコーディングし、要素の構成を理解しましょう。
          </p>
        </div>
        <div class="modalButtonArea">
          <button class="css-button-rounded--sand" @click="closeGrammarModal()">
            戻る
          </button>
          <button class="css-button-rounded--green">ダウンロード</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "grammarModal",
  data() {
    return {
      notShowAgain: false,
      grammarFormInfoIsShow: false,
    };
  },
  methods: {
    openGrammarModal: function () {
      this.grammarFormInfoIsShow = true;
    },
    closeGrammarModal: function () {
      this.grammarFormInfoIsShow = false;
    },
  },
};
</script>

<style scoped>
div.grammarFormInfo {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0;
  background: #868686;
  z-index: 999;
}
div.grammarModal {
  width: 600px;
  height: 500px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
}
div.grammarModalInner {
  width: 90%;
  height: auto;
  margin: 0 auto;
}
div.modalUpperArea {
  width: 100%;
  height: auto;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
div.modalButtonArea {
  width: 90%;
  height: auto;
  text-align: center;
}
</style>
