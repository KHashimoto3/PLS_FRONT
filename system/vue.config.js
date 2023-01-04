//const { defineConfig } = require('@vue/cli-service')

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "ホーム",
    },
    coding: {
      entry: "src/codingform.js",
      template: "public/codingform.html",
      filename: "codingform.html",
      title: "コーディングフォーム",
    },
    element: {
      entry: "src/innerElement.js",
      template: "public/innerElementTest.html",
      filename: "innerElement.html",
      title: "詳細表示テスト",
    },
  },
};
/*module.exports = defineConfig({
  transpileDependencies: true
})*/
