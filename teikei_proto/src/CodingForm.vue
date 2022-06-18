<template>
  <section>
    <a href="index.html">＜戻る</a>
    <h3>協力者番号：{{ student_id }}</h3>
    <h1>{{ form_title }}</h1>
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
  data() {
    return {
      form_title: "",
      student_id: "", //学籍番号
    };
  },
  mounted() {
    const url = new URL(window.location.href); //現在のURLを取得
    //オブジェクトを取得
    const params = url.searchParams;
    //getメソッドでジャンルidを取得
    const form_id = params.get("id");
    this.student_id = params.get("student");

    console.log("取り出し成功！" + form_id);

    //指定のフォームだけを表示する
    if (form_id == 0) {
      //フォームを表示する
      console.log("繰り返しフォームを表示");
      this.$refs.formRoop.show_form();
      this.$refs.formRoop.set_student_id(this.student_id);
      this.form_title = "繰り返し";
    } else if (form_id == 1) {
      //フォームを表示する
      console.log("関数フォームを表示");
      this.$refs.formFunc.show_form();
      this.$refs.formFunc.set_student_id(this.student_id);
      this.form_title = "関数";
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