<template>
  <div>
    <funcSlice></funcSlice>
    <forSlice></forSlice>
  </div>
</template>

<script>
import funcSlice from "./components/funcSlice.vue";
import forSlice from "./components/forSlice.vue";

export default {
  name: "App",
  components: {
    funcSlice,
    forSlice,
  },
};
</script>
