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
                  width: '1200px',
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
  name: "NomalEditor.vue",
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
    connectCode: function () {
      this.copyToClipboard(this.bodyTxt);
    },
    copyToClipboard: function (text) {
      // テキストコピー用の一時要素を作成
      const pre = document.createElement("pre");
      // テキストを選択可能にしてテキストセット
      pre.style.webkitUserSelect = "auto";
      pre.style.userSelect = "auto";
      pre.textContent = text;
      // 要素を追加、選択してクリップボードにコピー
      document.body.appendChild(pre);
      document.getSelection().selectAllChildren(pre);
      const result = document.execCommand("copy");
      // 要素を削除
      document.body.removeChild(pre);
      return result;
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
