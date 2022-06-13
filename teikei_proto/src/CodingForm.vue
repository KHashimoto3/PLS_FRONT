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

    console.log("取り出し成功！" + form_id);

    //指定のフォームだけを表示する
    if (form_id == 0) {
      //フォームを表示する
      console.log("繰り返しフォームを表示");
      this.$refs.formRoop.show_form();
    } else if (form_id == 1) {
      //フォームを表示する
      console.log("関数フォームを表示");
      this.$refs.formFunc.show_form();
    }
    /*switch (form_id) {
      case 0:
        //フォームを表示する
        console.log("繰り返しフォームを表示");
        this.$refs.formRoop.show_form();
        break;
      case 1:
        //フォームを表示する
        console.log("関数フォームを表示");
        this.$refs.formFunc.show_form();
        break;
    }*/
  },
};
</script>