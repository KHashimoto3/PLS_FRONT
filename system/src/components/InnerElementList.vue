<template>
  <div class="inner_element">
    <h1>STEP{{ stepNo }}</h1>
    <p>{{ stepName }}のSTEPは以下の要素で構成されます。</p>
    <div class="elementTableArea">
      <table>
        <tr>
          <th>番号</th>
          <th>要素名</th>
          <th>文法</th>
        </tr>
        <tr v-for="i of count" :key="i">
          <td>{{ i }}</td>
          <td>あああ</td>
          <td>あああ</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "InnerElementList",
  data() {
    return {
      stepNo: 1,
      stepName: "関数定義",
      count: 3,
    };
  },
};
</script>

<style scoped>
</style>
