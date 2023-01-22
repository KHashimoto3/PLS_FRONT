<template>
  <div v-show="grammarFormInfoIsShow" class="grammarFormInfo">
    <div class="grammarModal">
      <div class="grammardModalInner">
        <div class="modalUpperArea">
          <h1>文法フォームの使い方</h1>
          <p>
            文法フォームを使って穴埋め式でコーディングし、文法（構成要素）を理解しましょう。
          </p>
          <input type="checkbox" v-model="notShowAgainCheck" name="notAgain" />
          <label for="notAgain">今後この説明を表示しない。</label>
        </div>
        <div class="modalButtonArea">
          <button
            class="css-button-rounded--green"
            @click="closeGrammarModal()"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrammarModal",
  data() {
    return {
      notShowAgain: false,
      grammarFormInfoIsShow: false,
      notShowAgainCheck: "",
    };
  },
  methods: {
    openGrammarModal: function () {
      if (!this.notShowAgain) {
        this.grammarFormInfoIsShow = true;
      }
    },
    closeGrammarModal: function () {
      if (this.notShowAgainCheck) {
        this.notShowAgain = true;
      }
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
  display: flex;
  margin: 0;
  background: #868686;
  z-index: 999;
}
div.grammarModal {
  width: 600px;
  height: 250px;
  margin: auto;
  background: #ffffff;
}
div.grammardModalInner {
  width: 90%;
  height: auto;
  margin: 0 auto;
}
div.grammardModalInner h1 {
  text-align: center;
}
div.modalUpperArea {
  width: 100%;
  height: auto;
  margin: 0 auto;
}
div.modalButtonArea {
  width: 90%;
  height: auto;
  text-align: center;
}
</style>
