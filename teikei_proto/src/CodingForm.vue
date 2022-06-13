<template>
  <section>
    <h1>繰り返し処理</h1>
    <FormRoop ref="formRoop" />
    <FormFunc ref="formFunc" />
  </section>
</template>

<script>
import FormRoop from "./components/FormRoop.vue";
import FormFunc from "./components/FormFunction.vue";

export default {
  name: "CodingForm",
  components: {
    FormRoop,
    FormFunc,
  },
  mounted() {
    const url = new URL(window.location.href); //現在のURLを取得
    //オブジェクトを取得
    const params = url.searchParams;
    //getメソッドでジャンルidを取得
    const form_id = params.get("id");

    //指定のフォームだけを表示する
    switch (form_id) {
      case 0:
        //フォームを表示する
        this.$refs.formRoop.show_form();
        break;
      case 1:
        //フォームを表示する
        this.$refs.formFunc.show_form();
        break;
    }
  },
};
</script>