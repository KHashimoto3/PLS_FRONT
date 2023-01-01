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
      entry: "src/codingform.js",
      template: "public/codingform.html",
      filename: "codingform.html",
      title: "コーディングフォーム",
    },
  },
};
/*module.exports = defineConfig({
  transpileDependencies: true
})*/
