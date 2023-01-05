//const { defineConfig } = require('@vue/cli-service')

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "ホーム",
    },
    login: {
      entry: "src/login.js",
      template: "public/login.html",
      filename: "login.html",
      title: "ログイン",
    },
    coding: {
      entry: "src/coding_form.js",
      template: "public/coding_form.html",
      filename: "coding_form.html",
      title: "コーディングフォーム",
    },
    element: {
      entry: "src/inner_element.js",
      template: "public/inner_element_test.html",
      filename: "inner_element.html",
      title: "詳細表示テスト",
    },
  },
};
/*module.exports = defineConfig({
  transpileDependencies: true
})*/
