<template>
  <div>
    <div class="notificationArea" v-show="notificationIsShow">
      <div class="notifiLeft">
        <p class="notificationText">{{ notificationText }}</p>
      </div>
      <div class="notifiRight" @click="closeNotice()"><p>閉じる</p></div>
    </div>
    <div class="codingArea">
      <div class="codingLeft">
        <div class="unitName">
          <h1>{{ unitName }}</h1>
        </div>
        <Toggle
          v-model="sampleIsShow"
          offLabel="ヒント非表示"
          onLabel="ヒント表示"
          class="sampleToggle"
        />
        <div class="assist">
          <div class="assistInner">
            <div class="assistText">
              <h1>STEP{{ viewStepNo }}</h1>
              <h2>{{ assistObj[viewStepNo - 1].title }}</h2>
              <p>{{ assistObj[viewStepNo - 1].body }}</p>
            </div>
            <!--サンプルエリア-->
            <div class="assistSample">
              <div v-show="sampleIsShow">
                <div class="assistSampleExplan">
                  <h2>＜サンプルコード＞</h2>
                  <p>
                    {{ assistObj[viewStepNo - 1].sampleExp }}
                  </p>
                </div>
                <codemirror
                  v-model="assistObj[viewStepNo - 1].sample"
                  placeholder="Code goes here..."
                  :style="{ height: 'auto', 'font-size': '14pt' }"
                  :autofocus="false"
                  :indent-with-tab="false"
                  :tab-size="4"
                  :extensions="extensions"
                  :disabled="true"
                />
              </div>
            </div>
            <div class="assistSelect">
              <button
                class="css-button-rounded--sand"
                @click="backStep()"
                :disabled="backIsDisabled"
              >
                前へ
              </button>
              <button
                class="css-button-rounded--green"
                @click="nextStep()"
                :disabled="nextIsDisabled"
              >
                次へ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="codingRight">
        <div class="question">
          <h2>{{ questionTitle }}</h2>
          <p>{{ questionDescription }}</p>
        </div>
        <div class="codingForm">
          <div class="codingFormInner">
            <p>＜ヘッダーコメント＞</p>
            <codemirror
              v-model="headerText"
              placeholder="コメントを書く"
              :style="{ height: 'auto', 'font-size': '16pt' }"
              :autofocus="false"
              :indent-with-tab="false"
              :tab-size="4"
              :extensions="extensions"
              @focus="setNotice(0, 0)"
              @blur="closeNotice()"
            />
            <p>＜コーディングフォーム＞</p>
            <div v-for="i of OutMainCnt" :key="i">
              <codemirror
                v-model="outMainTextArray[i - 1]"
                placeholder="コードを書く"
                :style="{ height: 'auto', 'font-size': '16pt' }"
                :autofocus="false"
                :indent-with-tab="false"
                :tab-size="4"
                :extensions="extensions"
                @focus="setNotice(0, i)"
                @blur="closeNotice()"
              />
            </div>
            <pre v-show="mainIsShow">
  int main(void){
          </pre
            >
            <div v-for="i of InMainCnt" :key="i">
              <codemirror
                v-model="inMainTextArray[i - 1]"
                placeholder="コードを書く"
                :style="{
                  width: '95%',
                  height: 'auto',
                  'font-size': '16pt',
                  margin: '0 auto',
                }"
                :autofocus="false"
                :indent-with-tab="false"
                :tab-size="4"
                :extensions="extensions"
                @focus="setNotice(1, i)"
                @blur="closeNotice()"
              />
            </div>

            <pre v-show="mainIsShow">
    return 0;
  }
          </pre
            >
          </div>
        </div>
        <div class="codeRunButton">
          <button class="css-button-rounded--green" @click="codeRun()">
            連結して実行
          </button>
        </div>
      </div>
      <CodeRun ref="codeRunner" />
    </div>
  </div>
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { oneDark } from "@codemirror/theme-one-dark";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";

import Toggle from "@vueform/toggle";

import CodeRun from "./components/CodeRun.vue";

export default {
  name: "CodingForm",
  components: {
    Codemirror,
    Toggle,
    CodeRun,
  },
  data() {
    return {
      unitName: "",
      questionTitle: "",
      questionDescription: "",
      viewStepNo: 1, //表示中のステップ
      nowStepNo: 1, //これまでに進んだステップ
      OutMainCnt: 0, //main関数外のtextareaの数
      InMainCnt: 0, //main関数内のtextareaの数

      //表示の制御
      mainIsShow: false,
      backIsDisabled: true,
      nextIsDisabled: false,
      sampleIsShow: true,
      notificationIsShow: false,

      //テキストエリアの文章
      headerText: "",
      outMainTextArray: [],
      inMainTextArray: [],

      //通知バーのテキスト
      notificationText: "",

      //codemirrorの設定
      extensions: [cpp(), oneDark, keymap.of([indentWithTab])],

      //アシストの内容を格納するオブジェクト
      assistObj: null,
    };
  },
  created: async function () {
    //クエリから、どの問題リストなのかを取得
    const nowUrl = new URL(window.location.href); //現在のURLを取得
    //オブジェクトを取得
    const params = nowUrl.searchParams;
    //で問題リスト名を取得
    const formName = params.get("formName");

    const pullFormUrl = "./data/form/" + formName + ".json";
    let errMsg;
    try {
      const response = await fetch(pullFormUrl, {
        method: "GET",
      });
      if (!response.ok) {
        switch (response.status) {
          default:
            errMsg =
              "何らかの理由でエラーが発生しました。（E: " +
              response.status +
              ")";
            throw new Error(errMsg);
        }
      } else {
        const responseData = await response.json();
        this.unitName = responseData.formTitle;
        this.questionTitle = responseData.questionTitle;
        this.questionDescription = responseData.questionDescription;
        this.assistObj = responseData.assistObj;
        if (this.assistObj == null) {
          alert("フォームデータがありません。");
        }
      }
    } catch (errMsg) {
      alert(errMsg);
    }
  },
  methods: {
    changeDisabled: function () {
      if (this.viewStepNo == 1) {
        this.backIsDisabled = true;
      } else {
        this.backIsDisabled = false;
      }
      if (this.viewStepNo == this.assistObj.length) {
        this.nextIsDisabled = true;
      } else {
        this.nextIsDisabled = false;
      }
    },
    backStep: function () {
      this.viewStepNo--;
      this.changeDisabled();
    },
    nextStep: function () {
      //現在のステップよりも前にいる場合
      if (this.viewStepNo < this.nowStepNo) {
        this.viewStepNo++;
        this.changeDisabled();
        return;
      }
      if (this.assistObj[this.nowStepNo].type == 0) {
        //main関数記述前
        this.nowStepNo++;
        this.viewStepNo++;
        this.OutMainCnt++;
      } else if (this.assistObj[this.nowStepNo].type == -1) {
        //main関数記述後
        this.nowStepNo++;
        this.viewStepNo++;
        this.OutMainCnt--; //main関数記述前へ戻す
        this.mainIsShow = true; //main関数を表示
        this.InMainCnt++; //main関数内のtextareaを表示する
      } else if (this.assistObj[this.nowStepNo].type == 1) {
        this.nowStepNo++;
        this.viewStepNo++;
        this.InMainCnt++;
      }
      this.changeDisabled();
    },
    //コードの実行
    codeRun: function () {
      if (this.mainIsShow == false) {
        alert("連結と実行するには、main関数を定義する必要があります。");
        return;
      }
      let code = "";
      const connectedOutMain = this.connectOutMain();
      code = code + this.headerText + "\n" + connectedOutMain;
      code += "int main(void) {\n";
      const connectedInMain = this.connectInMain();
      code += connectedInMain;
      code += "    return 0;\n}\n";
      this.$refs.codeRunner.insertCode(code);
    },
    connectOutMain: function () {
      let connectedTxt = "";
      const outMainTextLeng = this.outMainTextArray.length;
      //main関数がoutMainTextArrayの最後に入っており、重複を避けるためにmain関数は結合しない
      for (let i = 0; i < outMainTextLeng - 1; i++) {
        connectedTxt = connectedTxt + this.outMainTextArray[i] + "\n";
      }
      connectedTxt += "\n";
      return connectedTxt;
    },
    connectInMain: function () {
      let connectedTxt = "";
      const inMainTextLeng = this.inMainTextArray.length;
      for (let i = 0; i < inMainTextLeng; i++) {
        connectedTxt =
          connectedTxt + this.insertTab(this.inMainTextArray[i].split("\n"));
      }
      return connectedTxt;
    },
    insertTab: function (str) {
      let connectedTxt = "";
      const strLeng = str.length;
      for (let i = 0; i < strLeng; i++) {
        connectedTxt = connectedTxt + "    " + str[i] + "\n";
      }
      return connectedTxt;
    },

    //各テキストエリアにフォーカスした時の通知
    notice: function () {
      this.notificationText = "ここに通知が入ります。";
      this.notificationIsShow = true;
    },
    closeNotice: function () {
      this.notificationText = "";
      this.notificationIsShow = false;
    },
    setNotice: function (type, id) {
      //すでに表示されていたら消す
      if (this.notificationIsShow == true) {
        this.notificationIsShow = false;
        this.notificationText = "";
      }
      //ヘッダーコメント
      if (type == 0 && this.mainIsShow == false && id == 0) {
        this.notificationText = this.assistObj[id].notice;
        this.notificationIsShow = true;
        return;
      }
      //main関数
      if (type == 0 && this.mainIsShow == false && id == 2) {
        let place = 0;
        this.assistObj.forEach((element) => {
          if (element.type == -1) {
            console.log("場所：" + place);
            this.notificationText = this.assistObj[place - 1].notice;
            this.notificationIsShow = true;
            return;
          }
          place++;
        });
      }
      if (type == 0) {
        this.notificationText = this.assistObj[id].notice;
        this.notificationIsShow = true;
        return;
      }

      let startPlace = 0;
      this.assistObj.forEach((element) => {
        if (element.type == -1) {
          this.notificationText = this.assistObj[startPlace + id - 1].notice;
          this.notificationIsShow = true;
          return;
        }
        startPlace++;
      });
    },
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
p {
  font-size: 16pt;
}
p.notificationText {
  font-size: 20pt;
}
/*アテンションのスタイル*/
div.notificationArea {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 9;
  /*background: #75a51c;*/
  background: #ff8d0a;
  z-index: 9999;
  margin: 0;
  color: #ffffff;
}
div.notifiLeft {
  text-align: center;
  display: table;
  width: 90%;
  height: 100%;
  float: left;
}
div.notifiRight {
  text-align: center;
  display: table;
  width: 10%;
  height: 100%;
  margin-left: 90%;
  background: #3f76ec;
  cursor: pointer;
}
div.notifiRight p,
div.notifiLeft p {
  display: table-cell;
  vertical-align: middle;
}

div.codingArea {
  width: 100%;
  height: 700px;
}
div.codingLeft {
  width: 40%;
  height: 100%;
  float: left;
}
div.unitName {
  width: 100%;
  height: 8%;
}
div.assist {
  width: 95%;
  height: 92%;
  position: relative;
  border: solid 1px #000000;
}
div.assistInner {
  width: 95%;
  height: 95%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
}
div.assistText {
  width: 100%;
  height: 40%;
}
div.assistSampleExplan {
  width: 100%;
  height: auto;
  background: #d2ffde;
}
div.assistSample {
  width: 100%;
  height: 60%;
}
div.assistSelect {
  text-align: center;
  width: 100%;
  height: 10%;
}
button {
  margin: 10px;
  font-size: 16pt;
}
button.css-button-rounded--green {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #57cc99;
  background: #57cc99;
}
button.css-button-rounded--green:hover {
  background: #fff;
  color: #57cc99;
}
button.css-button-rounded--green:disabled {
  color: #fff;
  border: 2px solid #a7cfbe;
  background: #a7cfbe;
}
button.css-button-rounded--sand {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #adb5bd;
  background: #adb5bd;
}
button.css-button-rounded--sand:hover {
  background: #fff;
  color: #adb5bd;
}
button.css-button-rounded--sand:disabled {
  color: #fff;
  border: 2px solid #d6d6d6;
  background: #d6d6d6;
}

div.codingRight {
  width: 60%;
  height: 100%;
  margin-left: 40%;
}
div.question {
  width: 100%;
  height: 20%;
}
div.codingForm {
  width: 100%;
  height: 75%;
  position: relative;
  border: solid 1px #000000;
  overflow: auto;
}
div.codeRunButton {
  text-align: right;
  width: 100%;
  height: 5%;
}
div.codingFormInner {
  width: 90%;
  height: 90%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
}
pre,
textarea {
  font-size: 16pt;
}
h1 {
  margin: 0;
}
img.styleSample {
  text-align: center;
  width: 80%;
  height: auto;
}

/*prism-editor部分*/
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}

.sampleToggle {
  --toggle-width: 6rem;
}
</style>
<style src="@vueform/toggle/themes/default.css"></style>
