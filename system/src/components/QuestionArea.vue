<template>
  <div class="questionArea">
    <h1>{{ title }}（スクロールで隠れた部分を表示）</h1>
    <p class="questionDesc">{{ description }}</p>
    <div class="exampleArea">
      <div class="exInput">
        ＜入力例＞
        <textarea cols="40" rows="10" v-model="input" disabled></textarea>
      </div>
      <div class="exOutput">
        ＜出力例＞
        <textarea cols="40" rows="10" v-model="output" disabled></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionArea.vue",
  components: {},
  data() {
    return {
      title: "問題",
      description: "問題データがありません。",
      input: "入力例データがありません。",
      output: "出力例データがありません。",
    };
  },
  methods: {
    setUp: function (dataObj) {
      if (dataObj.title != "") {
        this.title = dataObj.title;
      }
      if (dataObj.description != "") {
        this.description = dataObj.description;
      }
      if (dataObj.input != "") {
        this.input = dataObj.input;
      }
      if (dataObj.output != "") {
        this.output = dataObj.output;
      }
    },
  },
};
</script>

<style scoped>
div.questionArea {
  width: 100%;
  height: 100px;
}
p.questionDesc {
  font-size: 16pt;
}
div.exampleArea {
  width: 90%;
  height: auto;
  margin: 0 auto 100px auto;
}
div.exInput {
  width: 300px;
  height: 200px;
  margin-right: 100px;
  float: left;
}
div.exOutput {
  width: 300px;
  height: 200px;
  margin-left: 410px;
}
textarea {
  font-size: 14pt;
}
</style>
