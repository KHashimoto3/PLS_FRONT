<template>
  <div>
    <inner-element />
  </div>
</template>

<script>
import InnerElement from "./components/inner_element_list.vue";

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
