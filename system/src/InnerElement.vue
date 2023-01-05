<template>
  <div>
    <inner-element />
  </div>
</template>

<script>
import InnerElement from "./components/InnerElementList.vue";

export default {
  name: "App",
  components: {
    InnerElement,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>
