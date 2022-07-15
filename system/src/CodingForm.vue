<template>
  <div class="codingArea">
    <div class="codingLeft">
      <div class="unitName">
        <h1>{{ unitName }}</h1>
      </div>
      <div class="assist">
        <div class="assistInner">
          <h1>STEP{{ stepNo }}</h1>
          <h2>{{ assistObj[stepNo - 1].title }}</h2>
          <p>{{ assistObj[stepNo - 1].body }}</p>
          <button @click="nextStep()">次へ</button>
        </div>
      </div>
    </div>
    <div class="codingRight">
      <div class="question">
        <h2>問題文</h2>
        <p>問題文がここに入ります</p>
      </div>
      <div class="codingForm">
        <div class="codingFormInner">
          <p>＜ヘッダーコメント＞</p>
          <textarea rows="5" cols="100"></textarea>
          <p>＜コーディングフォーム＞</p>
          <textarea
            v-for="i of textAreaCnt"
            :key="i"
            role="5"
            cols="100"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "CodingForm",
  /*components: {
    HelloWorld
  }*/
  data() {
    return {
      unitName: "繰り返し",
      stepNo: 1,
      textAreaCnt: 0,
      //アシストの内容を格納するオブジェクト
      assistObj: [
        {
          id: 1,
          title: "ヘッダーコメントの記述",
          body: "プログラムの説明を書きます",
          sample: "サンプルの図",
        },
        {
          id: 2,
          title: "プロトタイプ宣言",
          body: "プロトタイプの宣言を書きます",
          sample: "サンプルの図",
        },
        {
          id: 3,
          title: "main関数",
          body: "main関数を書きます",
          sample: "サンプルの図",
        },
      ],
    };
  },
  methods: {
    nextStep: function () {
      this.stepNo++;
      this.textAreaCnt++;
    },
  },
};
</script>

<style>
div.codingArea {
  width: 100%;
  height: 700px;
}
div.codingLeft {
  width: 40%;
  height: 100%;
  float: left;
}
div.unitName {
  width: 100%;
  height: 10%;
}
div.assist {
  width: 100%;
  height: 90%;
  position: relative;
}
div.assistInner {
  width: 90%;
  height: 90%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  border: solid 1px #000000;
}
div.codingRight {
  width: 60%;
  height: 100%;
  margin-left: 40%;
}
div.question {
  width: 100%;
  height: 20%;
}
div.codingForm {
  width: 100%;
  height: 80%;
  position: relative;
  border: solid 1px #000000;
}
div.codingFormInner {
  width: 90%;
  height: 90%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
}
</style>
