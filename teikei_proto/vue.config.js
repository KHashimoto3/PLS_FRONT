//const { defineConfig } = require('@vue/cli-service')

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "テストの開始",
    },
    codingForm: {
      entry: "src/codingForm.js",
      template: "public/CodingForm.html",
      filename: "CodingForm.html",
      title: "コーディングフォーム",
    },
  },
};
/*module.exports = defineConfig({
  transpileDependencies: true
})*/
