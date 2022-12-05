<template>
  <div>
    <h1>エディタ</h1>
    <h2>＜プログラム＞</h2>
    <div class="codeArea">
      <pre>
            <codemirror
                v-model="bodyTxt"
                placeholder="コードを書く"
                :style="{
                  width: '1000px',
                  height: 'auto',
                  'font-size': '18pt',
                  'margin-left':'140px'
                }"
                :autofocus="false"
                :indent-with-tab="false"
                :tab-size="4"
                :extensions="extensions"
              />
      </pre>
    </div>
    <button type="button" @click="connectCode()">結合！</button>
  </div>
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";

export default {
  name: "nomal_editor.vue",
  components: {
    Codemirror,
  },
  data() {
    return {
      bodyTxt: "",

      //codemirrorの設定
      extensions: [cpp(), keymap.of([indentWithTab])],
    };
  },
  methods: {
    returnCode: function () {
      return this.bodyTxt;
    },
  },
};
</script>

<style scoped>
pre {
  font-size: 18pt;
  margin: 0;
}
</style>
