# teikei_proto

# プロジェクトの説明
コーディングスタイルを学ぶことができるような学習支援システムのプロトタイプを開発した。  
機能としては、２つのコーディングフォームと、外部コンパイラAPIを利用した実行機能を持つ。  
それぞれのコーディングフォームは、CodingForm.vue内で利用するが、トップ画面（App.vue）で指定された問題に応じて、必要なフォームのみを表示するようにしている。  
それぞれのコーディングフォームから、共通で使う実行機能（CodeRun.vue）を利用している。  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
