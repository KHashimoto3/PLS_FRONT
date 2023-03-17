import { createApp } from "vue";
import AccountPage from "./AccountPage.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Vuesax from "vuesax3";
import "vuesax3/dist/vuesax.css"; //Vuesax styles

library.add(faList);

createApp(AccountPage)
  .use(Vuesax)
  .mount("#app")
  .component("font-awesome-icon", FontAwesomeIcon);
