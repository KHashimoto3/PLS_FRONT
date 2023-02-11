<template>
  <div class="questionArea">
    <h1>{{ title }}（スクロールで隠れた部分を表示）</h1>
    <p class="questionDesc">{{ description }}</p>
    <div class="exampleArea">
      <div class="exInput">
        ＜入力例＞<br />
        {{ input }}
      </div>
      <div class="exOutput">
        ＜出力例＞<br />
        {{ output }}
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
  width: 80%;
  height: auto;
  margin: 0 auto 100px auto;
}
div.exInput {
  width: 300px;
  height: 150px;
  margin-right: 30px;
  background: #f2ffc7;
  float: left;
}
div.exOutput {
  width: 300px;
  height: 150px;
  margin-right: 100px;
  margin-left: 330px;
  background: #efefef;
}
</style>
