<template>
  <div class="codingArea">
    <div class="codingLeft">
      <div class="unitName">
        <h1>{{ unitName }}</h1>
      </div>
      <div class="assist">
        <p>ここにアシストが入ります</p>
      </div>
    </div>
    <div class="codingRight">
      <div class="question">
        <h2>問題文</h2>
        <p>問題文がここに入ります</p>
      </div>
      <div class="codingForm">
        <textarea rows="5" cols="30"></textarea>
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
    };
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
  background: #e7ffc1;
}
div.assist {
  width: 100%;
  height: 90%;
  background: #fffbc1;
}
div.codingRight {
  width: 60%;
  height: 100%;
  margin-left: 40%;
}
div.question {
  width: 100%;
  height: 20%;
  background: #ffcdc1;
}
div.codingForm {
  width: 100%;
  height: 80%;
  background: #c1fdff;
}
</style>
