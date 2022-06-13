<template>
  <section>
    <h1>テストの開始</h1>
    <hr />
    <p>実験にご協力いただき、ありがとうございます。</p>
    <p>これから、協力者の皆様には４つのプログラミングをして頂きます。</p>
    <p>
      詳しい説明については、実験手順書に掲載していますので、ご確認ください。
    </p>
    <h2>コーディングフォームによるプログラミング</h2>
    <hr />
    <p>
      ４つのプログラミングのうち、２つはコーディングフォームを利用して頂きます。
    </p>
    <p>
      実験手順書に従い、以下のリンクをクリックしてコーディングを開始してください。
    </p>
    <a @click="goto_form(0)">A問題</a><br />
    <a @click="goto_form(1)">B問題</a>
  </section>
</template>

<script>
export default {
  name: "App",
  methods: {
    //form_idをCodingFormに渡す
    goto_form: function (form_id) {
      //表示するform_idを取得
      const url = "CodingForm.html?id=" + form_id;
      //idのパラメータを含むurlに遷移
      location.href = url;
    },
  },
};
</script>

<style>
a {
  cursor: pointer;
}
</style>