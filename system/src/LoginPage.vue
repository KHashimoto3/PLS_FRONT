<template>
  <div>
    <header-comp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
  name: "LoginPage",
  components: {
    HeaderComp,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
