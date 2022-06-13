<template>
  <section>
    <h1>繰り返し処理</h1>
    <FormRoop ref="formRoop" />
    <FormFunc ref="FormFunc" />
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
  mounted() {},
};
</script>